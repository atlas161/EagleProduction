// Vérifie le captcha Cloudflare Turnstile côté serveur, puis transmet la demande à Netlify Forms.
// Nécessite la variable d'environnement TURNSTILE_SECRET_KEY (Netlify > Site settings > Environment variables).

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'Méthode non autorisée' }, 405);

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return json({ error: 'Captcha non configuré' }, 500);

  const params = new URLSearchParams(await req.text());
  const token = params.get('cf-turnstile-response');
  if (!token) return json({ error: 'Captcha manquant' }, 400);

  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
      remoteip: req.headers.get('x-nf-client-connection-ip') || '',
    }),
  });
  const result = await verify.json().catch(() => ({ success: false }));
  if (!result.success) return json({ error: 'Captcha invalide' }, 403);

  // Le jeton est à usage unique et n'a pas à être stocké avec la demande
  params.delete('cf-turnstile-response');
  params.set('form-name', 'contact');

  const origin = process.env.URL || new URL(req.url).origin;
  const forward = await fetch(`${origin}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  if (!forward.ok) return json({ error: 'Envoi impossible' }, 502);

  return json({ ok: true });
};
