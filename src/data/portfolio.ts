import { Code2, Brain, Bot, Server, type LucideIcon } from 'lucide-react';

export const personal = {
  name: 'Niharika Javvaji',
  title: 'Software Engineer | Machine Learning and Generative AI Engineer',
  shortTitle: 'Software Engineer | ML and Generative AI Engineer',
  location: 'Hyderabad, India',
  email: 'niharikajavvaji5@gmail.com',
  phone: '+91 8340863874',
  resumeUrl: './Niharika_Javvaji_Resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/niharika-javvaji-10b656193?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: '#',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
];

export const stats = [
  { value: '3.8+', label: 'Years of Experience' },
  { value: '7+', label: 'AI and Machine Learning Projects' },
  { value: '14%', label: 'Improvement in ROC-AUC' },
  { value: '300 to 400', label: 'Statements Processed per Minute' },
];

export interface ExperienceProject {
  title: string;
  points: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  client?: string;
  projects: ExperienceProject[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Capgemini Technology Services Pvt. Ltd.',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    duration: 'December 2022 to Present',
    client: 'RBC',
    projects: [
      {
        title: 'Credit Risk Scoring',
        points: [
          'Designed credit risk scoring models using bank statement, credit bureau, and Days Past Due (DPD) data to accurately assess customer creditworthiness.',
          'Optimized a high-throughput scoring pipeline processing 300–400 bank statements per minute, reducing end-to-end runtime by 10%.',
          'Built and enhanced Savings Account (SA) and Current Account (CA) scoring models, improving ROC-AUC by up to 14% and Gini coefficient by up to 17% through feature engineering and model optimization.',
          'Developed a New-to-Credit (NTC) machine learning model using alternative financial and transaction data, achieving a ROC-AUC of 0.82 and Gini coefficient of 0.64, while supporting model validation, model deployment, and data pipeline optimization.',
        ],
      },
      {
        title: 'LLM-Powered Enterprise Document Intelligence System',
        points: [
          'Contributed to an LLM-powered Enterprise Knowledge Assistant using RAG, LangChain, Gemini, ChromaDB, and Hugging Face embeddings for intelligent enterprise document search and Q&A.',
          'Collaborated with senior engineers on the AI architecture and end-to-end RAG pipeline, including document ingestion, chunking, embeddings, vector storage, retrieval, and response generation.',
          'Implemented semantic search, contextual retrieval, and reranking to improve the relevance of information provided to the LLM.',
          'Added source citations, hallucination prevention, prompt engineering, and response validation to improve answer reliability, traceability, and factual grounding.',
        ],
      },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Regulatory and Tax Compliance Assistant',
    description:
      'Developed an AI-powered regulatory compliance assistant using LangGraph, Retrieval-Augmented Generation, and Agentic AI to answer questions from government regulations and policy documents. Implemented FAISS, Hugging Face BGE embeddings, reranking, source citations, hallucination prevention, and intelligent tool routing to generate accurate and explainable responses.',
    technologies: [
      'Python',
      'LangGraph',
      'LangChain',
      'FAISS',
      'Hugging Face BGE Embeddings',
      'Retrieval-Augmented Generation',
      'Agentic AI',
    ],
    features: [
      'Regulation and policy document retrieval',
      'Source-backed answers',
      'Intelligent tool routing',
      'Reranking for improved relevance',
      'Hallucination prevention',
      'Explainable AI responses',
    ],
  },
  {
    title: 'LLM-Powered Retail Sales Analytics Chatbot',
    description:
      'Developed a conversational retail sales analytics chatbot that allows retail managers and business analysts to explore sales information using natural language. The system helps users monitor sales performance, identify top-selling products, analyze customer purchasing trends, and evaluate promotional campaign effectiveness.',
    technologies: [
      'Python',
      'SQLite',
      'Gradio',
      'Groq LLM',
      'Natural Language Processing',
    ],
    features: [
      'Conversational sales analysis',
      'Product performance tracking',
      'Customer purchasing trend analysis',
      'Promotional campaign evaluation',
      'Business-friendly analytics interface',
    ],
  },
  {
    title: 'Hourly Traffic Volume Forecasting System',
    description:
      'Developed an hourly time-series traffic forecasting model during an Uber mentor-led internship program. Engineered temporal features and tuned XGBoost and Scikit-learn models to predict junction traffic volume using historical traffic data. The model achieved a 15 to 20% reduction in forecasting error measured using RMSE and MAE. The solution can be integrated into smart city platforms to improve dynamic traffic signal timing and support real-time navigation rerouting.',
    technologies: [
      'Python',
      'XGBoost',
      'Scikit-learn',
      'Time-Series Forecasting',
      'Feature Engineering',
    ],
    features: [
      'Hourly traffic volume prediction',
      'Temporal feature engineering',
      'XGBoost model tuning',
      'RMSE and MAE evaluation',
      'Smart city integration potential',
    ],
  },
  {
    title: 'BERT-Based Abstractive Text Summarization',
    description:
      'Developed a Natural Language Processing application that generates concise and context-aware summaries using a BERT-based transformer model. Implemented text preprocessing, tokenization, model fine-tuning, and ROUGE-based evaluation. The application can condense lengthy reports, articles, and business documents into shorter and more readable summaries.',
    technologies: [
      'Python',
      'BERT',
      'Hugging Face Transformers',
      'Natural Language Processing',
      'ROUGE',
    ],
    features: [
      'Abstractive text summarization',
      'Transformer model fine-tuning',
      'Automated document condensation',
      'ROUGE-based performance evaluation',
      'Context-aware summary generation',
    ],
  },
  {
    title: 'Dog Emotion Recognition Using MobileNet',
    description:
      'Developed a canine emotion recognition system using Convolutional Neural Networks, MobileNet, and transfer learning to identify emotions from dog facial images. Implemented image preprocessing, data augmentation, model fine-tuning, and performance evaluation. The solution was designed for potential integration with robotic and smart pet-care systems for real-time emotion monitoring and responsive interaction.',
    technologies: [
      'Python',
      'TensorFlow',
      'CNN',
      'MobileNet',
      'Transfer Learning',
      'Computer Vision',
    ],
    features: [
      'Dog facial emotion classification',
      'Image preprocessing',
      'Data augmentation',
      'Transfer learning',
      'Potential real-time pet monitoring',
    ],
  },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming and Data',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'SQL', 'MySQL', 'NumPy', 'Pandas'],
  },
  {
    title: 'Machine Learning and Deep Learning',
    icon: Brain,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'Natural Language Processing',
      'Computer Vision',
      'Feature Engineering',
      'Model Evaluation',
      'MLflow',
    ],
  },
  {
    title: 'Generative AI and LLMs',
    icon: Bot,
    skills: [
      'LangChain',
      'LangGraph',
      'Retrieval-Augmented Generation',
      'Model Context Protocol',
      'CrewAI',
      'AutoGen',
      'Hugging Face Transformers',
      'Ollama',
      'FAISS',
      'Agentic AI',
    ],
  },
  {
    title: 'Backend and Cloud',
    icon: Server,
    skills: [
      'FastAPI',
      'Flask',
      'REST APIs',
      'Docker',
      'Amazon Web Services',
      'Git',
      'GitHub',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: "St. Peter's Engineering College",
    duration: '2018 to 2022',
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    duration: '2016 to 2018',
  },
  {
    degree: 'Secondary School',
    institution: 'K.V.M Talent High School',
    duration: 'Completed: 2016',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  platform: string;
  credentialUrl: string;
}

export const certifications: Certification[] = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    platform: 'Coursera',
    credentialUrl: '#',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    platform: 'Coursera',
    credentialUrl: '#',
  },
  {
    title: 'Professional Certificate Program in AI and Data Science',
    issuer: 'upGrad',
    platform: 'In association with PwC Academy',
    credentialUrl: '#',
  },
  {
    title: 'Uber Mentor-Led Internship Program',
    issuer: 'Uber',
    platform: 'Mentor-Led Internship',
    credentialUrl: '#',
  },
];

export const aboutParagraphs = [
  'I am a Software Engineer with over 3.8 years of experience designing and deploying Machine Learning, Deep Learning, and Agentic AI solutions. My work focuses on developing intelligent systems that solve practical business problems and deliver measurable results.',
  'I have hands-on experience with Python, SQL, Pandas, NumPy, Scikit-learn, LangChain, LangGraph, Retrieval-Augmented Generation, and modern AI development frameworks. I have worked on credit risk modeling, enterprise document intelligence, regulatory compliance assistants, retail analytics chatbots, computer vision systems, and time-series forecasting.',
  'I enjoy learning emerging AI technologies, collaborating with cross-functional teams, and turning complex ideas into scalable and dependable software solutions.',
];

export const contactHeading = 'Let\u2019s Build Something Intelligent Together';
export const contactDescription =
  'I am interested in opportunities involving Machine Learning, Generative AI, Agentic AI, data-driven applications, and scalable software development. Feel free to contact me to discuss a role, project, or collaboration.';


