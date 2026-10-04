// All site copy lives here. Bullets follow the DS resume.
// Inline markup: **bold** for emphasis, ==highlight== for the headline number.

export type Link = { label: string; href: string };

export type Role = {
  slug: string;
  company: string;
  short: string;
  title: string;
  dates: string;
  location: string;
  gist: string;
  tags: string[];
  bullets: string[];
};

export type Work = {
  slug: string;
  title: string;
  context: string;
  area: string;
  metric: string;
  tags: string[];
  links: Link[];
  bullets: string[];
};

export const profile = {
  name: "Jane Wu",
  role: "Data scientist",
  location: "Pittsburgh, PA",
  email: "wujane001@gmail.com",
  linkedin: "https://www.linkedin.com/in/janewu-zichu-wu/",
  github: "https://github.com/jjjane-wu",
  statement:
    "I build ML and LLM systems, and I measure whether they actually work.",
  about: [
    "I'm finishing a Master of Information Systems Management at Carnegie Mellon in December 2026, where I'm also a teaching assistant for the A/B Testing course. Before that I studied business and finance with a minor in mathematics at NYU.",
    "My internships cover most of what a data science project needs: fine-tuning and retrieval for an LLM classifier at Xiaomi, modeling and experiment readouts for TikTok's livestream commerce, a due-diligence assistant for the UN pension fund's private-equity team, and factor back-testing at a quant fund.",
  ],
};

export const nav: Link[] = [
  { label: "Experience", href: "/experience/" },
  { label: "Projects", href: "/projects/" },
  { label: "Research", href: "/research/" },
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/contact/" },
];

export const heroStats = [
  { value: "0.88 F1", label: "42-class LLM classifier, 57% over BERT" },
  { value: "10–29%", label: "Revenue growth on SKUs a LightGBM model flagged" },
  { value: "~1 min", label: "For return metrics that took analysts hours" },
];

export const heroFoot = [
  "MS, Carnegie Mellon · Dec 2026",
  "Pittsburgh, PA",
  "TikTok · UNJSPF · Xiaomi · LianHai",
];

export const focus = [
  "Recommender systems",
  "LLM systems",
  "Experimentation",
  "Production ML",
  "Forecasting",
];

