import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   Design tokens: resolve to CSS custom properties so the
   same markup renders both the dark and light (paper) themes.
   Values are defined in globalStyles below.
───────────────────────────────────────────────────────── */
const c = {
  bg: "var(--bg)",
  bgAlt: "var(--bg-alt)",
  text: "var(--text)",
  textMuted: "var(--text-muted)",
  border: "var(--border)",
  accent: "var(--accent)",
  accentHover: "var(--accent-hover)",
  highlight: "var(--highlight)",
};

/* ─────────────────────────────────────────────────────────
   Content
───────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    n: "01",
    title: "Crime Reporter",
    year: "2025",
    tags: ["React", "Flask", "SQLite", "Machine Learning"],
    desc: "A secure portal for reporting crimes, with ML-based classification and real-time citizen–authority communication.",
    href: "https://github.com/Khushi-Choudhary11",
  },
  {
    n: "02",
    title: "Engage2Value",
    year: "2025",
    tags: ["Python", "Pandas", "XGBoost", "Kaggle"],
    desc: "Predicting customer conversion from clickstream data with an ensemble model that reached an R² of 0.68 in a Kaggle competition.",
    href: "https://github.com/Khushi-Choudhary11",
  },
  {
    n: "03",
    title: "Survival Detection",
    year: "2025",
    tags: ["CatBoost", "XGBoost", "Random Forest"],
    desc: "Predicting passenger survival from demographic and socio-economic data, reaching 86.5% leaderboard accuracy.",
    href: "https://github.com/Khushi-Choudhary11",
  },
  {
    n: "04",
    title: "Business Cost Analytics",
    year: "2025",
    tags: ["Power BI", "DAX", "Excel"],
    desc: "An interactive dashboard comparing departmental costs across regions, with dynamic filtering and forecast views.",
    href: "https://github.com/Khushi-Choudhary11",
  },
];

const SKILLS = [
  { label: "Data", items: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Excel", "Data Visualization"] },
  { label: "AI / ML", items: ["Machine Learning", "Scikit-learn", "XGBoost", "CatBoost", "LLMs", "NLP", "Feature Engineering"] },
  { label: "Engineering", items: ["JavaScript", "TypeScript", "React", "Flask", "FastAPI", "Node.js", "REST APIs"] },
  { label: "Cloud", items: ["PostgreSQL", "MongoDB", "GCP", "Docker", "Vercel"] },
];

const EXPERIENCE = [
  {
    period: "2025 - 2026",
    role: "Data Annotator & Jailbreaker",
    org: "AI4Bharat",
    desc: "Evaluated and red-teamed Indian LLMs through adversarial prompt design and multilingual annotation, designing 780+ prompts across Hindi, English and Hinglish.",
  },
  {
    period: "2023 - Present",
    role: "BS in Data Science",
    org: "IIT Madras",
    desc: "Coursework spanning machine learning, statistics, algorithms and software engineering.",
  },
];

/* ─────────────────────────────────────────────────────────
   Global styles: light (paper) is the default palette,
   dark is applied via [data-theme="dark"] from the toggle.
───────────────────────────────────────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap');

  :root {
    --bg: #F4F1E9;
    --bg-alt: #EAE6DB;
    --text: #20231F;
    --text-muted: #696B62;
    --border: #D2CEC2;
    --accent: #435344;
    --accent-hover: #5C6C5A;
    --highlight: #8A8067;
    color-scheme: light;
  }
  :root[data-theme="dark"] {
    --bg: #171815;
    --bg-alt: #20211D;
    --text: #E9E6DC;
    --text-muted: #A8A69C;
    --border: #3A3B34;
    --accent: #A49A6A;
    --accent-hover: #C0B67F;
    --highlight: #D6CDB5;
    color-scheme: dark;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background: ${c.bg};
    color: ${c.text};
    font-family: 'Inter', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    transition: background 320ms ease, color 320ms ease;
  }
  a { color: inherit; }
  ::selection { background: ${c.accent}; color: ${c.bg}; }

  h1, h2, h3, .heading { font-family: 'DM Sans', system-ui, sans-serif; }
  .serif { font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; }

  .container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 48px;
    box-sizing: border-box;
  }

  section { scroll-margin-top: 90px; }

  .label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${c.accent};
  }

  .rule { border: none; border-top: 1px solid ${c.border}; }

  .link {
    position: relative;
    text-decoration: none;
    color: ${c.text};
    padding-bottom: 2px;
    background-image: linear-gradient(${c.accent}, ${c.accent});
    background-size: 0% 1px;
    background-position: left bottom;
    background-repeat: no-repeat;
    transition: background-size 280ms ease, color 280ms ease;
  }
  .link:hover { background-size: 100% 1px; color: ${c.accentHover}; }

  .reveal { opacity: 0; transform: translateY(14px); transition: opacity 550ms ease, transform 550ms ease; }
  .reveal.in { opacity: 1; transform: translateY(0); }

  @media (max-width: 900px) {
    .container { padding: 0 28px; }
  }
  @media (max-width: 640px) {
    .container { padding: 0 20px; }
  }
`;

/* ─────────────────────────────────────────────────────────
   Scroll reveal hook
───────────────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.classList.contains("reveal") ? [el] : el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in"); }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────────────────
   Theme toggle
───────────────────────────────────────────────────────── */
function ThemeToggle({ theme, onToggle }) {
  const next = theme === "dark" ? "Light" : "Dark";
  return (
    <button
      onClick={onToggle}
      className="link"
      aria-label={`Switch to ${next.toLowerCase()} theme`}
      style={{
        background: "none",
        border: `1px solid ${c.border}`,
        borderRadius: 100,
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: c.textMuted,
        padding: "6px 14px",
        whiteSpace: "nowrap",
      }}
    >
      {next}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   Nav
───────────────────────────────────────────────────────── */
function Nav({ theme, onToggleTheme }) {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: c.bg, borderBottom: `2px solid ${c.accent}`, transition: "background 320ms ease, border-color 320ms ease" }}>
      <div className="container nav-bar" style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" className="heading nav-logo" style={{ textDecoration: "none", color: c.text, fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
          KHUSHI CHOUDHARY
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <nav className="nav-links" style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="link" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: c.textMuted, whiteSpace: "nowrap" }}>
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero
───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" style={{ minHeight: "100vh", paddingTop: 76 }}>
      <div className="container" style={{ minHeight: "calc(100vh - 76px)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px" }}>
        <div className="label reveal in" style={{ marginBottom: 28 }}>DATA · AI · AUTOMATION</div>
        <h1 className="heading" style={{ fontSize: "clamp(2.1rem, 5vw, 3.6rem)", fontWeight: 500, lineHeight: 1.18, letterSpacing: "-0.01em", maxWidth: 820, color: c.text }}>
          Making complex things a little more useful.
        </h1>
        <p className="serif" style={{ fontSize: "clamp(1.05rem, 2vw, 1.3rem)", color: c.textMuted, marginTop: 28, maxWidth: 560, lineHeight: 1.6 }}>
          I work with data, software and AI to build practical solutions to real problems.
        </p>
        <a href="#about" className="link" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 56, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.textMuted }}>
          Scroll to explore <span aria-hidden style={{ color: c.accent }}>↓</span>
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   About
───────────────────────────────────────────────────────── */
function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="container" style={{ padding: "120px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="grid-2">
        <div className="reveal">
          <div className="label">A Little About Me</div>
        </div>
        <div className="reveal" style={{ transitionDelay: "80ms" }}>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", lineHeight: 1.85, color: c.text, maxWidth: 640, marginBottom: 24 }}>
            I'm interested in the space where data, software and AI actually solve useful problems.
          </p>
          <p style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)", lineHeight: 1.85, color: c.text, maxWidth: 640, marginBottom: 24 }}>
            I enjoy taking something messy, whether it's data, a workflow or a technical problem, and turning it into something structured, understandable and useful.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: c.textMuted, maxWidth: 640 }}>
            I'm currently a Data Science student at IIT Madras, and most recently spent time at AI4Bharat working on how large language models fail, designing prompts and testing model safety in Hindi, English and Hinglish.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Work / Projects: editorial rows
───────────────────────────────────────────────────────── */
function ProjectRow({ p, isLast }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textDecoration: "none",
        color: c.text,
        padding: "36px 0",
        borderBottom: isLast ? "none" : `1px solid ${c.border}`,
        transition: "background 280ms ease, border-color 320ms ease",
        background: hover ? c.bgAlt : "transparent",
      }}
    >
      <div className="project-row" style={{ display: "grid", gridTemplateColumns: "64px 1fr auto", alignItems: "baseline", gap: 24, padding: "0 16px" }}>
        <span className="heading" style={{ fontSize: 13, color: c.textMuted, fontWeight: 500 }}>{p.n}</span>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <h3 className="heading" style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)", fontWeight: 600, letterSpacing: "-0.01em", transition: "color 280ms ease", color: hover ? c.accentHover : c.text }}>
              {p.title}
            </h3>
            <span style={{ fontSize: 12, color: c.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{p.year}</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px", marginTop: 10, marginBottom: 14 }}>
            {p.tags.map((t, i) => (
              <span key={t} style={{ fontSize: 11, letterSpacing: "0.04em", color: c.accent, textTransform: "uppercase" }}>
                {t}{i < p.tags.length - 1 && <span style={{ color: c.highlight, marginLeft: 10 }}>·</span>}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: c.textMuted, maxWidth: 620 }}>{p.desc}</p>
        </div>
        <span aria-hidden style={{ fontSize: 14, color: c.textMuted, opacity: hover ? 1 : 0, transform: hover ? "translateX(0)" : "translateX(-6px)", transition: "opacity 280ms ease, transform 280ms ease", justifySelf: "end" }}>
          →
        </span>
      </div>
    </a>
  );
}

function Work() {
  const ref = useReveal();
  return (
    <section id="work" ref={ref} className="container" style={{ padding: "40px 48px 120px" }}>
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="label" style={{ marginBottom: 16 }}>Selected Work</div>
        <h2 className="heading" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)", fontWeight: 500, letterSpacing: "-0.01em" }}>
          A few things I've built
        </h2>
      </div>
      <div style={{ borderTop: `1px solid ${c.border}`, transition: "border-color 320ms ease" }}>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.n} p={p} isLast={i === PROJECTS.length - 1} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Skills
───────────────────────────────────────────────────────── */
function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" ref={ref} style={{ background: c.bgAlt, borderTop: `1px solid ${c.border}`, borderBottom: `1px solid ${c.border}`, transition: "background 320ms ease, border-color 320ms ease" }}>
      <div className="container" style={{ padding: "100px 48px" }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div className="label">Toolkit</div>
        </div>
        <div className="reveal skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {SKILLS.map((cat) => (
            <div key={cat.label}>
              <h3 className="heading" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.text, marginBottom: 14, paddingBottom: 14, borderBottom: `1px solid ${c.border}`, transition: "border-color 320ms ease" }}>
                {cat.label}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: c.textMuted }}>{cat.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Experience
───────────────────────────────────────────────────────── */
function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" ref={ref} className="container" style={{ padding: "120px 48px" }}>
      <div className="reveal" style={{ marginBottom: 56 }}>
        <div className="label">Experience</div>
      </div>
      <div>
        {EXPERIENCE.map((e, i) => (
          <div
            key={e.role}
            className="reveal experience-row"
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 32,
              padding: "32px 0",
              borderTop: `1px solid ${c.border}`,
              borderBottom: i === EXPERIENCE.length - 1 ? `1px solid ${c.border}` : "none",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <div className="heading" style={{ fontSize: 13, color: c.textMuted, fontWeight: 500, letterSpacing: "0.02em" }}>{e.period}</div>
            <div>
              <h3 className="heading" style={{ fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontWeight: 600, marginBottom: 4 }}>{e.role}</h3>
              <div style={{ fontSize: 13, color: c.accent, marginBottom: 12, fontWeight: 500 }}>{e.org}</div>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: c.textMuted, maxWidth: 620 }}>{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Contact
───────────────────────────────────────────────────────── */
function Contact() {
  const ref = useReveal();
  const links = [
    { label: "Email", value: "khushich9085@gmail.com", href: "mailto:khushich9085@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/khushi-choudhary", href: "https://www.linkedin.com/in/khushi-choudhary-1b52462a7/" },
    { label: "GitHub", value: "github.com/Khushi-Choudhary11", href: "https://github.com/Khushi-Choudhary11" },
  ];
  return (
    <section id="contact" ref={ref} className="container" style={{ padding: "120px 48px 100px" }}>
      <div className="reveal">
        <h2 className="heading" style={{ fontSize: "clamp(1.8rem, 4.2vw, 3rem)", fontWeight: 500, letterSpacing: "-0.01em", maxWidth: 720, marginBottom: 48 }}>
          LET'S BUILD SOMETHING USEFUL.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="link" style={{ display: "block" }}>
              <div className="label" style={{ marginBottom: 6, color: c.textMuted }}>{l.label}</div>
              <div style={{ fontSize: 16, color: c.text }}>{l.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${c.border}`, transition: "border-color 320ms ease" }}>
      <div className="container" style={{ padding: "28px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 12, color: c.textMuted }}>&copy; {new Date().getFullYear()} Khushi Choudhary</span>
        <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="link" style={{ fontSize: 12, color: c.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────
   Responsive overrides
───────────────────────────────────────────────────────── */
const responsiveStyles = `
  @media (max-width: 860px) {
    .grid-2 { grid-template-columns: 1fr !important; gap: 24px !important; }
    .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .experience-row { grid-template-columns: 1fr !important; gap: 8px !important; }
    .project-row { grid-template-columns: 40px 1fr !important; }
    .project-row > span:last-child { display: none; }
  }
  @media (max-width: 560px) {
    .skills-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  }
  @media (max-width: 640px) {
    .nav-bar { height: auto !important; flex-wrap: wrap !important; row-gap: 10px !important; padding-top: 16px !important; padding-bottom: 16px !important; }
    .nav-logo { font-size: 12px !important; }
    .nav-links { gap: 16px !important; }
  }
`;

/* ─────────────────────────────────────────────────────────
   Root
───────────────────────────────────────────────────────── */
const THEME_KEY = "kc-portfolio-theme";

export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore, private browsing etc. */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <style>{globalStyles}{responsiveStyles}</style>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
