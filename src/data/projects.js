// Featured projects. `repo` / `demo` are only rendered when set, so never put a guessed URL here.
// `visual` picks the illustration drawn on the card (see components/ProjectVisual.jsx);
// these are representative illustrations, not screenshots.

export const projects = [
  {
    slug: "sachcheck",
    title: "SachCheck",
    category: "AI · Fact-Checking",
    year: "2025",
    summary: "Real-time AI fact verification for articles, news and images: OCR, claim extraction and evidence checks streamed live to the user.",
    tags: ["React", "TypeScript", "FastAPI", "OCR", "NLI"],
    repo: "https://github.com/Khushi-Choudhary11/SachCheck",
    demo: null,
    visual: "factcheck",
    caseStudy: {
      problem: "Misinformation spreads faster than people can check it, and most fact-checking tools work on whole articles rather than the individual claims inside them.",
      approach: "Extract claims from text or images (via OCR), then cross-reference each claim against multiple evidence sources in parallel and score it with a DeBERTa-v3 natural-language-inference model.",
      architecture: ["React + TypeScript client", "FastAPI backend streaming results over Server-Sent Events", "OCR for image input", "DeBERTa-v3 NLI for claim/evidence entailment", "Parallel evidence lookup across 4 sources"],
    },
  },
  {
    slug: "glow-suite",
    title: "Glow Suite",
    category: "AI · Product Engineering",
    year: "2026",
    summary: "B2B salon management platform with role-based dashboards, automated invoicing and a Claude-powered assistant for managers and customers.",
    tags: ["Vue 3", "Flask", "SQLite", "Claude API"],
    repo: null, // team repository, link added once it is public
    demo: null,
    visual: "dashboard",
    caseStudy: {
      problem: "Salons juggle appointments, staff, inventory and customer loyalty across spreadsheets and paper.",
      approach: "IITM Software Engineering team project, where I was Project Manager running an Agile process. We built a full-stack platform with 4-role access control and AI features powered by Claude Haiku 4.5.",
      architecture: ["Vue 3 + Vite + Pinia frontend", "Flask REST API with token auth and 4-role RBAC", "Scheduler jobs for attendance and birthday rewards", "Automated PDF invoicing and email", "Claude API assistant with live database context", "187 pytest tests across 14 files"],
    },
  },
  {
    slug: "marg-copilot",
    title: "MARG Copilot",
    category: "AI · Optimisation",
    year: "2026",
    summary: "AI co-pilot for Indian Railways section controllers: a corridor digital twin with delay prediction, CP-SAT re-sequencing and plain-language explanations.",
    tags: ["FastAPI", "PyTorch", "OR-Tools", "React", "TypeScript"],
    repo: "https://github.com/Khushi-Choudhary11/MARG-Copilot",
    demo: "https://marg-copilot.vercel.app",
    visual: "map",
    caseStudy: {
      problem: "Section controllers decide train precedence and crossings largely from experience, and a single disruption can cascade down a corridor.",
      approach: "Replay the corridor as a digital twin from timetable data, predict delays, and recommend re-sequencing when something goes wrong, with an explanation a controller can trust.",
      architecture: ["Discrete-event simulation replaying the timetable at 60x", "PyTorch delay predictor (30/60/120 min horizons) with heuristic fallback", "OR-Tools CP-SAT sequencing optimiser", "Claude API explanations with template fallback", "JWT-secured REST + WebSocket API", "React + Leaflet control-tower UI"],
    },
  },
  {
    slug: "iris-mlops",
    title: "IRIS MLOps Pipeline",
    category: "ML Engineering",
    year: "2026",
    summary: "End-to-end ML pipeline on Google Cloud exploring reproducibility, feature management, training and CI-driven validation.",
    tags: ["Vertex AI", "DVC", "Feast", "GitHub Actions"],
    repo: "https://github.com/Khushi-Choudhary11/23f3002872_MLOPS_WEEKLY_ASSIGNMENT",
    demo: null,
    visual: "pipeline",
    caseStudy: {
      problem: "Course project for IITM's MLOps course: make a simple model fully reproducible, from data versioning through to automated checks.",
      approach: "Version data with DVC, serve features through Feast, train on Vertex AI and gate changes with GitHub Actions CI.",
      architecture: ["Google Cloud Storage for data and artifacts", "DVC for data versioning", "Feast feature store", "Vertex AI training", "GitHub Actions CI"],
    },
  },
  {
    slug: "crime-reporter",
    title: "Crime Reporter",
    category: "Full-Stack · ML",
    year: "2025",
    summary: "Crime reporting platform with real-time citizen–authority chat, map visualisation and ML-based report classification.",
    tags: ["React", "Flask", "SQLite", "JWT"],
    repo: "https://github.com/Khushi-Choudhary11/CrimeReporter",
    demo: null,
    visual: "map",
    caseStudy: null,
  },
  {
    slug: "survival-prediction",
    title: "Survival Prediction",
    category: "Machine Learning",
    year: "2025",
    summary: "Maritime survival prediction on noisy tabular data, reaching 86.5% accuracy with a CatBoost / XGBoost / Random Forest ensemble.",
    tags: ["scikit-learn", "XGBoost", "CatBoost"],
    repo: "https://github.com/Khushi-Choudhary11/survival-prediction",
    demo: null,
    visual: "chart",
    caseStudy: null,
  },
];

export const openSource = [
  {
    repo: "vicharanashala/pybe",
    url: "https://github.com/vicharanashala/pybe/pull/60",
    title: "Scenario Generator for PyBe",
    note: "AI-generated five-stage case studies with mentor review and learner workflows, across 6 LLM providers.",
  },
  {
    repo: "vicharanashala/crowd-source-faq",
    url: "https://github.com/vicharanashala/crowd-source-faq/pulls?q=is%3Apr+author%3AKhushi-Choudhary11+is%3Amerged",
    title: "4 merged PRs",
    note: "Theme system, light/dark toggle and admin panel UI for a full-stack FAQ portal.",
  },
];
