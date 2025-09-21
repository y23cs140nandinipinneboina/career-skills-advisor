import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ProfileForm } from './ProfileForm';
import { LearningPath } from './LearningPath';
import { Chatbot } from './Chatbot';
import { AssessmentFlow } from './AssessmentFlow';
import { 
  User, 
  LogOut, 
  BookOpen, 
  Briefcase, 
  MessageCircle,
  GraduationCap,
  Target,
  Award
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'learning' | 'jobs' | 'chat'>('home');

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'learning':
        return <LearningPath onBack={() => setActiveSection('home')} />;
      case 'jobs':
        return <AssessmentFlow onComplete={() => setActiveSection('home')} />;
      case 'chat':
        return <Chatbot onBack={() => setActiveSection('home')} />;
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">
                {getWelcomeMessage()}, {user?.name}!
              </h1>
              <p className="text-blue-100 text-lg">
                Ready to take your career to the next level? Let's explore your options.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Skills Added</p>
                    <p className="text-2xl font-bold text-gray-900">{user?.skills?.length || 0}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Interests</p>
                    <p className="text-2xl font-bold text-gray-900">{user?.interests?.length || 0}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Achievements</p>
                    <p className="text-2xl font-bold text-gray-900">{user?.achievements?.length || 0}</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Learning Path */}
              <div 
                onClick={() => setActiveSection('learning')}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Learning Path</h3>
                <p className="text-gray-600 mb-4">
                  Get personalized learning recommendations, practice platforms, and project ideas based on your interests and career goals.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span>Start Learning</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Job Seeking */}
              <div 
                onClick={() => setActiveSection('jobs')}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-green-600 group-hover:text-green-700 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Seeking</h3>
                <p className="text-gray-600 mb-4">
                  Explore job opportunities, internships, and career advice tailored to your profile and aspirations.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  <span>Find Opportunities</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Chatbot Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Career Assistant</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant answers to your career questions, personalized advice, and guidance from our AI assistant.
                  </p>
                  <button 
                    onClick={() => setActiveSection('chat')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Conversation
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl">
                    <MessageCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 px-4 py-2 rounded-xl transition duration-200 border border-blue-200"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                  C
                </div>
                <span className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">
                  CareerPath
                </span>
              </button>
              {activeSection !== 'home' && (
                <span className="text-gray-400">•</span>
              )}
              {activeSection === 'learning' && (
                <span className="text-gray-600 font-medium">Learning Path</span>
              )}
              {activeSection === 'jobs' && (
                <span className="text-gray-600 font-medium">Job Seeking</span>
              )}
              {activeSection === 'chat' && (
                <span className="text-gray-600 font-medium">AI Assistant</span>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowProfile(true)}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition duration-200"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium hidden sm:block">{user?.name}</span>
                </button>
              </div>
              
              <button
                onClick={logout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 px-3 py-2 rounded-lg transition duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Profile Modal */}
      <ProfileForm isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
};