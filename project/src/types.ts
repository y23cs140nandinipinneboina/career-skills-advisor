export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  profileImage?: string;
  education: EducationDetails;
  experience: ExperienceDetails;
  skills: Skill[];
  interests: string[];
  achievements: string[];
  age: number;
  isStudent: boolean;
  hasDeadline?: boolean;
  deadline?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  age: number;
  education: string;
  skills: Skill[];
  interests: string[];
  careerGoals: string[];
  assessmentDate: string;
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

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: 'technical' | 'soft' | 'domain' | 'entrepreneurship' | 'analytical' | 'medical';
}

export interface AssessmentData {
  personalInfo: {
    name: string;
    email: string;
    age: number;
    education: string;
    location: string;
  };
  skills: Skill[];
  interests: string[];
  careerGoals: string[];
  workPreferences: {
    workStyle: string;
    companySize: string;
    location: string;
    salaryExpectation: string;
  };
}

export interface CareerRecommendation {
  id: string;
  title: string;
  description: string;
  matchScore: number;
  salaryRange: string;
  growthProspects: string;
  requiredSkills: string[];
  missingSkills: string[];
  educationPath: string[];
  timeToTransition: string;
  jobMarketDemand: 'high' | 'medium' | 'low';
  companies: string[];
  relatedRoles: string[];
}

export interface JobMarketTrend {
  skill: string;
  demand: number;
  growth: number;
  averageSalary: string;
  topCompanies: string[];
}

export interface CareerRoadmap {
  startingPoint: string;
  requiredSkills: string[];
  keyMilestones: string[];
  timeline: string;
  resources: string[];
  endGoal: string;
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