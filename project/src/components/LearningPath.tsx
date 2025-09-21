import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { generateLearningPath } from '../data/learningPaths';
import { LearningPath as LearningPathType } from '../types';
import { 
  ArrowLeft, 
  BookOpen, 
  Code, 
  Briefcase, 
  ExternalLink, 
  Star, 
  Clock,
  Target,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

interface LearningPathProps {
  onBack: () => void;
}

export const LearningPath: React.FC<LearningPathProps> = ({ onBack }) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<'assessment' | 'path'>('assessment');
  const [learningPath, setLearningPath] = useState<LearningPathType | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [educationStatus, setEducationStatus] = useState<'student' | 'working' | ''>('');
  const [hasDeadline, setHasDeadline] = useState(false);

  const interestOptions = [
    'software-engineering',
    'data-science',
    'web-development',
    'mobile-development',
    'artificial-intelligence',
    'mechanical-engineering',
    'electrical-engineering',
    'civil-engineering',
    'digital-marketing',
    'graphic-design',
    'business-analysis',
    'project-management'
  ];

  useEffect(() => {
    if (user?.interests && user.interests.length > 0) {
      setSelectedInterests(user.interests);
    }
  }, [user]);

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generatePath = () => {
    const isStudent = educationStatus === 'student' || user?.education?.level === 'pursuing';
    const path = generateLearningPath(selectedInterests, isStudent);
    setLearningPath(path);
    setCurrentStep('path');
  };

  if (currentStep === 'assessment') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4 transition duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Personalized Learning Path</h1>
            <p className="text-gray-600 mb-8">
              Let's understand your current situation and interests to create the perfect learning journey for you.
            </p>

            <div className="space-y-8">
              {/* Current Status */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's your current status?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setEducationStatus('student')}
                    className={`p-6 border-2 rounded-xl text-left transition duration-200 ${
                      educationStatus === 'student' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">Student</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Currently pursuing graduation or post-graduation
                    </p>
                  </button>

                  <button
                    onClick={() => setEducationStatus('working')}
                    className={`p-6 border-2 rounded-xl text-left transition duration-200 ${
                      educationStatus === 'working' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-6 h-6 text-green-600 mr-3" />
                      <h4 className="font-semibold text-gray-900">Working Professional</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Completed education and looking to upskill
                    </p>
                  </button>
                </div>
              </div>

              {/* Interests Selection */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select your interests</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 rounded-lg text-sm font-medium transition duration-200 ${
                        selectedInterests.includes(interest)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deadline Question */}
              {educationStatus === 'working' && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you have a specific deadline?</h3>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setHasDeadline(true)}
                      className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
                        hasDeadline 
                          ? 'bg-orange-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Yes, I have a deadline
                    </button>
                    <button
                      onClick={() => setHasDeadline(false)}
                      className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
                        !hasDeadline 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      No specific timeline
                    </button>
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <div className="pt-6">
                <button
                  onClick={generatePath}
                  disabled={!educationStatus || selectedInterests.length === 0}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                >
                  Generate My Learning Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <button
          onClick={() => setCurrentStep('assessment')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Assessment
        </button>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{learningPath?.title}</h1>
              <p className="text-gray-600">{learningPath?.description}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-2xl">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Learning Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPath?.resources.map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{resource.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{resource.provider}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {resource.rating && (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          {resource.rating}
                        </div>
                      )}
                      {resource.duration && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {resource.duration}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-green-600">{resource.price}</span>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 flex items-center gap-2"
                  >
                    Open
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Platforms */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Practice Platforms</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPath?.practicesPlatforms.map((platform, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition duration-200">
                <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.skillType.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 flex items-center gap-2 w-fit"
                >
                  Start Practicing
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Projects */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Project Ideas</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learningPath?.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    project.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.estimatedDuration}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Add to My Projects
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Internships & Jobs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internships */}
          {learningPath?.internships && learningPath.internships.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Internship Platforms</h2>
              </div>
              
              <div className="space-y-4">
                {learningPath.internships.map((platform, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200">
                    <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 flex items-center gap-2 w-fit"
                    >
                      Explore Internships
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Jobs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Job Platforms</h2>
            </div>
            
            <div className="space-y-4">
              {learningPath?.jobs.map((platform, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-200 flex items-center gap-2 w-fit"
                  >
                    Search Jobs
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};