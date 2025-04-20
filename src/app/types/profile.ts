export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  website: string;
  field: string;
  grade?: string;
  thesis?: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  website: string;
  responsibilities: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  link: string;
  date: string;
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
  link: string;
  image?: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
  listening?: string;
  reading?: string;
  writing?: string;
  spokenProduction?: string;
  spokenInteraction?: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  nationality: string;
  dateOfBirth: string;
  about: string;
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  awards: Award[];
  projects: Project[];
  languages: Language[];
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    website: string;
    facebook?: string;
    instagram?: string;
    scholar?: string;
  };
  company?: string;
  followers?: number;
  following?: number;
  repositories?: number;
  hireable?: boolean;
} 