export const experience: Role[] = [
  {
    slug: "unjspf",
    company: "United Nations Joint Staff Pension Fund",
    short: "UNJSPF",
    title: "Data Scientist Intern",
    dates: "Jun 2026 – Sep 2026",
    location: "New York, NY",
    gist: "A multi-agent due-diligence assistant that returns validated return metrics from any-format track records in about a minute instead of hours.",
    tags: ["Azure OpenAI", "Kubernetes (AKS)", "LLM tool calling", "Validation"],
    bullets: [
      "Owned a **multi-agent due-diligence assistant** on **Azure OpenAI and Kubernetes (AKS)**, enabling the private-equity team to self-serve validated return metrics (MOIC, IRR, loss ratio) from fund managers' any-format track records in ==~1 minute== instead of hours",
      "Implemented its **LLM tool-calling workflow** over multi-signal schema-inference, validation and return-analytics tools, guarded by confidence gates, **15 validation rules** that block publishing and analyst review; scoped PRD with non-technical investment analysts",
    ],
  },
  {
    slug: "tiktok",
    company: "TikTok",
    short: "TikTok",
    title: "Product Data Scientist Intern",
    dates: "May 2026 – Aug 2026",
    location: "Shanghai, China",
    gist: "A LightGBM model for creator allocation, the readout of a CRM ranking A/B test, and the data pipeline behind an attribution-analysis agent.",
    tags: ["LightGBM", "A/B testing", "CUPED", "AI agent pipeline"],
    bullets: [
      "Optimized a **LightGBM** model of how creator coverage drives livestream revenue to guide creator allocation, flagging under-promoted SKUs that grew ==revenue 10–29%== the next campaign",
      "Led the readout of a creator-randomized **A/B test** of a CRM ranking algorithm (CUPED-adjusted metrics): a **pre-AA check** traced a spurious ~5% revenue drop to a contaminated split, and funnel analysis pinpointed a ~10% fall in creator adoption as the next fix",
      "Built the data pipeline for an internal **attribution-analysis AI agent** that runs the team's attribution model and writes category analyses for operations, designed to cut turnaround from ==3–5 days to 1 hour==",
      "Presented **5 market research reports** to leadership, benchmarking Southeast Asia livestream against Douyin for category strategy",
    ],
  },
  {
    slug: "xiaomi",
    company: "Xiaomi",
    short: "Xiaomi",
    title: "Data Scientist Intern",
    dates: "May 2025 – Nov 2025",
    location: "Beijing, China",
    gist: "LoRA fine-tuning and a LangChain RAG pipeline for a 42-class insurance text classifier, reaching 0.88 F1.",
    tags: ["LoRA", "Qwen2.5-14B", "LangChain RAG", "ChromaDB", "Spark SQL", "Airflow"],
    bullets: [
      "Fine-tuned Qwen2.5-14B with **LoRA** on a single 24 GB GPU (INT8 quantization, gradient checkpointing), chosen over 7B and 72B on the accuracy-cost trade-off, reaching **84% accuracy** across 42 auto-insurance failure reasons",
      "Added a **LangChain RAG** pipeline (ChromaDB, few-shot examples) that lifted long-tail macro-F1 **12.5%** and the full system to ==0.88 F1== (57% over BERT), routing low-confidence labels to human review",
      "Engineered and screened **124 features** from fintech data down to 51 powering the team's **XGBoost credit-risk** model",
      "Automated daily **Spark SQL** pipelines (Airflow, Iceberg) over **2 TB** of user-behavior logs to power funnel-monitoring dashboards",
    ],
  },
  {
    slug: "lianhai",
    company: "LianHai Capital Asset Management",
    short: "LianHai",
    title: "Sector Data Scientist Intern",
    dates: "Jun 2024 – Aug 2024",
    location: "Beijing, China",
    gist: "A factor back-testing framework on ~5,000 A-shares with a daily 9-factor review for portfolio managers.",
    tags: ["Python", "Factor back-testing"],
    bullets: [
      "Built a **factor back-testing framework** on ==~5,000 A-shares== (2015–2024) and automated a daily 9-factor review for portfolio managers",
    ],
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    degree: "Master of Information Systems Management (GPA: 3.9/4.0)",
    dates: "Aug 2024 – Dec 2026",
    location: "Pittsburgh, PA",
    note: "Coursework: A/B Testing (Teaching Assistant), Machine Learning, Statistical Analysis, Agentic AI, Product Management",
  },
  {
    school: "New York University",
    degree:
      "Bachelor of Science, Business and Finance, Minor in Mathematics (GPA: 3.8/4.0)",
    dates: "Sep 2020 – May 2024",
    location: "New York, NY",
    note: "",
  },
];

export const projects: Work[] = [
  {
    slug: "movie-recommender",
    title: "Movie Recommendation System in Production",
    context: "CMU Machine Learning in Production · team project",
    area: "Recsys / production ML",
    metric: "0.21 ms p95",
    tags: ["Kafka", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    links: [],
    bullets: [
      "Deployed a real-time recommendation API on live **Kafka** traffic with fallback routing that answers every request, at ==0.21 ms p95== model latency (600 ms budget)",
      "Built **CI/CD** (GitHub Actions, **Docker**, 56 tests per PR, automated retraining) and deployed **Prometheus and Grafana** monitoring",
      "Designed a **cold-start model** for the 41% of users with no history; an online A/B test raised the 30-minute **watch rate by 6%** (p < 0.05)",
    ],
  },
  {
    slug: "track-record-analyzer",
    title: "Track Record Analyzer",
    context: "United Nations Joint Staff Pension Fund",
    area: "Data product",
    metric: "Hours to ~1 min",
    tags: ["Python", "Streamlit", "Schema inference", "Power BI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jjjane-wu/Track-Record-Analyzer",
      },
    ],
    bullets: [
      "Turns any fund manager's raw track-record Excel file into a standardized analysis workbook of pivot tables and charts in ==about a minute==: upload the file, confirm the column mapping, download the workbook",
      "Maps columns to a **43-field schema** with multi-signal inference (alias, regex, fuzzy and embedding matching) and routes low-confidence mappings to analyst review",
      "Enforces data quality with **15 validation rules** whose hard errors block publishing; runs locally, so manager data never leaves the analyst's machine",
    ],
  },
  {
    slug: "blinksight",
    title: "BlinkSight",
    context: "Demand forecasting product for quick commerce",
    area: "Forecasting",
    metric: "13.7% MAPE",
    tags: ["SARIMA", "Prophet", "LightGBM", "Figma"],
    links: [{ label: "GitHub", href: "https://github.com/jjjane-wu/BlinkSight" }],
    bullets: [
      "Forecast demand for a US quick-commerce operator with SARIMA, Prophet and LightGBM on engineered exogenous features, reaching a best ==MAPE of 13.7%==",
      "Translated the forecasts into Figma product mockups showing inventory-planning decision workflows",
    ],
  },
  {
    slug: "power-outage-forecasting",
    title: "Power Outage Forecasting",
    context: "CMU Machine Learning for Problem Solving · team of three",
    area: "Forecasting",
    metric: "24 h / 48 h horizons",
    tags: ["GRU", "LSTM", "Transformer", "ARIMA", "K-Means"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jjjane-wu/PowerOutageForecasting",
      },
    ],
    bullets: [
      "Forecast hourly county-level power outages for Michigan at ==24- and 48-hour== horizons, comparing ARIMA, GRU, LSTM and per-county Transformer models; the **GRU** was selected as the final model",
      "Recommended five counties for pre-positioning backup generators by comparing capacitated weighted K-Means with a greedy capacitated assignment",
    ],
  },
];

