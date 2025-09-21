import React, { useState, useRef, useEffect, useMemo } from 'react';
import { User, Brain, TrendingUp, Target, BarChart3, ChevronDown, ChevronUp, LogOut } from 'lucide-react'; // Added LogOut icon
import { CurrentView, UserProfile } from '../types';

interface HeaderProps {
  currentView: CurrentView;
  onViewChange: (view: CurrentView) => void;
  userProfile: UserProfile | null;
  onEditAssessment: () => void;
}
 
export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, userProfile, onEditAssessment }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allNavItems = [
    { id: 'assessment', label: 'Assessment', icon: Target },
    { id: 'skills', label: 'Skills Map', icon: BarChart3 },
    { id: 'recommendations', label: 'Careers', icon: TrendingUp },
    { id: 'insights', label: 'Market', icon: BarChart3 },
  ] as const;

  const navItems = useMemo(() => {
    return userProfile ? allNavItems.filter(item => item.id !== 'assessment') : allNavItems;
  }, [userProfile]);


  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleEditClick = () => {
    onEditAssessment();
    setIsProfileMenuOpen(false);
  };

  const handleSkillsClick = () => {
    onViewChange('skills');
    setIsProfileMenuOpen(false);
  };
  
  // Placeholder for logout functionality
  const handleLogoutClick = () => {
    // This will be implemented later
    console.log("Logout clicked");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-3 bg-white pl-3 pr-4 py-2 rounded-xl shadow-md border-2 border-blue-100 transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h1 className="text-xl font-bold text-blue-600">CareerPath</h1>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-slate-600 text-sm">Job Seeking</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              const isDisabled = !userProfile && item.id !== 'assessment' && item.id !== 'insights';
              
              return (
                <button
                  key={item.id}
                  onClick={() => !isDisabled && onViewChange(item.id)}
                  disabled={isDisabled}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : isDisabled
                      ? 'text-slate-400 cursor-not-allowed'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {userProfile && (
            <div className="flex items-center space-x-4"> {/* Added a div to contain profile and logout */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleProfileClick}
                  className="flex items-center px-2 py-1 rounded-lg transition-colors hover:bg-slate-100"
                  title="Open Profile Menu"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden sm:block text-left space-x-0">
                    <p className="text-sm font-medium text-slate-800">{userProfile.name}</p>
                    <p className="text-xs text-slate-500">{userProfile.education}</p>
                  </div>
                  {isProfileMenuOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <button
                      onClick={handleEditClick}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 w-full text-left"
                    >
                      <Target className="w-4 h-4" />
                      <span>Edit Assessment</span>
                    </button>
                    <button
                      onClick={handleSkillsClick}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 w-full text-left"
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>My Skills</span>
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={handleLogoutClick}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
              >
                <LogOut className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-600">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};