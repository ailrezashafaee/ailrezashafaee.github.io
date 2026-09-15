import type { Project, Role, StackEntry } from "./types";

export const roles: Role[] = [
  {
    years: "2025 —",
    title: "Software Engineer",
    org: "Via Software",
    note: "Flutter · part-time, remote",
  },
  {
    years: "2023 — 2025",
    title: "Data Scientist",
    org: "Modiran Vehicle Manufacturing",
    note: "ML · MLOps · optimization",
  },
  {
    years: "2023",
    title: "Deep Learning Researcher",
    org: "Medrik Dynamic Technology",
    note: "Biosignals · Pessac, FR",
  },
  {
    years: "2020 — 2022",
    title: "Front-end Developer",
    org: "Fanavaran Tech",
    note: "React · Next.js",
  },
  {
    years: "2019 — 2020",
    title: "Front-end Developer",
    org: "Yas Academy",
    note: "Started as intern",
  },
];

export const projects: Project[] = [
  {
    name: "Blobfia",
    tag: "Shipped",
    blurb:
      "A pass-and-play party game for 3–20 players. Everyone sees the secret word except one person, who has to bluff their way through. One phone, no internet, no accounts. Published on Google Play under Tea and Baileys.",
    chips: ["Flutter", "Dart", "Offline-first"],
    href: "https://play.google.com/store/apps/details?id=com.teaandbailyse.blobfia",
    hrefLabel: "Google Play",
  },
  {
    name: "Kuwart",
    tag: "Private",
    blurb:
      "LLM meeting-intelligence pipeline. Turns raw audio into a speaker-attributed transcript, then extracts action items, decisions and entities, writes a summary shaped by the user's prompt, and drafts calendar entries for implied follow-ups. Several models orchestrated behind one pipeline.",
    chips: ["LangChain", "Tool calling", "Structured output"],
  },
  {
    name: "Fleet Load Assignment",
    tag: "Production",
    blurb:
      "Assigning cargo loads to trucks under vehicle, capacity and route constraints, framed as a constrained optimization problem. Runs in production at one of the largest car manufacturers in Iran. Plain method, real outcome.",
    chips: ["Python", "Airflow", "Spark", "FastAPI"],
  },
  {
    name: "Natural Language Inference",
    tag: "Research",
    blurb:
      "Encoder-only transformers classifying premise–hypothesis pairs into entailment, neutral and contradiction. Architecture comparison and evaluation on held-out data. A sibling project does AI-generated versus human-written code detection.",
    chips: ["PyTorch", "Transformers", "NLP"],
  },
  {
    name: "Analytics Platform",
    tag: "Production",
    blurb:
      "Columnar data model and scheduled ETL feeding operational dashboards used daily across manufacturing and logistics teams. The unglamorous half was data quality: tracing inconsistencies back to source systems instead of patching reports.",
    chips: ["ClickHouse", "Superset", "Airflow"],
  },
  {
    name: "Micro-frontend Platform",
    tag: "Internal",
    blurb:
      "Module Federation architecture across internal industrial platforms, plus a shared headless UI library reused between projects, with Docker images and CI/CD owned alongside the DevOps team.",
    chips: ["Next.js", "Module Federation", "GitLab CI"],
  },
];

export const stack: StackEntry[] = [
  {
    label: "Machine learning",
    items:
      "PyTorch · TensorFlow · scikit-learn · pandas · NumPy · NLP · computer vision · time-series forecasting · optimization",
  },
  {
    label: "Data & MLOps",
    items:
      "Apache Airflow · Apache Spark · HDFS · MLflow · ClickHouse · Superset · SQL · ETL design",
  },
  {
    label: "LLM systems",
    items:
      "LangChain · multi-model orchestration · tool calling · structured output · transformer architectures",
  },
  {
    label: "Backend & infra",
    items:
      "Python · FastAPI · REST · Redis · PostgreSQL · Docker · Kubernetes · Argo CD · GitLab CI/CD · Linux",
  },
  {
    label: "Product surfaces",
    items:
      "Flutter · Dart · Next.js · React · TypeScript · micro-frontends · published Play Store apps",
  },
  {
    label: "Languages",
    items: "English, professional · German, beginner and learning · Persian, native",
  },
];

export const marqueeItems: string[] = [
  "Python",
  "PyTorch",
  "pandas",
  "SQL",
  "Airflow",
  "Spark",
  "MLflow",
  "FastAPI",
  "ClickHouse",
  "Kubernetes",
  "LangChain",
  "Flutter",
  "Next.js",
  "TypeScript",
  "Docker",
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const contactLinks = [
  { label: "Email", href: "mailto:alireza.shafaee.dev@gmail.com", external: false },
  { label: "LinkedIn", href: "https://linkedin.com/in/alireza-shafaee", external: true },
  { label: "GitHub", href: "https://github.com/ailrezashafaee", external: true },
];
