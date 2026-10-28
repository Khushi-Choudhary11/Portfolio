// Single source of truth for personal facts. Edit here; components read from this file.
// Anything set to null is hidden on the site rather than shown as a placeholder.

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Khushi Choudhary",
  wordmark: "Khushi.",
  eyebrow: "AI / ML · LLMs · MLOps · Full-Stack",
  role: "Data Science Student @ IIT Madras",
  tagline: "Building intelligent systems, meaningful products, and a better future with AI.",
  focus: ["AI/ML", "LLMs", "MLOps", "Data Science", "Full-Stack", "Generative AI"],

  // Drop a PDF at public/resume/Khushi_Choudhary_Resume.pdf and set this to
  // `${base}resume/Khushi_Choudhary_Resume.pdf` to enable the Download Resume button.
  resumeUrl: null,

  email: "khushich9085@gmail.com",
  links: {
    github: "https://github.com/Khushi-Choudhary11",
    linkedin: "https://www.linkedin.com/in/khushi-choudhary-1b52462a7/",
    kaggle: "https://www.kaggle.com/chkhushi123",
  },

  images: {
    hero: `${base}images/banner.webp`,
    heroCrop: `${base}images/workspace-crop.webp`,
    footer: `${base}images/footer.webp`,
  },

  traits: [
    { title: "Problem Solver", sub: "Curious & Analytical", icon: "brain" },
    { title: "Builder", sub: "From Ideas to Real Products", icon: "hammer" },
    { title: "Lifelong Learner", sub: "Always Exploring", icon: "book" },
    { title: "Impact Driven", sub: "Tech for a Better World", icon: "sparkles" },
  ],

  about: {
    bio: [
      "I'm Khushi Choudhary, a Data Science student at IIT Madras, passionate about building AI-powered solutions that solve real-world problems.",
      "I enjoy working at the intersection of Machine Learning, LLMs, MLOps and product development: taking a model out of the notebook and turning it into something people can actually use.",
    ],
    annotation: "Same girl. Bigger dreams. Better tools.",
    details: [
      { label: "Education", value: "IIT Madras · BS in Data Science" },
      { label: "Interests", value: "AI/ML, LLMs, Generative AI, MLOps" },
      { label: "Open to", value: "Internships & collaborations" },
    ],
  },

  education: {
    institution: "Indian Institute of Technology Madras",
    program: "BS in Data Science and Applications",
    years: "2023 – 2027",
    // Keep these current. Set a value to null to hide that metric.
    metrics: { cgpa: null, credits: null },
    coursework: ["Machine Learning", "Deep Learning", "MLOps", "Software Engineering", "Statistics", "Database Systems"],
    quote: "Learning today, building tomorrow.",
  },
};
