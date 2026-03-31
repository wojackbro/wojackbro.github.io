import { Profile } from '../types/profile';

export const profileData: Profile = {
  name: "Abid Hossain",
  title: "Computer Science Researcher",
  email: "",
  phone: "",
  location: "L'Aquila, Italy",
  nationality: "Bangladeshi",
  about: "Computer Science researcher focused on synthetic data generation, foundation models, and multimodal deep learning for real-world AI systems. Research contributions include privacy-preserving federated learning for speech emotion recognition (IEEE), automated image captioning with deep learning (IEEE), and ongoing work on adapting geospatial foundation models for urban socioeconomic prediction. Experienced in designing custom CNN and transformer-based architectures, building RAG pipelines, and developing simulation-driven modeling frameworks. Currently pursuing an M.Sc. in AI, Complex Networks and Data Analytics at Università degli Studi dell'Aquila while applying queuing theory and computational modeling at Reiss Romoli.",
  cvLink: "https://drive.google.com/file/d/1qNy4AoAJfYMqSzFmNC9e6A-1wbjNgbvL/view?usp=sharing",
  education: [
    {
      degree: "M.Sc. in Computer Science — AI, Complex Networks and Data Analytics",
      institution: "Università degli Studi dell'Aquila",
      location: "L'Aquila, Italy",
      period: "Sep 2025 – Present",
      website: "https://www.univaq.it",
      field: "AI, Complex Networks and Data Analytics",
      coursework: ["Software Architecture (28/30)", "Numerical Methods (27/30)", "Distributed Computing (25/30)"]
    },
    {
      degree: "B.Sc. in Computer Science — School of Data and Sciences",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "Jul 2020 – Feb 2025",
      website: "https://www.bracu.ac.bd",
      field: "Computer Science",
      grade: "3.92 / 4.00",
      thesis: "Sentimental Classification of Bengali Text Using a Custom LLM-Based Approach"
    }
  ],
  experience: [
    {
      position: "Software Engineer Intern",
      company: "Reiss Romoli",
      location: "L'Aquila, Italy",
      period: "Oct 2025 – Present",
      responsibilities: [
        "Built discrete event simulation models for queuing systems (M/M/1, M/D/1) in MATLAB, reducing average queue wait-time estimates by 18% within 3 months.",
        "Evaluated KPIs—waiting time, throughput, resource utilization—to identify bottlenecks in telecom processes.",
        "Applied queuing theory frameworks to predict system behavior and propose capacity optimization strategies."
      ]
    },
    {
      position: "Adjunct Lecturer, Dept. of Computer Science & Engineering",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "Apr 2022 – Sep 2024",
      website: "https://www.bracu.ac.bd",
      responsibilities: [
        "Designed and delivered undergraduate curricula in algorithmic analysis, network architecture, and digital systems to 200+ students across 6 semesters.",
        "Developed hands-on lab exercises and assessment tools; improved average course pass rates by 12%.",
        "Mentored students on NLP research projects and programming challenges, guiding 3 teams to conference submissions."
      ]
    },
    {
      position: "Student Tutor, Dept. of Computer Science",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "Jan 2023 – Dec 2023",
      website: "https://www.bracu.ac.bd",
      responsibilities: [
        "Facilitated teaching in computational theory, programming paradigms, and pattern recognition courses.",
        "Co-developed laboratory frameworks bridging theoretical CS with practical NLP and data structure implementations."
      ]
    }
  ],
  publications: [
    {
      title: "Privacy Preserving Federated Learning Approach for Speech Emotion Recognition",
      authors: [
        "Chowdhury, M.R.Z.", "Afiat, M.", "Hore, A.", "Akhter, R.",
        "Sarker, A.", "Hossain, A.", "Mehedi, M.H.K.", "Rasel, A.A."
      ],
      venue: "IEEE",
      link: "https://ieeexplore.ieee.org/abstract/document/10441577",
      date: "2024"
    },
    {
      title: "Automated Image Caption Generation using Deep Learning",
      authors: [
        "Hasan, M.", "Prithila, S.J.", "Ahasan, T.A.", "Hassan, M.",
        "Hossain, A.", "Bhuiyan, S.A.", "Rasel, A.A."
      ],
      venue: "IEEE",
      link: "https://ieeexplore.ieee.org/abstract/document/10441058/",
      date: "2024"
    }
  ],
  preprints: [
    {
      title: "Adapting Geospatial Foundation Models for Urban Socioeconomic Indicators: A Paired Multimodal Evaluation on CityLens",
      authors: ["Hossain, A."],
      status: "Under Review"
    }
  ],
  projects: [
    {
      title: "Are Biological Foundation Model Benchmarks Actually Trustworthy?",
      description: "Systematically auditing data contamination in protein and RNA language models by adapting membership inference, n-gram overlap, slot guessing to biological sequences. Quantifies SOTA performance benchmarks (Rfam, ProteinGym etc) inflation on train-test overlap. Proposes temporal-split and homology-aware decontamination protocols for reliable future evaluation.",
      technologies: ["Python", "PyTorch", "Transformers", "Bioinformatics"],
      period: "Mar 2026 – Present"
    },
    {
      title: "SplatCabin: Privacy-Preserving Synthetic Driver Monitoring via 3D Gaussian Splatting",
      description: "Built an end-to-end research pipeline that reconstructs photorealistic car interiors using 3D Gaussian Splatting, composites diverse SMPL-X human avatars via depth-aware rendering, and generates large-scale annotated synthetic datasets for driver monitoring. Trained and evaluated DMS classifiers (ResNet-50, ViT) on synthetic data with successful domain transfer to real-world benchmarks.",
      technologies: ["Python", "PyTorch", "3D Gaussian Splatting", "SMPL-X", "ResNet-50", "ViT"],
      period: "Mar 2026 – Present"
    },
    {
      title: "Enhanced Dimensional Object Detection in Real-Time",
      description: "Implemented real-time object detection with dimensional measurement using camera calibration and focal-length-based depth estimation. Supported live camera input and reported object classes with confidence scores.",
      technologies: ["Python", "OpenCV", "Deep Learning", "Camera Calibration"],
      period: "Nov 2024 – Mar 2025"
    },
    {
      title: "Custom CNN for Retinal Disease Classification",
      description: "Designed and evaluated custom CNN architectures (6–12 layers, 2.9M parameters) for 4-class retinal fundus image classification, achieving 94.13% test accuracy. Performed ablation studies to analyze architectural components and implemented Grad-CAM for model interpretability.",
      technologies: ["Python", "TensorFlow", "CNN", "Grad-CAM", "Medical Imaging"],
      link: "https://github.com/wojackbro/Custom-Model-and-Ablation-Testing-for-Retinal-Disease--Journal-Publication-",
      period: "Aug 2025 – Present"
    },
    {
      title: "Bengali Sentiment Classification using Custom LLM",
      description: "A machine learning system for sentiment analysis of Bengali text using custom language models and transfer learning techniques. Developed as undergraduate thesis project.",
      technologies: ["Python", "HuggingFace", "RoBERTa", "NLP", "Transfer Learning"],
      link: "https://github.com/wojackbro/Sentiment_Classification_Bengali_Text",
      period: "Jun 2024 – Feb 2025"
    },
    {
      title: "NLP-Based Bengali Named Entity Recognition",
      description: "A Named Entity Recognition dataset and pipeline for Bengali language using transformers and transfer learning.",
      technologies: ["Python", "PyTorch", "Transformers", "BERT", "NLP"],
      link: "https://github.com/wojackbro/NLP_projects",
      period: "Nov 2023 – Jan 2024"
    }
  ],
  awards: [
    {
      title: "Highest Distinction, Dept. of CSE",
      issuer: "BRAC University",
      date: "Feb 2025"
    },
    {
      title: "Dean's List of Academic Excellence — All Semesters",
      issuer: "BRAC University",
      date: "2020 – 2025"
    },
    {
      title: "Vice Chancellor's List of Academic Excellence",
      issuer: "BRAC University",
      date: "2020 – 2025"
    },
    {
      title: "Merit Scholarship Award Based on Academic Excellence",
      issuer: "BRAC University",
      date: "2020 – 2025"
    },
    {
      title: "Certificate of Highest Achievement",
      issuer: "Pearson",
      date: "Nov 2017",
      description: "7 'A' Grades (4A*) in International GCSE"
    }
  ],
  certifications: [
    {
      title: "Machine Learning for Time Series Data in Python",
      issuer: "DataCamp",
      date: "Apr 2024"
    },
    {
      title: "Feature Engineering for Machine Learning in Python",
      issuer: "DataCamp",
      date: "Feb 2023"
    }
  ],
  skillCategories: [
    {
      category: "Programming",
      items: ["Python", "C", "C++", "Java", "MATLAB", "JavaScript", "PHP"]
    },
    {
      category: "ML / DL",
      items: ["PyTorch", "TensorFlow", "Keras", "Caffe", "Scikit-learn", "Hugging Face", "LangChain"]
    },
    {
      category: "Data & Vision",
      items: ["Pandas", "NumPy", "OpenCV", "FAISS", "NLTK"]
    },
    {
      category: "Web",
      items: ["React", "Streamlit", "Tailwind CSS", "Framer Motion", "HTML/CSS"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "MATLAB Simulink", "CoppeliaSim", "Wireshark", "NS3", "Cisco Packet Tracer"]
    }
  ],
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "C2" }
  ],
  socialLinks: {
    github: "https://github.com/wojackbro",
    linkedin: "https://www.linkedin.com/in/abidanick",
    website: "https://abidhossain.me",
    facebook: "https://www.facebook.com/abid.hussen.anik",
    instagram: "https://www.instagram.com/abid.krishnoborno",
    scholar: "https://scholar.google.com/citations?hl=en&user=9SFNxhMAAAAJ"
  }
};
