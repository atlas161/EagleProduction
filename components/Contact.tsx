import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Mail, Phone, Instagram, MapPin, Send, ChevronDown, Check, CheckCircle, AlertCircle, Loader2, Clock } from 'lucide-react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

const subjects = [
  { id: 1, name: 'Devis' },
  { id: 2, name: 'Informations' },
  { id: 3, name: 'Autre' },
];

// ═══════════════════════════════════════════════════════════════════════════════
// 🔒 SÉCURITÉ - Configuration
// ═══════════════════════════════════════════════════════════════════════════════

// Rate limiting : délai minimum entre 2 soumissions (en ms)
const RATE_LIMIT_DELAY = 60000; // 1 minute
const RATE_LIMIT_KEY = 'eagle_form_last_submit';

// Regex stricte pour validation email (RFC 5322 simplifiée)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Domaines email jetables/temporaires à bloquer
const BLOCKED_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  'yopmail.com', '10minutemail.com', 'trashmail.com', 'fakeinbox.com',
  'temp-mail.org', 'getnada.com', 'maildrop.cc'
];

// Cloudflare Turnstile (clé publique ; la clé secrète est dans les variables d'environnement Netlify)
const TURNSTILE_SITE_KEY = '0x4AAAAAAFJEDmel7ydKYU03';
const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'rate_limited' | 'invalid_email' | 'captcha_required';

// ═══════════════════════════════════════════════════════════════════════════════
// 🔒 SÉCURITÉ - Fonctions de validation
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Vérifie si l'email est valide et non jetable
 */
const isValidEmail = (email: string): boolean => {
  if (!EMAIL_REGEX.test(email)) return false;
  
  const domain = email.split('@')[1]?.toLowerCase();
  if (!domain) return false;
  
  // Vérifie si le domaine est bloqué
  if (BLOCKED_DOMAINS.some(blocked => domain.includes(blocked))) return false;
  
  return true;
};

/**
 * Vérifie le rate limiting (localStorage)
 */
const checkRateLimit = (): { allowed: boolean; remainingSeconds: number } => {
  let lastSubmit: string | null = null;
  try {
    lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
  } catch {
    /* stockage indisponible (navigation privée, cookies bloqués) : pas de limite côté client */
  }
  if (!lastSubmit) return { allowed: true, remainingSeconds: 0 };

  const elapsed = Date.now() - parseInt(lastSubmit, 10);
  const remaining = RATE_LIMIT_DELAY - elapsed;

  if (remaining > 0) {
    return { allowed: false, remainingSeconds: Math.ceil(remaining / 1000) };
  }

  return { allowed: true, remainingSeconds: 0 };
};

/**
 * Enregistre le timestamp de soumission
 */
const recordSubmission = () => {
  try {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
  } catch {
    /* stockage indisponible : sans conséquence */
  }
};

const STATUS_MESSAGES: Partial<Record<FormStatus, string>> = {
  submitting: 'Envoi en cours…',
  success: 'Votre message a bien été envoyé. Nous vous répondons sous 24 heures.',
  error: 'Une erreur est survenue, veuillez réessayer ou nous appeler.',
  rate_limited: 'Merci de patienter avant un nouvel envoi.',
  invalid_email: 'Adresse e-mail invalide.',
  captcha_required: 'Veuillez valider le captcha avant d’envoyer.',
};

