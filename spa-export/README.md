# Aura Beauty Studio — SPA (Vite puro)

Versione statica Client-Side Rendering del progetto, pronta per il deploy su
Vercel, Netlify, GitHub Pages o qualsiasi static host.

## Setup

```bash
npm install     # oppure: pnpm install / bun install
npm run dev     # http://localhost:5173
npm run build   # genera ./dist
npm run preview # serve ./dist localmente
```

L'output di build è una classica cartella `dist/` con `index.html` + asset
hashed. Nessun server entry point, nessun SSR.

## Deploy

### Vercel
1. Importa il repo su https://vercel.com/new
2. Framework preset: **Vite**
3. Build command: `npm run build` — Output directory: `dist`
4. Deploy.

### GitHub Pages
1. `npm run build`
2. Pubblica il contenuto di `dist/` sul branch `gh-pages` (o usa
   [vite-plugin-gh-pages](https://github.com/lukasz-lg/vite-plugin-gh-pages) /
   GitHub Actions).
3. Il `base: "./"` in `vite.config.ts` rende i path relativi: funziona anche
   sotto `https://utente.github.io/nome-repo/`.

## Note

- `<meta name="robots" content="noindex, nofollow">` e
  `public/robots.txt` bloccano l'indicizzazione.
- Stack: React 19 + Vite 6 + Tailwind v4 + lucide-react.
- Tutto il codice della landing è in `src/App.tsx`.
