export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  website: string;
  field: string;
  grade?: string;
  thesis?: string;
  coursework?: string[];
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  website?: string;
  responsibilities: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  link?: string;
  date: string;
}

export interface Preprint {
  title: string;
  authors: string[];
  status: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  about: string;
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  preprints: Preprint[];
  awards: Award[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  skillCategories: SkillCategory[];
  socialLinks: {
    github: string;
    linkedin: string;
    website: string;
    facebook?: string;
    instagram?: string;
    scholar?: string;
  };
  cvLink: string;
}
