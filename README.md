# Portfolio

Personal portfolio site for Khushi Choudhary: a quiet editorial design with a light/dark theme toggle, built with React and Vite.

## Stack

- React 19 + Vite
- Plain CSS via CSS custom properties (no UI framework, no icon library) — theme colors defined in `src/Portfolio.jsx`

## Development

```
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Structure

- `src/Portfolio.jsx` — the entire site: layout, content data (projects, skills, experience), theme tokens, and the light/dark toggle
- `src/main.jsx` / `src/App.jsx` — app entry
- `public/` — favicon and static assets