export const research: Work[] = [
  {
    slug: "latent-diffusion",
    title: "Latent Diffusion Model with Classifier-Free Guidance",
    context: "CMU Introduction to Deep Learning · team project",
    area: "Generative models",
    metric: "ImageNet-100",
    tags: ["VAE", "U-Net", "DDIM", "PyTorch", "SLURM"],
    links: [
      { label: "GitHub", href: "https://github.com/Jackiebibili/idl_diffusion" },
    ],
    bullets: [
      "Built a latent diffusion pipeline (**VAE, U-Net, DDIM**, classifier-free guidance) on ==ImageNet-100==, trained on CMU HPC",
    ],
  },
  {
    slug: "face-verification",
    title: "Face Recognition and Verification with CNNs",
    context: "PyTorch, ResNet-18 from scratch",
    area: "Computer vision",
    metric: "3.79% EER",
    tags: ["PyTorch", "ResNet-18", "Mixed precision"],
    links: [],
    bullets: [
      "Implemented **ResNet-18 from scratch** in PyTorch and trained it on 8,631 identities with mixed-precision training and augmentation",
      "Verified faces via cosine similarity of L2-normalized 512-d embeddings, reaching ==3.79% EER==; tuned with cosine-annealing restarts",
    ],
  },
  {
    slug: "speech-recognition",
    title: "Speech Recognition with CTC",
    context: "CMU Introduction to Deep Learning",
    area: "Speech",
    metric: "28.5 to 4.27",
    tags: ["PyTorch", "pBLSTM", "CTC", "SpecAugment"],
    links: [],
    bullets: [
      "Designed a CNN + BiLSTM + pyramidal BiLSTM encoder with **CTC loss** (19.6M parameters) to map MFCC frames to phonemes",
      "Cut validation Levenshtein distance from ==28.5 to 4.27== with SpecAugment, OneCycleLR and CTC beam-search decoding",
    ],
  },
];

// Applied research done inside internships; these link to the Experience page.
export const industryResearch = [
  {
    title: "LoRA fine-tuning and RAG for long-tail text classification",
    where: "Xiaomi",
    href: "/experience/#xiaomi",
  },
  {
    title: "Reading a creator-randomized A/B test",
    where: "TikTok",
    href: "/experience/#tiktok",
  },
  {
    title: "Factor back-testing on ~5,000 A-shares",
    where: "LianHai Capital",
    href: "/experience/#lianhai",
  },
];

export const selectedWork = [
  { ...projects[0], href: "/projects/#movie-recommender" },
  { ...projects[1], href: "/projects/#track-record-analyzer" },
  { ...research[0], href: "/research/#latent-diffusion" },
  { ...research[1], href: "/research/#face-verification" },
];

export const skills = [
  {
    group: "Languages & Frameworks",
    items:
      "Python, SQL, R, Java, Scala, Bash, TypeScript, JavaScript, React, FastAPI, REST APIs",
  },
  {
    group: "AI & ML",
    items:
      "PyTorch, TensorFlow, Scikit-Learn, Hugging Face, LangChain, NLP, AI Agents, Prompt Engineering",
  },
  {
    group: "Data & Cloud",
    items:
      "Spark, Hive, Hadoop, Airflow, Kafka, Flink, Snowflake, Databricks, DBT, AWS, GCP, Azure, Docker, Kubernetes",
  },
  {
    group: "Analytics & Tools",
    items:
      "A/B Testing, Causal Inference, Time Series Forecasting, Tableau, Power BI, Excel, Figma, Git, Agile",
  },
];

// Drop the PDF into /public with this exact name and the download button appears.
export const resumePdf = "Jane-Wu-Resume.pdf";
