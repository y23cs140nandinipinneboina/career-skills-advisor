import React, { useState, useRef } from 'react';
import { TrendingUp, Star, DollarSign, Clock, Building, Users, BookOpen, ChevronLeft, ChevronRight, Target, Award } from 'lucide-react';
import { CareerRecommendation } from '../types';
import { careerRoadmaps } from '../services/careerRoadmaps';

interface CareerRecommendationsProps {
  recommendations: CareerRecommendation[];
}

export const CareerRecommendations: React.FC<CareerRecommendationsProps> = ({ 
  recommendations, 
}) => {
  const [selectedCareer, setSelectedCareer] = useState<CareerRecommendation | null>(recommendations[0]);
  const [sortBy, setSortBy] = useState<'match' | 'salary' | 'demand'>('match');
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [page, setPage] = useState(0);
  const jobsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecommendations = recommendations.filter(career =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedRecommendations = [...filteredRecommendations].sort((a, b) => {
    switch (sortBy) {
      case 'match':
        return b.matchScore - a.matchScore;
      case 'salary':
        // Assuming salaryRange format is "₹X-Y LPA"
        const aSalary = parseInt(a.salaryRange.split('-')[0].replace('₹', ''));
        const bSalary = parseInt(b.salaryRange.split('-')[0].replace('₹', ''));
        return bSalary - aSalary;
      case 'demand':
        const demandOrder = { high: 3, medium: 2, low: 1 };
        return demandOrder[b.jobMarketDemand] - demandOrder[a.jobMarketDemand];
      default:
        return 0;
    }
  });

  const paginatedJobs = sortedRecommendations.slice(page * jobsPerPage, (page + 1) * jobsPerPage);
  
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
    setSelectedCareer(null);
    setShowRoadmap(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
    setSelectedCareer(null);
    setShowRoadmap(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCareerClick = (career: CareerRecommendation) => {
    setSelectedCareer(career);
    setShowRoadmap(false);
  };

  const handleRoadmapClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the career card from being selected
    setShowRoadmap(!showRoadmap);
  };

  const paginationControls = (
    <div className="flex justify-center gap-4 mt-6">
      {page > 0 && (
        <button
          onClick={handlePreviousPage}
          className="group bg-slate-100 text-slate-600 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-slate-200 transition-all duration-300 flex items-center space-x-2"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Previous</span>
        </button>
      )}
      {page < Math.ceil(sortedRecommendations.length / jobsPerPage) - 1 && (
        <button
          onClick={handleNextPage}
          className="group bg-slate-100 text-slate-600 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-slate-200 transition-all duration-300 flex items-center space-x-2"
        >
          <span>Next</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      )}
    </div>
  );

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 80) return 'bg-blue-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const selectedCareerRoadmap = selectedCareer ? careerRoadmaps[selectedCareer.title] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Your Career Recommendations</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Based on your skills, interests, and goals, here are personalized career paths perfectly matched for you.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 flex flex-wrap gap-4 justify-start items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(0); // Reset to first page on search change
          }}
          placeholder="Search for a career..."
          className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as 'match' | 'salary' | 'demand');
            setPage(0); // Reset to first page on sort change
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="match">Sort by Match Score</option>
          <option value="salary">Sort by Salary</option>
          <option value="demand">Sort by Demand</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Career Cards */}
        <div className="lg:col-span-2 space-y-6">
          {paginationControls}
          {paginatedJobs.map((career) => (
            <div
              key={career.id}
              onClick={() => handleCareerClick(career)}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                selectedCareer?.id === career.id ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-200'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{career.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{career.description}</p>
                </div>
                
                <div className="ml-6 text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-2xl font-bold text-slate-800">{career.matchScore}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${getMatchColor(career.matchScore)}`} />
                  <p className="text-sm text-slate-500 mt-1">Match Score</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Salary Range</p>
                    <p className="font-semibold text-slate-800">{career.salaryRange}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Transition Time</p>
                    <p className="font-semibold text-slate-800">{career.timeToTransition}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Market Demand</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDemandColor(career.jobMarketDemand)}`}>
                      {career.jobMarketDemand.charAt(0).toUpperCase() + career.jobMarketDemand.slice(1)}
                    </span>
                  </div>
                </div>
                
              </div>

              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.slice(0, 4).map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
                {career.requiredSkills.length > 4 && (
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                    +{career.requiredSkills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
          {paginationControls}
        </div>

        {/* Career Details Sidebar */}
        <div className="lg:col-span-1">
          {selectedCareer ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">{selectedCareer.title} {showRoadmap ? 'Roadmap' : 'Details'}</h3>
                <button
                  type="button"
                  onClick={handleRoadmapClick}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
                >
                  {showRoadmap ? 'Details' : 'Roadmap'}
                </button>
              </div>
              
              {showRoadmap ? (
                 <div className="space-y-6">
                 {selectedCareerRoadmap ? (
                   <>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <Target className="w-4 h-4 mr-2" />
                         Starting Point
                       </h4>
                       <p className="text-slate-600">{selectedCareerRoadmap.startingPoint}</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <BookOpen className="w-4 h-4 mr-2" />
                         Required Skills & Knowledge
                       </h4>
                       <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {selectedCareerRoadmap.requiredSkills.map((skill, index) => (
                              <li key={index}>{skill}</li>
                          ))}
                        </ul>
                     </div>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <Award className="w-4 h-4 mr-2" />
                         Key Milestones
                       </h4>
                       <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {selectedCareerRoadmap.keyMilestones.map((milestone, index) => (
                              <li key={index}>{milestone}</li>
                          ))}
                        </ul>
                     </div>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <Clock className="w-4 h-4 mr-2" />
                         Timeline
                       </h4>
                       <p className="text-slate-600">{selectedCareerRoadmap.timeline}</p>
                     </div>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <BookOpen className="w-4 h-4 mr-2" />
                         Resources
                       </h4>
                       <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {selectedCareerRoadmap.resources.map((resource, index) => (
                              <li key={index}>{resource}</li>
                          ))}
                        </ul>
                     </div>
                     <div>
                       <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                         <TrendingUp className="w-4 h-4 mr-2" />
                         End Goal
                       </h4>
                       <p className="text-slate-600">{selectedCareerRoadmap.endGoal}</p>
                     </div>
                   </>
                 ) : (
                   <p className="text-slate-600">Roadmap information not available for this career.</p>
                 )}
               </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Required Skills
                    </h4>
                    <div className="space-y-2">
                      {selectedCareer.requiredSkills.map((skill) => (
                        <span key={skill} className="block px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedCareer.missingSkills.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Skills to Develop
                      </h4>
                      <div className="space-y-2">
                        {selectedCareer.missingSkills.map((skill) => (
                          <span key={skill} className="block px-3 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Top Companies
                    </h4>
                    <div className="space-y-2">
                      {selectedCareer.companies.slice(0, 5).map((company) => (
                        <div key={company} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-slate-700">{company}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Related Roles
                    </h4>
                    <div className="space-y-2">
                      {selectedCareer.relatedRoles.map((role) => (
                        <div key={role} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <span className="text-slate-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Growth Prospects</h4>
                    <p className="text-slate-600 text-sm">{selectedCareer.growthProspects}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Select a Career</h3>
              <p className="text-slate-600">Click on any career recommendation to view detailed information.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};