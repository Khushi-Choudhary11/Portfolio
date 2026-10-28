# Portfolio

Personal portfolio for Khushi Choudhary: a noir & gold editorial design, built with React and Vite.

Live: https://khushi-choudhary11.github.io/Portfolio/

## Stack

- React 19 + Vite
- Framer Motion (reveals, mobile drawer, case-study modal; respects reduced motion)
- lucide-react and react-icons (UI and technology logos)
- Plain CSS with design tokens in `src/styles/global.css`

## Editing content

All personal content lives in `src/data/`, so text can change without touching components:

| File | What it holds |
|---|---|
| `profile.js` | name, tagline, links, About text, education metrics, resume link |
| `projects.js` | featured projects, case studies, open-source contributions |
| `experience.js` | timeline entries |
| `skills.js` | skills and their filter categories |
| `blog.js` | posts (drafts show "In the works" until `date` and `body` are set) |

Fields set to `null` are hidden rather than shown as placeholders. For example, to enable the
**Download Resume** button, add the PDF under `public/resume/` and set `resumeUrl` in `profile.js`.

## Development

```
npm install
npm run dev      # dev server
npm run lint     # eslint
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`.
