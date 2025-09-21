import React, { useState } from 'react';
import { AssessmentSection } from './AssessmentSection';
import { SkillsMapping } from './SkillsMapping';
import { CareerRecommendations } from './CareerRecommendations';
import { JobMarketInsights } from './JobMarketInsights';
import { UserProfile, AssessmentData, CareerRecommendation } from '../types';
import { generateCareerRecommendations } from '../services/aiService';

export type AssessmentView = 'assessment' | 'skills' | 'recommendations' | 'insights';

interface AssessmentFlowProps {
  onComplete: () => void;
}

export const AssessmentFlow: React.FC<AssessmentFlowProps> = ({ onComplete }) => {
  const [currentView, setCurrentView] = useState<AssessmentView>('assessment');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);
  const [careerRecommendations, setCareerRecommendations] = useState<CareerRecommendation[]>([]);

  const handleAssessmentComplete = async (data: AssessmentData) => {
    setAssessmentData(data);
    
    // Generate AI-powered career recommendations
    const recommendations = await generateCareerRecommendations(data);
    setCareerRecommendations(recommendations);
    
    // Create user profile
    const profile: UserProfile = {
      id: Date.now().toString(),
      name: data.personalInfo.name,
      email: data.personalInfo.email,
      age: data.personalInfo.age,
      education: data.personalInfo.education,
      skills: data.skills,
      interests: data.interests,
      careerGoals: data.careerGoals,
      assessmentDate: new Date().toISOString(),
    };
    
    setUserProfile(profile);
    setCurrentView('skills');
  };

  const handleViewChange = (view: AssessmentView) => {
    setCurrentView(view);
  };
  
  const handleEditAssessment = () => {
    setCurrentView('assessment');
    setUserProfile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {currentView === 'assessment' && (
          <AssessmentSection onComplete={handleAssessmentComplete} initialData={assessmentData} />
        )}
        
        {currentView === 'skills' && assessmentData && (
          <SkillsMapping 
            assessmentData={assessmentData}
            onContinue={() => handleViewChange('recommendations')}
          />
        )}
        
        {currentView === 'recommendations' && careerRecommendations.length > 0 && (
          <CareerRecommendations 
            recommendations={careerRecommendations}
          />
        )}
        
        {currentView === 'insights' && (
          <JobMarketInsights />
        )}
    </div>
  );
}