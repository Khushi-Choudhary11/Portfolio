// Blog posts. Nothing is published yet, so every entry is a draft: drafts render with an
// "In the works" badge and no date or reading time. To publish one, add `date` (ISO string)
// and `body` (the article text); reading time is then calculated from `body`.

export const posts = [
  {
    slug: "mlops-on-gcp",
    title: "Lessons from building an MLOps pipeline on Google Cloud",
    excerpt: "What DVC, Feast and Vertex AI taught me about making a model reproducible end to end.",
    tags: ["MLOps", "GCP"],
    date: null,
    body: null,
  },
  {
    slug: "building-with-llms",
    title: "Practical lessons from building LLM-powered applications",
    excerpt: "From a fact-checker to a railway co-pilot: where LLMs helped, and where plain code was the better answer.",
    tags: ["LLMs", "AI"],
    date: null,
    body: null,
  },
  {
    slug: "iitm-journey",
    title: "My journey through Data Science at IIT Madras",
    excerpt: "Learning online, building in public, and finding the projects that mattered.",
    tags: ["Personal"],
    date: null,
    body: null,
  },
];

export const readingTime = (body) => `${Math.max(1, Math.round(body.trim().split(/\s+/).length / 220))} min read`;
