import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  ExternalLink,
  Filter,
  Search,
  Building,
  Users,
  TrendingUp
} from 'lucide-react';

interface JobSeekerProps {
  onBack: () => void;
}

export const JobSeeker: React.FC<JobSeekerProps> = ({ onBack }) => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'jobs' | 'internships' | 'advice'>('jobs');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const jobPlatforms = [
    {
      name: 'Naukri.com',
      url: 'https://www.naukri.com/',
      description: "India's leading job portal with opportunities across industries",
      logo: '🔷',
      jobCount: '50,000+',
      category: 'General'
    },
    {
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs/',
      description: 'Global professional network with extensive job listings',
      logo: '💼',
      jobCount: '20,000+',
      category: 'Professional'
    },
    {
      name: 'Indeed',
      url: 'https://in.indeed.com/',
      description: 'Comprehensive job search engine with Indian opportunities',
      logo: '🔍',
      jobCount: '30,000+',
      category: 'General'
    },
    {
      name: 'Apna',
      url: 'https://apna.co/',
      description: 'Professional networking and job search platform for India',
      logo: '🚀',
      jobCount: '25,000+',
      category: 'Local'
    },
    {
      name: 'Monster India',
      url: 'https://www.monsterindia.com/',
      description: 'Global job portal with Indian opportunities',
      logo: '👾',
      jobCount: '15,000+',
      category: 'General'
    },
    {
      name: 'Shine.com',
      url: 'https://www.shine.com/',
      description: 'Job portal focused on experienced professionals',
      logo: '✨',
      jobCount: '12,000+',
      category: 'Professional'
    }
  ];

  const internshipPlatforms = [
    {
      name: 'Internshala',
      url: 'https://internshala.com/',
      description: "India's largest internship platform with opportunities across various fields",
      logo: '📚',
      opportunityCount: '10,000+',
      category: 'Student-focused'
    },
    {
      name: 'Unstop',
      url: 'https://unstop.com/',
      description: 'Competitions, hackathons, and internship opportunities for students',
      logo: '🏆',
      opportunityCount: '5,000+',
      category: 'Competition-based'
    },
    {
      name: 'LetsIntern',
      url: 'https://www.letsintern.com/',
      description: 'Curated internships and training programs for college students',
      logo: '🎯',
      opportunityCount: '3,000+',
      category: 'Curated'
    },
    {
      name: 'HelloIntern',
      url: 'https://hellointern.com/',
      description: 'Internship opportunities for students and recent graduates',
      logo: '👋',
      opportunityCount: '2,500+',
      category: 'Entry-level'
    }
  ];

  const careerAdvice = [
    {
      title: 'Resume Building Tips',
      description: 'Learn how to create a compelling resume that stands out to employers',
      tips: [
        'Use a clean, professional format',
        'Quantify your achievements with numbers',
        'Tailor your resume for each job application',
        'Include relevant keywords from job descriptions',
        'Keep it concise (1-2 pages maximum)'
      ]
    },
    {
      title: 'Interview Preparation',
      description: 'Master the art of interviewing with these proven strategies',
      tips: [
        'Research the company thoroughly',
        'Practice common interview questions',
        'Prepare specific examples using STAR method',
        'Dress professionally and arrive early',
        'Ask thoughtful questions about the role'
      ]
    },
    {
      title: 'Networking Strategies',
      description: 'Build meaningful professional connections that can boost your career',
      tips: [
        'Join professional associations in your field',
        'Attend industry events and conferences',
        'Connect with alumni from your institution',
        'Engage meaningfully on LinkedIn',
        'Offer help before asking for favors'
      ]
    },
    {
      title: 'Skill Development',
      description: 'Stay competitive by continuously developing relevant skills',
      tips: [
        'Identify trending skills in your industry',
        'Take online courses and certifications',
        'Practice through real projects',
        'Get feedback from mentors',
        'Document your learning journey'
      ]
    }
  ];

  const renderJobPlatforms = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobPlatforms.map((platform, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">{platform.logo}</div>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {platform.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{platform.jobCount} jobs</span>
            </div>
          </div>
          
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
          >
            Explore Jobs
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );

  const renderInternshipPlatforms = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {internshipPlatforms.map((platform, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">{platform.logo}</div>
            <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
              {platform.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-orange-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{platform.opportunityCount} opportunities</span>
            </div>
          </div>
          
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
          >
            Find Internships
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );

  const renderCareerAdvice = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {careerAdvice.map((advice, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{advice.title}</h3>
          <p className="text-gray-600 mb-6">{advice.description}</p>
          
          <ul className="space-y-3">
            {advice.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Job & Career Hub</h1>
              <p className="text-gray-600">
                Discover opportunities, connect with employers, and advance your career
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-2xl">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition duration-200 ${
                activeTab === 'jobs' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Job Platforms
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition duration-200 ${
                activeTab === 'internships' 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Internships
            </button>
            <button
              onClick={() => setActiveTab('advice')}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition duration-200 ${
                activeTab === 'advice' 
                  ? 'bg-white text-purple-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Career Advice
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        {activeTab === 'jobs' && renderJobPlatforms()}
        {activeTab === 'internships' && renderInternshipPlatforms()}
        {activeTab === 'advice' && renderCareerAdvice()}
      </div>

      {/* Additional Resources */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h2>
        <p className="text-gray-600 mb-6">
          Get tailored career advice, resume reviews, and interview preparation based on your profile and goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Company Research</h3>
            <p className="text-gray-600 text-sm">Learn about company culture, interview processes, and salary ranges</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mock Interviews</h3>
            <p className="text-gray-600 text-sm">Practice with AI-powered interview simulations</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Salary Insights</h3>
            <p className="text-gray-600 text-sm">Get data-driven salary expectations for your target roles</p>
          </div>
        </div>
      </div>
    </div>
  );
};