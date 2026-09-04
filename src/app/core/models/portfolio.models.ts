export interface Profile {
  name: string;
  fullName: string;
  title: string;
  roles: string[];
  bio: string;
  detailedBio: string[];
  yearsExperience: string;
  projectsCompleted: string;
  companiesCount: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter: string;
  calLink: string;
  resumeDriveUrl: string;
  avatarUrl: string;
  blobAvatarUrl: string;
  status: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  client?: string;
  clientBadge?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
}

export interface SkillItem {
  name: string;
  categoryId: string;
  icon: string;
  level: string; // e.g., 'Expert', 'Advanced', 'Proficient'
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'enterprise' | 'fullstack' | 'frontend';
  description: string;
  impact?: string;
  technologies: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export interface Education {
  id?: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  grade?: string;
  highlights?: string[];
}
