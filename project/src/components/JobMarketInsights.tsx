import React, { useState } from 'react';
import { TrendingUp, DollarSign, Building, MapPin, Calendar, BarChart3, Users, Briefcase } from 'lucide-react';
import { JobMarketTrend } from '../types';

export const JobMarketInsights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'technology' | 'business' | 'creative' | 'all'>('all');

  const marketTrends: JobMarketTrend[] = [
    {
      skill: 'Artificial Intelligence',
      demand: 95,
      growth: 45,
      averageSalary: '₹15-35 LPA',
      topCompanies: ['Google', 'Microsoft', 'Amazon', 'NVIDIA', 'OpenAI']
    },
    {
      skill: 'Data Science',
      demand: 92,
      growth: 38,
      averageSalary: '₹12-28 LPA',
      topCompanies: ['Netflix', 'Uber', 'Airbnb', 'Meta', 'Tesla']
    },
    {
      skill: 'Cloud Computing',
      demand: 88,
      growth: 42,
      averageSalary: '₹10-25 LPA',
      topCompanies: ['AWS', 'Azure', 'Google Cloud', 'IBM', 'Oracle']
    },
    {
      skill: 'Cybersecurity',
      demand: 85,
      growth: 35,
      averageSalary: '₹8-22 LPA',
      topCompanies: ['Cisco', 'Palo Alto', 'CrowdStrike', 'FireEye', 'Symantec']
    },
    {
      skill: 'Digital Marketing',
      demand: 80,
      growth: 30,
      averageSalary: '₹6-18 LPA',
      topCompanies: ['Google', 'Meta', 'HubSpot', 'Salesforce', 'Adobe']
    },
    {
      skill: 'Product Management',
      demand: 78,
      growth: 25,
      averageSalary: '₹15-40 LPA',
      topCompanies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Apple']
    }
  ];

  const industryGrowth = [
    { industry: 'Technology', growth: 42, jobs: '2.1M+', avgSalary: '₹18 LPA' },
    { industry: 'Healthcare', growth: 35, jobs: '1.8M+', avgSalary: '₹12 LPA' },
    { industry: 'Finance', growth: 28, jobs: '1.5M+', avgSalary: '₹15 LPA' },
    { industry: 'Education', growth: 32, jobs: '1.2M+', avgSalary: '₹8 LPA' },
    { industry: 'E-commerce', growth: 38, jobs: '950K+', avgSalary: '₹14 LPA' },
    { industry: 'Manufacturing', growth: 22, jobs: '2.5M+', avgSalary: '₹10 LPA' }
  ];

  const topCities = [
    { city: 'Bangalore', jobs: '850K+', growth: 45, avgSalary: '₹16 LPA' },
    { city: 'Hyderabad', jobs: '420K+', growth: 42, avgSalary: '₹14 LPA' },
    { city: 'Pune', jobs: '380K+', growth: 38, avgSalary: '₹13 LPA' },
    { city: 'Chennai', jobs: '320K+', growth: 35, avgSalary: '₹12 LPA' },
    { city: 'Mumbai', jobs: '650K+', growth: 32, avgSalary: '₹18 LPA' },
    { city: 'Delhi NCR', jobs: '720K+', growth: 40, avgSalary: '₹17 LPA' }
  ];

  const emergingSkills = [
    { skill: 'Prompt Engineering', growth: 120, demand: 'Very High' },
    { skill: 'Quantum Computing', growth: 85, demand: 'High' },
    { skill: 'AR/VR Development', growth: 75, demand: 'High' },
    { skill: 'Blockchain', growth: 65, demand: 'Medium-High' },
    { skill: 'IoT Development', growth: 55, demand: 'Medium-High' },
    { skill: 'Edge Computing', growth: 70, demand: 'High' }
  ];

  const getGrowthColor = (growth: number) => {
    if (growth >= 40) return 'text-green-600 bg-green-100';
    if (growth >= 25) return 'text-blue-600 bg-blue-100';
    return 'text-yellow-600 bg-yellow-100';
  };

  const getDemandColor = (demand: number) => {
    if (demand >= 85) return 'bg-green-500';
    if (demand >= 70) return 'bg-blue-500';
    if (demand >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Job Market Insights</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay ahead with the latest trends, salary insights, and growth opportunities in the Indian job market.
        </p>
      </div>

      {/* Market Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">12.5M+</p>
              <p className="text-sm text-slate-600">Active Jobs</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">35%</p>
              <p className="text-sm text-slate-600">YoY Growth</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">₹14 LPA</p>
              <p className="text-sm text-slate-600">Avg Salary</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">2.8M</p>
              <p className="text-sm text-slate-600">New Hires</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Skills */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Most In-Demand Skills</h2>
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              {marketTrends.map((trend, index) => (
                <div key={trend.skill} className="flex items-center justify-between p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="flex items-center space-x-6">
                    <div className="text-2xl font-bold text-slate-400">#{index + 1}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{trend.skill}</h3>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-slate-600">Growth: </span>
                        <span className={`px-2 py-1 rounded text-sm font-medium ${getGrowthColor(trend.growth)}`}>
                          +{trend.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8">
                    <div className="text-right">
                      <p className="text-sm text-slate-600">Demand</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-16 h-2 bg-slate-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${getDemandColor(trend.demand)}`}
                            style={{ width: `${trend.demand}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-800">{trend.demand}%</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-slate-600">Avg Salary</p>
                      <p className="font-semibold text-green-600">{trend.averageSalary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Industry Growth */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Industry Growth
          </h3>
          
          <div className="space-y-4">
            {industryGrowth.map((industry) => (
              <div key={industry.industry} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-800">{industry.industry}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-slate-600">{industry.jobs} jobs</span>
                    <span className="text-sm font-medium text-green-600">+{industry.growth}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(industry.growth / 50) * 100}%` }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-sm text-slate-600">Avg: {industry.avgSalary}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Top Job Markets
          </h3>
          
          <div className="space-y-6">
            {topCities.map((city, index) => (
              <div key={city.city} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-slate-400">#{index + 1}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{city.city}</h4>
                    <p className="text-sm text-slate-600">{city.jobs} active jobs</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-green-600">{city.avgSalary}</p>
                  <p className="text-sm text-blue-600">+{city.growth}% growth</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emerging Skills */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Emerging Skills to Watch</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergingSkills.map((skill) => (
            <div key={skill.skill} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-800">{skill.skill}</h4>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                  skill.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {skill.demand}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="font-bold text-green-600">+{skill.growth}%</span>
                <span className="text-sm text-slate-600">growth expected</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Predictions */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center">
          <Calendar className="w-6 h-6 mr-2" />
          Job Market Predictions for 2025
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">AI/ML</div>
            <p className="text-slate-600">Will dominate tech roles with 60% growth in demand</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">Remote</div>
            <p className="text-slate-600">75% of companies will offer remote work options</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">Upskilling</div>
            <p className="text-slate-600">90% of jobs will require continuous learning</p>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">Gig Economy</div>
            <p className="text-slate-600">40% increase in freelance opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};