export const Contact: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [rateLimitSeconds, setRateLimitSeconds] = useState(0);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState('');

  // Chargement du captcha Turnstile (thème sombre)
  useEffect(() => {
    let cancelled = false;
    let scriptRef: HTMLScriptElement | null = null;
    const render = () => {
      const ts = (window as any).turnstile;
      if (cancelled || !ts || !captchaRef.current || widgetId.current !== null) return;
      widgetId.current = ts.render(captchaRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        language: 'fr',
        callback: (token: string) => setCaptchaToken(token),
        'expired-callback': () => setCaptchaToken(''),
        'error-callback': () => setCaptchaToken(''),
      });
    };
    if ((window as any).turnstile) {
      render();
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT}"]`);
      if (!script) {
        script = document.createElement('script');
        script.src = TURNSTILE_SCRIPT;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
      script.addEventListener('load', render);
      scriptRef = script;
    }
    return () => {
      scriptRef?.removeEventListener('load', render);
      cancelled = true;
      const ts = (window as any).turnstile;
      if (ts && widgetId.current !== null) ts.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  const resetCaptcha = () => {
    setCaptchaToken('');
    const ts = (window as any).turnstile;
    if (ts && widgetId.current !== null) ts.reset(widgetId.current);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 🔒 Vérification rate limiting
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setFormStatus('rate_limited');
      setRateLimitSeconds(rateCheck.remainingSeconds);
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }
    
    // 🔒 Validation email stricte
    if (!isValidEmail(formData.email)) {
      setFormStatus('invalid_email');
      setEmailError('Veuillez entrer une adresse email valide');
      setTimeout(() => {
        setFormStatus('idle');
        setEmailError('');
      }, 5000);
      return;
    }
    
    // 🔒 Captcha Cloudflare Turnstile
    if (!captchaToken) {
      setFormStatus('captcha_required');
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }

    setFormStatus('submitting');

    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    formDataObj.set('cf-turnstile-response', captchaToken);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString(),
      });

      if (response.ok) {
        // 🔒 Enregistrer la soumission pour le rate limiting
        recordSubmission();
        
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setSelectedSubject(subjects[0]);
        resetCaptcha();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      resetCaptcha();
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validation email en temps réel
    if (name === 'email' && value && !isValidEmail(value)) {
      setEmailError('Format email invalide');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-white/5 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
        {/* Left Column: Info & Details */}
        <div className="flex flex-col justify-center">
            <Reveal>
                <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Contact</span>
                <h1 id="contact-title" className="scroll-mt-20 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6">Parlons de votre projet</h1>
                <p className="text-textSecondary text-lg mb-12 leading-relaxed">
                    Une idée ? Un besoin spécifique ? <br/>
                    Nous sommes joignables directement par téléphone ou via le formulaire.
                </p>
                <div className="flex flex-wrap gap-2 mb-12">
                  <span className="text-[11px] uppercase tracking-widest bg-white/10 border border-white/15 text-white px-3 py-1.5 rounded-full">
                    Devis gratuit
                  </span>
                  <span className="text-[11px] uppercase tracking-widest bg-accent/20 border border-accent/30 text-accent px-3 py-1.5 rounded-full">
                    Réponse rapide
                  </span>
                  <span className="text-[11px] uppercase tracking-widest bg-white/10 border border-white/15 text-white px-3 py-1.5 rounded-full">
                    Certifié DGAC
                  </span>
                </div>

                <div className="space-y-8">
                    {/* Email */}
                    <a href="mailto:contact@eagle-prod.com" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Email</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">contact@eagle-prod.com</div>
                        </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+33699361715" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Téléphone</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">06 99 36 17 15</div>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com/eagleproduction.video" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Instagram size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Instagram</div>
                            <div className="text-xl font-medium text-white group-hover:text-accent transition-colors">@eagleproduction.video</div>
                        </div>
                    </a>

                     {/* Location */}
                     <div className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-textSecondary tracking-wider mb-1 group-hover:text-white transition-colors">Localisation</div>
                            <div className="text-xl font-medium text-white">Angoulême (16)</div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>

        {/* Right Column: Contact Form */}
        <Reveal delay={200}>
            <div className="bg-surfaceHighlight/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl shadow-black/30">
                {/* Formulaire Netlify */}
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                    {/* Champ caché pour Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Honeypot anti-spam */}
                    <p className="hidden">
                      <label>Ne pas remplir si vous êtes humain: <input name="bot-field" /></label>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus-visible:ring-1 focus-visible:ring-accent transition-colors placeholder:text-white/60"
                                placeholder="Votre Nom"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                aria-invalid={emailError ? true : undefined}
                                aria-describedby={emailError ? 'email-error' : undefined}
                                className={clsx(
                                  "w-full bg-surface border rounded-xl px-4 py-3 text-white focus:outline-none focus-visible:ring-1 transition-colors placeholder:text-white/60",
                                  emailError ? "border-red-500 focus:border-red-500 focus-visible:ring-red-500" : "border-white/10 focus:border-accent focus-visible:ring-accent"
                                )}
                                placeholder="votre@email.com"
                            />
                            {emailError && (
                              <p id="email-error" className="text-red-400 text-xs mt-1 ml-2">{emailError}</p>
                            )}
                        </div>
                    </div>
                    
                     <div className="space-y-2">
                        <label id="subject-label" className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Sujet</label>
                        {/* Input caché pour envoyer le sujet à Netlify */}
                        <input type="hidden" name="subject" value={selectedSubject.name} />
                        <div className="relative z-20">
                             <Listbox value={selectedSubject} onChange={setSelectedSubject}>
                                <div className="relative mt-1">
                                  <Listbox.Button aria-labelledby="subject-label" className="relative w-full cursor-pointer bg-surface border border-white/10 rounded-xl py-3 pl-4 pr-10 text-left text-white focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/60 sm:text-sm transition-colors">
                                    <span className="block truncate">{selectedSubject.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                      <ChevronDown
                                        className="h-5 w-5 text-textSecondary"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>
                                  <Transition
                                    as={React.Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-surfaceHighlight border border-white/10 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm backdrop-blur-xl">
                                      {subjects.map((subject, personIdx) => (
                                        <Listbox.Option
                                          key={personIdx}
                                          className={({ active }) =>
                                            `relative cursor-pointer select-none py-3 pl-10 pr-4 ${
                                              active ? 'bg-white/10 text-accent' : 'text-white'
                                            }`
                                          }
                                          value={subject}
                                        >
                                          {({ selected }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected ? 'font-medium text-accent' : 'font-normal'
                                                }`}
                                              >
                                                {subject.name}
                                              </span>
                                              {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
                                                  <Check className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </Listbox>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-semibold text-textSecondary tracking-wider ml-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus-visible:ring-1 focus-visible:ring-accent transition-colors resize-none placeholder:text-white/60"
                            placeholder="Détails de votre mission..."
                        ></textarea>
                    </div>

                    {/* Captcha Cloudflare Turnstile (thème sombre) */}
                    <div ref={captchaRef} className="min-h-[65px]" />

                    {/* Annonce vocale de l'état du formulaire (lecteurs d'écran) */}
                    <p role="status" aria-live="polite" className="sr-only">{STATUS_MESSAGES[formStatus] ?? ''}</p>

                    {/* Bouton avec états */}
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting' || formStatus === 'rate_limited'}
                      className={clsx(
                        "w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform",
                        formStatus === 'success' && "bg-green-500 text-white",
                        formStatus === 'error' && "bg-red-500 text-white",
                        formStatus === 'rate_limited' && "bg-orange-500 text-white cursor-not-allowed",
                        formStatus === 'invalid_email' && "bg-red-500 text-white",
                        formStatus === 'captcha_required' && "bg-orange-500 text-white",
                        formStatus === 'submitting' && "bg-white/50 text-black cursor-wait",
                        formStatus === 'idle' && "bg-white text-black hover:bg-accent hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                      )}
                    >
                        {formStatus === 'idle' && (
                          <>
                            <Send size={18} />
                            Envoyer la demande
                          </>
                        )}
                        {formStatus === 'submitting' && (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Envoi en cours...
                          </>
                        )}
                        {formStatus === 'success' && (
                          <>
                            <CheckCircle size={18} />
                            Message envoyé !
                          </>
                        )}
                        {formStatus === 'error' && (
                          <>
                            <AlertCircle size={18} />
                            Erreur, réessayez
                          </>
                        )}
                        {formStatus === 'rate_limited' && (
                          <>
                            <Clock size={18} />
                            Patientez {rateLimitSeconds}s
                          </>
                        )}
                        {formStatus === 'captcha_required' && (
                          <>
                            <AlertCircle size={18} />
                            Validez le captcha
                          </>
                        )}
                        {formStatus === 'invalid_email' && (
                          <>
                            <AlertCircle size={18} />
                            Email invalide
                          </>
                        )}
                    </button>
                </form>
            </div>
        </Reveal>
      </div>
      </div>
    </div>
  );
};
