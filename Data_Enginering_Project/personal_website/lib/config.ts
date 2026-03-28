// Personal Information
export const personalInfo = {
  name: "Chien Nguyen",
  title: "AI & Systems Builder",
  description: "Building distributed systems and LLM infrastructure at scale.",
  email: "chiennguyen.uw.dev@gmail.com",
  location: "Washington",
  tagline: "Distributed Systems & LLM Infrastructure",
  bio: "I like to work on distributed data processing systems and LLM infrastructure. I've built pipelines, multi-agent systems, and tools for processing data at scale. I'm a CS undergrad at UW Bothell. Interested in roles in distributed systems, AI, and data engineering.",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/chien-se",
  linkedin: "https://linkedin.com/in/chien-nguyen",
  email: "mailto:chiennguyen.uw.dev@gmail.com",
};

// Skills by category
export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "Java", "C++"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["LLMs & RAG", "LangChain", "Ollama", "Prompt Engineering", "Vector Databases (Chroma)", "PyTorch", "Scikit-learn", "Transformers"],
  },
  {
    category: "Data & Distributed Systems",
    skills: ["PySpark", "Databricks", "Kafka", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS (EC2, S3)", "Prometheus", "Grafana"],
  },

];


// Quick stats for hero
export const stats = [
  { value: "7", label: "Production Systems" },
  { value: "20M+", label: "Records Processed" },
  { value: "1,238", label: "Messages/sec" },
];

// Work experience (projects as main focus since undergrad)
export const experience = [
  {
    title: "Multi-Agent LLM System for RAG Q&A",
    company: "Personal Project",
    period: "2024",
    description:
      "Built a RAG system using LangChain and Ollama that answers questions across 1,000+ customer reviews. Fully local inference with semantic retrieval, prompt orchestration, and Chroma vector DB.",
  },
  {
    title: "Real-Time Stock Analytics Pipeline",
    company: "Personal Project",
    period: "2024",
    description:
      "Designed an event-driven pipeline using Kafka and Kubernetes processing 1,238+ messages per second. Containerized with Docker, monitored with Prometheus and Grafana for observability.",
  },
  {
    title: "Book Recommender System",
    company: "Personal Project",
    period: "2023",
    description:
      "Scaled recommendation engine from local Ollama to Databricks using PySpark, processing 20M+ book records. Learned distributed systems through real constraints.",
  },
  {
    title: "Video Stream Platform Backend",
    company: "Personal Project",
    period: "2023",
    description:
      "Built FastAPI backend handling 1,237+ sessions across 100 users and 254 devices with real-time session enforcement and 4 validation checks.",
  },
];

// Education
export const education = [
  {
    degree: "B.S. in Computer Science & Software Engineering",
    school: "University of Washington Bothell",
    year: "Expected 2026",
    details: "Focus on distributed systems, cloud infrastructure, and AI/ML. Active in projects involving system design and real-world constraints.",
  },
  {
    degree: "A.A. in Computer Science, Honors",
    school: "Everett Community College",
    year: "2022",
    details: "Completed with 4.0 GPA. VP of Asian Student Union.",
  },
];

// Additional projects (for portfolio/projects section)
export const projects = [
  {
    id: 1,
    title: "Multi-Agent LLM System for RAG Q&A",
    description: "RAG system using LangChain and Ollama that answers questions across 1,000+ customer reviews. Fully local, privacy-preserving inference.",
    technologies: ["Python", "LangChain", "Ollama", "Chroma", "Prompt Engineering"],
    link: "https://github.com/chien-se/llm-rag-system",
    github: "https://github.com/chien-se/llm-rag-system",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Stock Analytics Pipeline",
    description: "Event-driven pipeline processing 1,238+ messages per second. Kafka, Kubernetes, PostgreSQL with observability via Prometheus and Grafana.",
    technologies: ["Kafka", "Kubernetes", "Docker", "PostgreSQL", "Prometheus", "Grafana"],
    link: "https://github.com/chien-se/stock-analytics-pipeline",
    github: "https://github.com/chien-se/stock-analytics-pipeline",
    featured: true,
  },
  {
    id: 3,
    title: "Book Recommender System",
    description: "Distributed ML pipeline processing 20M+ records. Scaled from local Ollama to Databricks using PySpark, Parquet, and Delta.",
    technologies: ["PySpark", "Databricks", "AWS (EC2/S3)", "Python"],
    link: "https://github.com/chien-se/book-recommender",
    github: "https://github.com/chien-se/book-recommender",
    featured: true,
  },
  {
    id: 4,
    title: "Video Stream Platform Backend",
    description: "FastAPI backend managing 1,237+ sessions across 100 users and 254 devices. Real-time session enforcement with PostgreSQL.",
    technologies: ["FastAPI", "PostgreSQL", "Python", "SQL"],
    link: "https://github.com/chien-se/video-platform",
    github: "https://github.com/chien-se/video-platform",
    featured: false,
  },
  {
    id: 5,
    title: "YouTube AI Model",
    description: "Custom local LLM workflow using Ollama and REST APIs. Reduced manual transcript extraction by 2x through prompt engineering.",
    technologies: ["Python", "Ollama", "REST APIs", "Prompt Engineering"],
    link: "https://github.com/chien-se/youtube-ai",
    github: "https://github.com/chien-se/youtube-ai",
    featured: false,
  },
  {
    id: 6,
    title: "Market Time-Series Analysis & Prediction",
    description: "LSTM model using PyTorch and CUDA-accelerated training. Achieved ~8-10 RMSE on next-day price prediction with feature engineering.",
    technologies: ["PyTorch", "Scikit-learn", "CUDA", "Python"],
    link: "https://github.com/chien-se/market-prediction",
    github: "https://github.com/chien-se/market-prediction",
    featured: false,
  },
  {
    id: 7,
    title: "Heart Disease Prediction Model",
    description: "Ensemble models (KNN, SVM, Decision Tree, Random Forest) with GridSearchCV. Achieved 0.98 recall on positive class.",
    technologies: ["Scikit-learn", "Python"],
    link: "https://github.com/chien-se/heart-disease-prediction",
    github: "https://github.com/chien-se/heart-disease-prediction",
    featured: false,
  },
];