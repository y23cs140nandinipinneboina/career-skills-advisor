import { LearningPath, LearningResource, PracticePlatform, Project, InternshipPlatform, JobPlatform } from '../types';

export const learningResources: Record<string, LearningResource[]> = {
  'software-engineering': [
    {
      name: 'Complete Web Development Bootcamp',
      url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
      type: 'course',
      provider: 'Udemy',
      rating: 4.7,
      duration: '65 hours',
      price: '₹455'
    },
    {
      name: 'GeeksforGeeks DSA Course',
      url: 'https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/',
      type: 'tutorial',
      provider: 'GeeksforGeeks',
      rating: 4.5,
      price: 'Free'
    },
    {
      name: 'React.js Documentation',
      url: 'https://react.dev/',
      type: 'documentation',
      provider: 'Meta',
      rating: 4.8,
      price: 'Free'
    }
  ],
  'data-science': [
    {
      name: 'Python for Data Science and Machine Learning',
      url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
      type: 'course',
      provider: 'Udemy',
      rating: 4.6,
      duration: '25 hours',
      price: '₹455'
    },
    {
      name: 'Kaggle Learn',
      url: 'https://www.kaggle.com/learn',
      type: 'course',
      provider: 'Kaggle',
      rating: 4.7,
      price: 'Free'
    }
  ],
  'mechanical-engineering': [
    {
      name: 'AutoCAD Complete Course',
      url: 'https://www.udemy.com/course/autocad-complete-course/',
      type: 'course',
      provider: 'Udemy',
      rating: 4.5,
      duration: '20 hours',
      price: '₹455'
    },
    {
      name: 'SolidWorks Tutorials',
      url: 'https://www.solidworks.com/sw/support/solidworks-tutorials.htm',
      type: 'tutorial',
      provider: 'SolidWorks',
      rating: 4.6,
      price: 'Free'
    }
  ]
};

export const practicePlatforms: Record<string, PracticePlatform[]> = {
  'software-engineering': [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/',
      description: 'Practice coding problems and prepare for technical interviews',
      skillType: ['algorithms', 'data-structures', 'programming']
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/',
      description: 'Improve your coding skills with challenges and competitions',
      skillType: ['programming', 'algorithms', 'sql']
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/',
      description: 'Competitive programming platform with contests',
      skillType: ['competitive-programming', 'algorithms']
    }
  ],
  'data-science': [
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/',
      description: 'Data science competitions and datasets',
      skillType: ['machine-learning', 'data-analysis', 'python']
    },
    {
      name: 'HackerEarth',
      url: 'https://www.hackerearth.com/',
      description: 'Data science and ML challenges',
      skillType: ['machine-learning', 'data-science']
    }
  ],
  'mechanical-engineering': [
    {
      name: 'GrabCAD',
      url: 'https://grabcad.com/',
      description: 'CAD models and engineering challenges',
      skillType: ['cad', 'mechanical-design']
    },
    {
      name: 'Engineering.com Challenges',
      url: 'https://www.engineering.com/',
      description: 'Engineering problem-solving challenges',
      skillType: ['mechanical-engineering', 'problem-solving']
    }
  ]
};

export const sampleProjects: Record<string, Project[]> = {
  'software-engineering': [
    {
      title: 'E-commerce Website',
      description: 'Build a full-stack e-commerce platform with user authentication, product catalog, and payment integration',
      difficulty: 'intermediate',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      estimatedDuration: '4-6 weeks'
    },
    {
      title: 'Task Management App',
      description: 'Create a responsive task management application with drag-and-drop functionality',
      difficulty: 'beginner',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      estimatedDuration: '2-3 weeks'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Develop a real-time chat app with multiple rooms and user presence indicators',
      difficulty: 'advanced',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      estimatedDuration: '6-8 weeks'
    }
  ],
  'data-science': [
    {
      title: 'Stock Price Prediction',
      description: 'Build a machine learning model to predict stock prices using historical data',
      difficulty: 'intermediate',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      estimatedDuration: '3-4 weeks'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Perform customer segmentation using clustering algorithms',
      difficulty: 'beginner',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'K-means'],
      estimatedDuration: '2-3 weeks'
    }
  ],
  'mechanical-engineering': [
    {
      title: 'Robotic Arm Design',
      description: 'Design a 6-DOF robotic arm with simulation and control system',
      difficulty: 'advanced',
      technologies: ['SolidWorks', 'MATLAB', 'Arduino', 'Servo Motors'],
      estimatedDuration: '8-10 weeks'
    },
    {
      title: 'Heat Exchanger Analysis',
      description: 'Thermal analysis of different heat exchanger configurations',
      difficulty: 'intermediate',
      technologies: ['ANSYS', 'SolidWorks', 'Thermal Analysis'],
      estimatedDuration: '4-5 weeks'
    }
  ]
};

export const internshipPlatforms: InternshipPlatform[] = [
  {
    name: 'Internshala',
    url: 'https://internshala.com/',
    description: 'India\'s largest internship platform with opportunities across various fields'
  },
  {
    name: 'Unstop',
    url: 'https://unstop.com/',
    description: 'Competitions, hackathons, and internship opportunities for students'
  },
  {
    name: 'LetsIntern',
    url: 'https://www.letsintern.com/',
    description: 'Curated internships and training programs for college students'
  }
];

export const jobPlatforms: JobPlatform[] = [
  {
    name: 'Apna',
    url: 'https://apna.co/',
    description: 'Professional networking and job search platform for India'
  },
  {
    name: 'Naukri.com',
    url: 'https://www.naukri.com/',
    description: 'India\'s leading job portal with opportunities across industries'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/jobs/',
    description: 'Global professional network with extensive job listings'
  },
  {
    name: 'Indeed',
    url: 'https://in.indeed.com/',
    description: 'Comprehensive job search engine with Indian opportunities'
  }
];

export const generateLearningPath = (interests: string[], isStudent: boolean): LearningPath => {
  const primaryInterest = interests[0] || 'software-engineering';
  
  return {
    id: Date.now().toString(),
    title: `${primaryInterest.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Learning Path`,
    description: isStudent ? 
      'Complete learning path from your current studies to landing your first job' :
      'Upskill and advance your career in your chosen field',
    resources: learningResources[primaryInterest] || learningResources['software-engineering'],
    practicesPlatforms: practicePlatforms[primaryInterest] || practicePlatforms['software-engineering'],
    projects: sampleProjects[primaryInterest] || sampleProjects['software-engineering'],
    internships: isStudent ? internshipPlatforms : [],
    jobs: jobPlatforms
  };
};