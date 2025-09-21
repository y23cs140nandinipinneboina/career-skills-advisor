import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Award, Target, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { AssessmentData, Skill } from '../types';

interface SkillsMappingProps {
  assessmentData: AssessmentData;
  onContinue: () => void;
}

const PIE_CHART_COLORS: Record<string, string> = {
  '1': '#ef4444', // Red
  '2': '#f97316', // Orange
  '3': '#eab308', // Yellow
  '4': '#3b82f6', // Blue
  '5': '#22c55e', // Green
};

const getSkillLevelText = (level: number) => {
  const levels = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
  return levels[level];
};

const getSkillLevelColor = (level: number) => {
  if (level <= 2) return 'bg-red-500';
  if (level === 3) return 'bg-yellow-500';
  if (level === 4) return 'bg-blue-500';
  return 'bg-green-500';
};

const PieChart = ({ skills }: { skills: AssessmentData['skills'] }) => {
  if (skills.length === 0) {
    return <div className="text-center text-slate-500">No skills data available.</div>;
  }

  const skillLevelCounts = skills.reduce((acc, skill) => {
    const levelString = String(skill.level);
    acc[levelString] = (acc[levelString] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  let cumulativePercentage = 0;
  const segments = Object.entries(skillLevelCounts)
    .sort(([levelA], [levelB]) => parseInt(levelA) - parseInt(levelB))
    .map(([level, count]) => {
      const percentage = (count / skills.length) * 100;
      const startAngle = cumulativePercentage * 3.6;
      let endAngle = (cumulativePercentage + percentage) * 3.6;
      cumulativePercentage = cumulativePercentage + percentage;
      
      if (cumulativePercentage > 99.99) {
        endAngle = 360;
      }

      const largeArcFlag = percentage > 50 ? 1 : 0;
      const start = polarToCartesian(50, 50, 40, startAngle);
      const end = polarToCartesian(50, 50, 40, endAngle);

      const d = [
        `M 50,50`,
        `L ${start.x},${start.y}`,
        `A 40,40 0 ${largeArcFlag},1 ${end.x},${end.y}`,
        `Z`,
      ].join(' ');

      return { d, level: parseInt(level), percentage };
    });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {segments.map((segment, index) => (
            <path key={index} d={segment.d} fill={PIE_CHART_COLORS[String(segment.level)]} />
          ))}
        </svg>
      </div>
      <div className="space-y-2">
        {Object.entries(skillLevelCounts)
          .sort(([levelA], [levelB]) => parseInt(levelA) - parseInt(levelB))
          .map(([level, count]) => (
            <div key={level} className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: PIE_CHART_COLORS[level] }} />
              <div className="text-sm">
                <span className="font-semibold">{getSkillLevelText(parseInt(level))}</span>
                <span className="text-slate-500"> ({count} {count === 1 ? 'skill' : 'skills'}, {((count / skills.length) * 100).toFixed(0)}%)</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

export const SkillsMapping: React.FC<SkillsMappingProps> = ({ assessmentData, onContinue }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const { skills } = assessmentData;
  
  const skillsByCategory: Record<string, Skill[]> = {
    technical: skills.filter(s => s.category === 'technical'),
    soft: skills.filter(s => s.category === 'soft'),
    domain: skills.filter(s => s.category === 'domain'),
    entrepreneurship: skills.filter(s => s.category === 'entrepreneurship'),
    analytical: skills.filter(s => s.category === 'analytical'),
    medical: skills.filter(s => s.category === 'medical'),
  };

  const allCategories: (keyof typeof skillsByCategory)[] = ['technical', 'soft', 'domain', 'entrepreneurship', 'analytical', 'medical'];

  const toggleCategoryExpansion = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const averageSkillLevel = skills.length > 0 
    ? (skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length).toFixed(1)
    : '0';

  const strongestSkills = skills.filter(s => s.level >= 4).sort((a, b) => b.level - a.level);
  const skillsToImprove = skills.filter(s => s.level <= 2).sort((a, b) => a.level - b.level);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Your Skills Profile</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Here's a comprehensive analysis of your current skill set based on your assessment responses.
        </p>
      </div>

      {/* Skills Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Skills</p>
              <p className="text-2xl font-bold text-slate-800">{skills.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Average Level</p>
              <p className="text-2xl font-bold text-slate-800">{averageSkillLevel}/5</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Expert Level</p>
              <p className="text-2xl font-bold text-slate-800">{skills.filter(s => s.level === 5).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {allCategories.slice(0, 3).map((category) => (
          <div key={category} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 capitalize">
              {category} Skills ({skillsByCategory[category].length})
            </h3>
            <div className="space-y-4">
              {(expandedCategories.includes(category) ? skillsByCategory[category] : skillsByCategory[category].slice(0, 3)).map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{getSkillLevelText(skill.level)}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              {skillsByCategory[category].length === 0 && (
                <p className="text-slate-500 text-center py-4">No skills in this category</p>
              )}
            </div>
            {skillsByCategory[category].length > 3 && (
              <button 
                onClick={() => toggleCategoryExpansion(category)}
                className="mt-4 w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{expandedCategories.includes(category) ? 'View Less' : `View All ${skillsByCategory[category].length} Skills`}</span>
                {expandedCategories.includes(category) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {allCategories.slice(3, 6).map((category) => (
          <div key={category} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 capitalize">
              {category} Skills ({skillsByCategory[category].length})
            </h3>
            <div className="space-y-4">
              {(expandedCategories.includes(category) ? skillsByCategory[category] : skillsByCategory[category].slice(0, 3)).map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{getSkillLevelText(skill.level)}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getSkillLevelColor(skill.level)}`}
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              {skillsByCategory[category].length === 0 && (
                <p className="text-slate-500 text-center py-4">No skills in this category</p>
              )}
            </div>
            {skillsByCategory[category].length > 3 && (
              <button 
                onClick={() => toggleCategoryExpansion(category)}
                className="mt-4 w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{expandedCategories.includes(category) ? 'View Less' : `View All ${skillsByCategory[category].length} Skills`}</span>
                {expandedCategories.includes(category) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Visual Skills Pie Chart */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Skills Distribution</h3>
        <PieChart skills={skills} />
      </div>

      {/* Strengths and Areas for Improvement */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Your Strengths</h3>
          </div>
          
          <div className="space-y-3">
            {strongestSkills.slice(0, 5).map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium text-slate-700">{skill.name}</span>
                <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                  {getSkillLevelText(skill.level)}
                </span>
              </div>
            ))}
            
            {strongestSkills.length === 0 && (
              <p className="text-slate-600">Continue developing your skills to build strong foundations!</p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Areas to Improve</h3>
          </div>
          
          <div className="space-y-3">
            {skillsToImprove.slice(0, 5).map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-3 bg-white rounded-lg">
                <span className="font-medium text-slate-700">{skill.name}</span>
                <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                  {getSkillLevelText(skill.level)}
                </span>
              </div>
            ))}
            
            {skillsToImprove.length === 0 && (
              <p className="text-slate-600">Great! All your skills are at intermediate level or above.</p>
            )}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="text-center">
        <button
          onClick={onContinue}
          className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 mx-auto"
        >
          <span>View Career Recommendations</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};