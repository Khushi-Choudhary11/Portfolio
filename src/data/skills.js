import {
  SiPython, SiJavascript, SiTypescript, SiPostgresql, SiSqlite, SiPandas, SiNumpy, SiScikitlearn,
  SiPytorch, SiTensorflow, SiReact, SiVuedotjs, SiFlask, SiFastapi, SiDocker, SiMlflow, SiDvc,
  SiGooglecloud, SiGit, SiGithubactions, SiAnthropic, SiLangchain, SiApachespark, SiJupyter,
  SiLinux, SiVite, SiHuggingface, SiGooglegemini, SiOpenjdk,
} from "react-icons/si";
import { Database, Layers, Workflow, Sigma } from "lucide-react";

export const categories = ["All", "Languages", "ML / DL", "LLM / GenAI", "Web", "MLOps / Cloud", "Data & Tools"];

// Only tools she has used in projects, coursework or internships. No proficiency ratings by design.
export const skills = [
  { name: "Python", icon: SiPython, cat: "Languages" },
  { name: "SQL", icon: Database, cat: "Languages" },
  { name: "JavaScript", icon: SiJavascript, cat: "Languages" },
  { name: "TypeScript", icon: SiTypescript, cat: "Languages" },
  { name: "Java", icon: SiOpenjdk, cat: "Languages" },

  { name: "NumPy", icon: SiNumpy, cat: "ML / DL" },
  { name: "pandas", icon: SiPandas, cat: "ML / DL" },
  { name: "scikit-learn", icon: SiScikitlearn, cat: "ML / DL" },
  { name: "XGBoost", icon: Sigma, cat: "ML / DL" },
  { name: "PyTorch", icon: SiPytorch, cat: "ML / DL" },
  { name: "TensorFlow", icon: SiTensorflow, cat: "ML / DL" },

  { name: "Claude API", icon: SiAnthropic, cat: "LLM / GenAI" },
  { name: "Gemini API", icon: SiGooglegemini, cat: "LLM / GenAI" },
  { name: "LangChain", icon: SiLangchain, cat: "LLM / GenAI" },
  { name: "Hugging Face", icon: SiHuggingface, cat: "LLM / GenAI" },
  { name: "RAG", icon: Layers, cat: "LLM / GenAI" },

  { name: "React", icon: SiReact, cat: "Web" },
  { name: "Vue.js", icon: SiVuedotjs, cat: "Web" },
  { name: "Vite", icon: SiVite, cat: "Web" },
  { name: "Flask", icon: SiFlask, cat: "Web" },
  { name: "FastAPI", icon: SiFastapi, cat: "Web" },

  { name: "Google Cloud", icon: SiGooglecloud, cat: "MLOps / Cloud" },
  { name: "Vertex AI", icon: SiGooglecloud, cat: "MLOps / Cloud" },
  { name: "Docker", icon: SiDocker, cat: "MLOps / Cloud" },
  { name: "MLflow", icon: SiMlflow, cat: "MLOps / Cloud" },
  { name: "DVC", icon: SiDvc, cat: "MLOps / Cloud" },
  { name: "Feast", icon: Workflow, cat: "MLOps / Cloud" },
  { name: "GitHub Actions", icon: SiGithubactions, cat: "MLOps / Cloud" },

  { name: "PostgreSQL", icon: SiPostgresql, cat: "Data & Tools" },
  { name: "SQLite", icon: SiSqlite, cat: "Data & Tools" },
  { name: "PySpark", icon: SiApachespark, cat: "Data & Tools" },
  { name: "Jupyter", icon: SiJupyter, cat: "Data & Tools" },
  { name: "Git", icon: SiGit, cat: "Data & Tools" },
  { name: "Linux", icon: SiLinux, cat: "Data & Tools" },
];
