import { Profile } from '../types/profile';

export const profileData: Profile = {
  name: "Abid Hossain",
  title: "Data Scientist & Lecturer",
  email: "abid_hsn@outlook.com",
  phone: "(+39) 3298977505",
  location: "Via Castello, 5 Scoppito, 67019 L'Aquila, Italy",
  nationality: "Bangladeshi",
  dateOfBirth: "24/09/2000",
  about: "I'm a highly driven data science student and lecturer, enthusiastic about deep learning and natural language processing. My expertise lies in a profound comprehension of speech and text focused deep learning algorithms, frameworks, and libraries. I adeptly apply these tools to tackle intricate problems, fostering business expansion. Additionally, I bring a creative and inventive mindset, constantly seeking novel applications of large and complex models for real-world problem-solving.",
  skills: [
    "Python", 
    "TypeScript", 
    "React", 
    "Node.js", 
    "Databases", 
    "Machine Learning", 
    "Deep Learning", 
    "NLP", 
    "TensorFlow", 
    "PyTorch", 
    "Docker", 
    "Cloud"
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "01/07/2020 – 25/02/2025",
      website: "https://www.bracu.ac.bd",
      field: "Information and Communication Technologies",
      grade: "3.92",
      thesis: "Sentimental Classification of Bengali Text using a custom LLM based approach"
    },
    {
      degree: "Laurea Magistrale in Mathematical Engineering",
      institution: "University of L'Aquila",
      location: "L'Aquila, Italy",
      period: "23/09/2024 – Current",
      website: "https://www.univaq.it",
      field: "Scientific Computing Track"
    }
  ],
  experience: [
    {
      position: "Adjunct Lecturer",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "28/05/2024 – 23/09/2024",
      website: "http://www.bracu.ac.bd",
      responsibilities: [
        "Took courses of core and advanced computer science courses",
        "Data Structures and Algorithms, Computer Networks, Digital Logic Design",
        "Conduct theory and labs, prepare exam and class materials, consultations"
      ]
    },
    {
      position: "Undergraduate Teaching Assistant",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "24/01/2023 – 15/12/2023",
      website: "http://www.bracu.ac.bd",
      responsibilities: [
        "Assist professors in courses: Programming Languages, OOP, Data Structures, NLP, Pattern Recognition",
        "Preparation of lab materials and consultation"
      ]
    }
  ],
  publications: [
    {
      title: "Privacy Preserving Federated Learning Approach for Speech Emotion Recognition",
      authors: [
        "Chowdhury, Md. Reasad Zaman",
        "Afiat, Mashfurah",
        "Hore, Alvin",
        "Akhter, Rabea",
        "Sarker, Alex",
        "Hossain, Abid",
        "Mehedi, Md Humaion Kabir",
        "Rasel, Annajiat Alim"
      ],
      link: "https://ieeexplore.ieee.org/abstract/document/10441577",
      date: "2024"
    },
    {
      title: "Automated Image Caption Generation using Deep Learning",
      authors: [
        "Mahmudul Hasan",
        "Sara Jerin Prithila",
        "Tamim Al Ahasan",
        "Mahmudul Hassan",
        "Abid Hossain",
        "Sania Azhmee Bhuiyan",
        "Annajiat Alim Rasel"
      ],
      link: "https://ieeexplore.ieee.org/abstract/document/10441058/",
      date: "2024"
    }
  ],
  awards: [
    {
      title: "Highest Distinction in Computer Science and Engineering Department",
      issuer: "BRAC University",
      date: "25/02/2025"
    },
    {
      title: "Certificate of Highest Achievement",
      issuer: "Pearson",
      date: "12/11/2017",
      description: "7 'A' Grades (4A*) in International GCSE"
    },
    {
      title: "Award of Recognition in Volunteer Work",
      issuer: "BRAC University Computer Club",
      date: "15/08/2021"
    }
  ],
  projects: [
    {
      title: "Charity Database Project",
      description: "A platform connecting donors with NGOs and individuals in need. Features include account creation, donation management, profile creation, and an inbuilt messaging system.",
      technologies: ["PHP", "SQL", "CSS", "HTML"],
      link: "https://github.com/wojackbro/charity_donation_website",
      image: "/images/projects/rural.jpg",
      period: "10/05/2022 – 03/06/2022"
    },
    {
      title: "Company Analytics Platform",
      description: "A modular data dashboard for visualizing company performance and trends—ideal for analytics and decision-making.",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      link: "https://github.com/wojackbro/Company_Analytics_Project",
      image: "/images/projects/analytics.jpg",
      period: "15/09/2023 – 30/10/2023"
    },
    {
      title: "NLP-Based Corpus Project",
      description: "A Named Entity Recognition dataset and pipeline for Bengali language using transformers and transfer learning.",
      technologies: ["Python", "PyTorch", "Transformers", "BERT"],
      link: "https://github.com/wojackbro/NLP_projects",
      image: "/images/projects/nlp.jpg",
      period: "01/11/2023 – 15/01/2024"
    },
    {
      title: "Retinal Disease Classification",
      description: "Custom deep learning model and ablation testing for detecting retinal diseases from medical images.",
      technologies: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
      link: "https://github.com/wojackbro/Custom-Model-and-Ablation-Testing-for-Retinal-Disease--Journal-Publication-",
      image: "/images/projects/retinal.jpg",
      period: "05/02/2024 – 20/04/2024"
    },
    {
      title: "ETL Pipeline for University Department",
      description: "An ETL pipeline created to Extract, Transform and Load data from the university department website with automated reporting.",
      technologies: ["Python", "Pandas", "BeautifulSoup", "SQLAlchemy"],
      link: "https://github.com/wojackbro/ETL_pipeline_BRACUniversity_SDS",
      image: "/images/projects/etl.jpg",
      period: "12/03/2024 – 05/05/2024"
    },
    {
      title: "Bengali Sentiment Classification",
      description: "A machine learning system for sentiment analysis of Bengali text using custom language models and transfer learning techniques.",
      technologies: ["Python", "HuggingFace", "RoBERTa", "NLP"],
      link: "https://github.com/wojackbro/Sentiment_Classification_Bengali_Text",
      image: "/images/projects/sentiment.jpg",
      period: "10/06/2024 – 25/08/2024"
    }
  ],
  languages: [
    {
      name: "Bengali",
      level: "Native"
    },
    {
      name: "English",
      level: "C2",
      listening: "C2",
      reading: "C2",
      writing: "C1",
      spokenProduction: "C2",
      spokenInteraction: "C1"
    }
  ],
  socialLinks: {
    github: "https://github.com/wojackbro",
    linkedin: "https://www.linkedin.com/in/abidanick",
    website: "https://www.abidbhay.github.io",
    facebook: "https://www.facebook.com/abid.hussen.anik",
    instagram: "https://www.instagram.com/abid.krishnoborno",
    scholar: "https://scholar.google.com/citations?hl=en&user=9SFNxhMAAAAJ"
  }
}; 