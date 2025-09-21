export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  profileImage?: string;
  education: EducationDetails;
  experience: ExperienceDetails;
  skills: string[];
  interests: string[];
  achievements: string[];
  age: number;
  isStudent: boolean;
  hasDeadline?: boolean;
  deadline?: string;
}

export interface EducationDetails {
  level: 'pursuing' | 'completed';
  degree: string;
  field: string;
  institution: string;
  year: number;
  percentage?: number;
}

export interface ExperienceDetails {
  hasExperience: boolean;
  companies?: CompanyExperience[];
  totalExperience?: number;
}

export interface CompanyExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  resources: LearningResource[];
  practicesPlatforms: PracticePlatform[];
  projects: Project[];
  internships: InternshipPlatform[];
  jobs: JobPlatform[];
}

export interface LearningResource {
  name: string;
  url: string;
  type: 'course' | 'tutorial' | 'documentation' | 'book';
  provider: string;
  rating: number;
  duration?: string;
  price?: string;
}

export interface PracticePlatform {
  name: string;
  url: string;
  description: string;
  skillType: string[];
}

export interface Project {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  estimatedDuration: string;
  githubUrl?: string;
}

export interface InternshipPlatform {
  name: string;
  url: string;
  description: string;
}

export interface JobPlatform {
  name: string;
  url: string;
  description: string;
}