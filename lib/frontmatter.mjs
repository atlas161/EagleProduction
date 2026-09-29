// Parseur de frontmatter YAML (sous-ensemble) partagé entre le site (Vite) et build.js (Node).
// Gère ce que produit Pages CMS : chaînes entre guillemets, valeurs repliées sur plusieurs lignes,
// listes en bloc (`- item`), listes inline (`["a", "b"]`) et booléens.

const splitInlineList = (inner) => {
  const items = [];
  let current = '';
  let quote = null;
  for (let i = 0; i < inner.length; i++) {
    const ch = inner[i];
    if (quote) {
      if (ch === '\\' && quote === '"' && i + 1 < inner.length) {
        current += ch + inner[++i];
        continue;
      }
      if (ch === quote) quote = null;
      current += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      current += ch;
    } else if (ch === ',') {
      items.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) items.push(current);
  return items.map((s) => parseScalar(s.trim()));
};

const parseScalar = (text) => {
  const t = text.trim();
  if (t === 'true') return true;
  if (t === 'false') return false;
  if (t.startsWith('[') && t.endsWith(']')) return splitInlineList(t.slice(1, -1));
  if (t.length >= 2 && t.startsWith('"') && t.endsWith('"')) {
    return t.slice(1, -1).replace(/\\(["\\])/g, '$1');
  }
  if (t.length >= 2 && t.startsWith("'") && t.endsWith("'")) {
    return t.slice(1, -1).replace(/''/g, "'");
  }
  return t;
};

const parseYamlSubset = (text) => {
  const data = {};
  const lines = text.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const head = lines[i].match(/^([A-Za-z_][\w-]*):[ \t]*(.*)$/);
    if (!head) {
      i++;
      continue;
    }
    const [, key, first] = head;
    const rest = [];
    i++;
    while (i < lines.length && !/^[A-Za-z_][\w-]*:/.test(lines[i])) {
      rest.push(lines[i]);
      i++;
    }
    const cont = rest.map((l) => l.trim()).filter(Boolean);

    if (first === '' && cont.length && cont.every((l) => l.startsWith('- ') || l === '-')) {
      data[key] = cont.map((l) => parseScalar(l.replace(/^-\s*/, '')));
    } else if (/^[|>][+-]?$/.test(first)) {
      data[key] = cont.join(first.startsWith('|') ? '\n' : ' ');
    } else {
      data[key] = parseScalar([first, ...cont].join(' '));
    }
  }
  return data;
};

/**
 * @param {string} raw contenu complet d'un fichier .md
 * @returns {{ data: Record<string, any>, body: string } | null}
 */
export const parseFrontMatter = (raw) => {
  const m = raw.match(/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n([\s\S]*))?$/);
  if (!m) return null;
  return { data: parseYamlSubset(m[1]), body: m[2] ?? '' };
};
