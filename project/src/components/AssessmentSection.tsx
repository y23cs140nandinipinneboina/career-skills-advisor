import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, User, Brain, Target, Settings, Layers, PieChart, Hospital, ArrowUp, X, Sparkles } from 'lucide-react';
import { AssessmentData, Skill } from '../types';

interface AssessmentSectionProps {
  onComplete: (data: AssessmentData) => void;
  initialData: Partial<AssessmentData> | null;
}

const skillCategories = [
  { name: 'technical', label: 'Technical', icon: Brain, iconColor: 'text-blue-600', selectedClasses: 'border-blue-500 bg-blue-50' },
  { name: 'soft', label: 'Soft', icon: User, iconColor: 'text-green-600', selectedClasses: 'border-green-500 bg-green-50' },
  { name: 'domain', label: 'Domain', icon: Layers, iconColor: 'text-purple-600', selectedClasses: 'border-purple-500 bg-purple-50' },
  { name: 'entrepreneurship', label: 'Entrepreneurship', icon: Settings, iconColor: 'text-orange-600', selectedClasses: 'border-orange-500 bg-orange-50' },
  { name: 'analytical', label: 'Analytical', icon: PieChart, iconColor: 'text-red-600', selectedClasses: 'border-red-500 bg-red-50' },
  { name: 'medical', label: 'Medical', icon: Hospital, iconColor: 'text-teal-600', selectedClasses: 'border-teal-500 bg-teal-50' },
] as const;

export const AssessmentSection: React.FC<AssessmentSectionProps> = ({ onComplete, initialData }) => {
  const assessmentRef = useRef<HTMLDivElement>(null);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<AssessmentData>>({
    personalInfo: initialData?.personalInfo || {
      name: '',
      email: '',
      age: 18,
      education: '',
      location: '',
    },
    skills: initialData?.skills || [],
    interests: initialData?.interests || [],
    workPreferences: initialData?.workPreferences || {
      workStyle: '',
      companySize: '',
      location: '',
      salaryExpectation: '',
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<Skill['category'] | null>(null);

  const getCategoryIcon = (category: string) => {
    const skillCategory = skillCategories.find(c => c.name === category);
    return skillCategory ? skillCategory.icon : null;
  };

  const getCategoryColor = (category: string) => {
    const skillCategory = skillCategories.find(c => c.name === category);
    return skillCategory ? skillCategory.iconColor : 'text-slate-600';
  };
  
  const getCategoryTagColor = (category: string) => {
    switch (category) {
      case 'technical': return 'bg-blue-100 text-blue-700';
      case 'soft': return 'bg-green-100 text-green-700';
      case 'domain': return 'bg-purple-100 text-purple-700';
      case 'entrepreneurship': return 'bg-orange-100 text-orange-700';
      case 'analytical': return 'bg-red-100 text-red-700';
      case 'medical': return 'bg-teal-100 text-teal-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getCategoryButtonTextColor = (category: string) => {
    switch (category) {
      case 'technical': return 'text-blue-700';
      case 'soft': return 'text-green-700';
      case 'domain': return 'text-purple-700';
      case 'entrepreneurship': return 'text-orange-700';
      case 'analytical': return 'text-red-700';
      case 'medical': return 'text-teal-700';
      default: return 'text-slate-700';
    }
  };

  const handleClearForm = () => {
    setFormData({ ...formData, skills: [] });
  };


  const steps = [
    { number: 1, title: 'Skills Assessment', icon: Brain },
    { number: 2, title: 'Interests', icon: Target },
    { number: 3, title: 'Work Preferences', icon: Settings },
  ];

  const skillsOptions: { name: string; category: Skill['category']; description: string }[] = [
    // Technical Skills
    { name: 'Programming (e.g. C, C++, Java, Python)', category: 'technical', description: 'The ability to write, test, and debug code to create software, applications, or systems.' },
    { name: 'Data Analysis', category: 'technical', description: 'The process of inspecting, cleansing, transforming, and modeling data to discover useful information and support decision-making.' },
    { name: 'Web Development', category: 'technical', description: 'Building and maintaining websites and web applications, encompassing both front-end and back-end technologies.' },
    { name: 'Machine Learning', category: 'technical', description: 'A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed.' },
    { name: 'Digital Marketing', category: 'technical', description: 'Promoting products or services using digital channels such as search engines, social media, email, and websites.' },
    { name: 'Graphic Design', category: 'technical', description: 'The art and practice of creating visual content to communicate messages or ideas.' },
    { name: 'Cybersecurity', category: 'technical', description: 'Protecting computer systems and networks from digital attacks, damage, or unauthorized access.' },
    { name: 'Network Administration', category: 'technical', description: 'Managing and maintaining computer networks and related services to ensure smooth operation.' },
    { name: 'Cloud Computing (e.g. AWS, Azure)', category: 'technical', description: 'Delivering on-demand computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet.' },
    { name: 'Database Management (e.g. SQL, MongoDB)', category: 'technical', description: 'Organizing, storing, and retrieving data efficiently using systems like relational (SQL) or non-relational (NoSQL) databases.' },
    { name: 'Mobile App Development (iOS, Android)', category: 'technical', description: 'Creating software applications that run on a mobile device, such as a smartphone or tablet.' },
    { name: 'UI/UX Design', category: 'technical', description: 'Designing user interfaces (UI) and user experiences (UX) to create easy-to-use and enjoyable digital products.' },
    { name: 'Mechanical Engineering', category: 'technical', description: 'The discipline that applies engineering physics, and mathematics principles to design, analyze, manufacture, and maintain mechanical systems.' },
    { name: 'Electrical Engineering', category: 'technical', description: 'Designing, developing, and maintaining electrical systems and electronic equipment.' },
    { name: 'Civil Engineering', category: 'technical', description: 'Designing, constructing, and maintaining the physical and naturally built environment, including public works.' },
    { name: 'CAD Software Proficiency', category: 'technical', description: 'Expertise in using computer-aided design software to create 2D and 3D designs and models.' },
    { name: 'Video Editing', category: 'technical', description: 'Manipulating and rearranging video shots to create a new, coherent work.' },
    { name: 'Photography', category: 'technical', description: 'The art, application, and practice of creating durable images by recording light or other electromagnetic radiation.' },
    { name: 'Animation', category: 'technical', description: 'Creating the illusion of motion and change by rapidly displaying a sequence of static images or frames.' },
    { name: 'Audio Production', category: 'technical', description: 'The process of recording, editing, and mixing sound to create a finished audio product.' },
    // Soft Skills
    { name: 'Teamwork', category: 'soft', description: 'The ability to work collaboratively with a group of people to achieve a common goal.' },
    { name: 'Active Listening', category: 'soft', description: 'Fully concentrating on what is being said, rather than just passively hearing the message of the speaker.' },
    { name: 'Negotiation', category: 'soft', description: 'Discussing a topic with the aim of reaching an agreement or compromise.' },
    { name: 'Empathy', category: 'soft', description: 'The ability to understand and share the feelings of another person.' },
    { name: 'Conflict Resolution', category: 'soft', description: 'The process by which two or more parties find a peaceful solution to a disagreement.' },
    { name: 'Time Management', category: 'soft', description: 'The process of planning and exercising conscious control over time spent on specific activities to increase effectiveness and efficiency.' },
    { name: 'Planning', category: 'soft', description: 'Setting goals, developing strategies, and outlining tasks and schedules to accomplish those goals.' },
    { name: 'Adaptability', category: 'soft', description: 'The quality of being able to adjust to new conditions.' },
    { name: 'Attention to Detail', category: 'soft', description: 'The ability to achieve thoroughness and accuracy when accomplishing a task.' },
    { name: 'Public Speaking', category: 'soft', description: 'The act of speaking to a live audience in a structured or intentional manner to inform, influence, or entertain them.' },
    { name: 'Storytelling', category: 'soft', description: 'The art of using narratives to communicate ideas, evoke emotions, and connect with an audience.' },
    { name: 'Written Communication', category: 'soft', description: 'The ability to convey information clearly and effectively through written text.' },
    { name: 'Non-Verbal Communication', category: 'soft', description: 'Using body language, facial expressions, and other physical cues to communicate without words.' },
    { name: 'Creativity', category: 'soft', description: 'The use of imagination or original ideas to create something new.' },
    // Domain Skills
    { name: 'Medical Coding', category: 'domain', description: 'Translating healthcare services and medical procedures into universal alphanumeric codes for billing and insurance purposes.' },
    { name: 'Legal Research', category: 'domain', description: 'The process of finding information and legal precedents to support legal arguments and decision-making.' },
    { name: 'Contract Law', category: 'domain', description: 'The area of law that deals with legally binding agreements made between individuals or entities.' },
    { name: 'Litigation Support', category: 'domain', description: 'Providing assistance to lawyers in the preparation and presentation of cases in court.' },
    { name: 'Search Engine Optimization (SEO)', category: 'domain', description: 'Optimizing a website to rank higher in search engine results and drive organic traffic.' },
    { name: 'Pay-Per-Click (PPC) Advertising', category: 'domain', description: 'A model of digital marketing in which advertisers pay a fee each time one of their ads is clicked.' },
    { name: 'Market Research', category: 'domain', description: 'Gathering and analyzing information about a target market, consumers, and competitors to inform business strategy.' },
    { name: 'Cold Calling', category: 'domain', description: 'Making unsolicited telephone calls to potential customers in an attempt to sell products or services.' },
    { name: 'Customer Relationship Management (CRM)', category: 'domain', description: 'Managing all of a company\'s relationships and interactions with customers and potential customers.' },
    { name: 'Sales Strategy', category: 'domain', description: 'A documented plan that outlines how a company will position its products or services to close deals and achieve revenue goals.' },
    // Entrepreneurship Skills
    { name: 'Business Planning', category: 'entrepreneurship', description: 'Developing a detailed roadmap for a business, including goals, strategies, marketing, and financial forecasts.' },
    { name: 'Financial Management and Budgeting', category: 'entrepreneurship', description: 'Overseeing the financial health of a business, including financial planning, analysis, and managing budgets.' },
    { name: 'Strategic Thinking', category: 'entrepreneurship', description: 'The ability to analyze internal and external factors to formulate a high-level plan for achieving goals.' },
    { name: 'Risk Management', category: 'entrepreneurship', description: 'Identifying, assessing, and prioritizing risks to a business and taking steps to minimize or mitigate their impact.' },
    { name: 'Networking', category: 'entrepreneurship', description: 'Building and maintaining a professional network of contacts to create opportunities and gain knowledge.' },
    { name: 'Fundraising and Pitching', category: 'entrepreneurship', description: 'Raising capital for a new venture by presenting a compelling business idea to potential investors.' },
    { name: 'Leadership', category: 'entrepreneurship', description: 'The ability to guide and inspire a team toward achieving a common vision or goal.' },
    { name: 'Product Development', category: 'entrepreneurship', description: 'The entire process of bringing a new product to market, from idea to final release.' },
    { name: 'Marketing and Branding', category: 'entrepreneurship', description: 'Creating a strong brand identity and promotional strategies to attract and retain customers.' },
    { name: 'Sales Acumen', category: 'entrepreneurship', description: 'The keen insight and ability to understand sales processes and effectively close deals.' },
    // Analytical Skills
    { name: 'Critical Thinking', category: 'analytical', description: 'The objective analysis and evaluation of an issue to form a judgment.' },
    { name: 'Data Analysis', category: 'analytical', description: 'The process of collecting, modeling, and analyzing data to extract insights and support decision-making.' },
    { name: 'Problem-Solving', category: 'analytical', description: 'Identifying problems, generating solutions, and implementing the most effective course of action.' },
    { name: 'Logical Reasoning', category: 'analytical', description: 'The ability to use a systematic series of steps to arrive at a conclusion or solution.' },
    { name: 'Research and Investigation', category: 'analytical', description: 'Systematic study of materials and sources to establish facts and reach new conclusions.' },
    { name: 'Forecasting', category: 'analytical', description: 'Using historical data and current trends to make informed predictions about future outcomes.' },
    { name: 'Pattern Recognition', category: 'analytical', description: 'The ability to identify recurring themes or patterns within data or information.' },
    { name: 'Decision-Making', category: 'analytical', description: 'The process of selecting a course of action from a set of alternatives.' },
    { name: 'Quantitative Analysis', category: 'analytical', description: 'Using mathematical and statistical methods to analyze data and make business decisions.' },
    { name: 'Qualitative Analysis', category: 'analytical', description: 'Interpreting non-numerical data, such as text and interviews, to understand opinions, motivations, and experiences.' },
    // Medical Skills
    { name: 'Patient Care', category: 'medical', description: 'Providing medical and nursing care to patients, including monitoring their condition and assisting with daily tasks.' },
    { name: 'Pharmacology', category: 'medical', description: 'The study of the uses, effects, and modes of action of drugs.' },
    { name: 'Clinical Research', category: 'medical', description: 'Medical research involving people as a way to understand health, illness, and how to improve medical outcomes.' },
    { name: 'Surgical Assisting', category: 'medical', description: 'Assisting surgeons during operations, including preparing the operating room and helping with patient care.' },
    { name: 'Medical Diagnosis', category: 'medical', description: 'Identifying the nature of an illness or other problem by examining the symptoms and medical history of a patient.' },
    { name: 'Treatment Planning', category: 'medical', description: 'Developing a comprehensive strategy for patient care, including medical interventions and therapeutic goals.' },
    { name: 'Medical Equipment Operation', category: 'medical', description: 'Skillfully using and maintaining medical devices and machinery for diagnostic or treatment purposes.' },
    { name: 'Anatomy & Physiology Knowledge', category: 'medical', description: 'A deep understanding of the structure (anatomy) and function (physiology) of the human body.' },
    { name: 'Electronic Health Record (EHR) Management)', category: 'medical', description: 'Proficiency in using and managing digital patient health records for accurate documentation and data security.' },
    { name: 'Infection Control', category: 'medical', description: 'Implementing procedures to prevent the spread of infectious diseases in healthcare settings.' },
    { name: 'Public Health Knowledge', category: 'medical', description: 'Understanding and applying principles to protect and improve the health of entire communities.' },
    { name: 'Emergency Response', category: 'medical', description: 'Providing immediate care and quick decision-making in life-threatening situations.' },
  ];
  
  const interestsOptions = [
    'Technology & Innovation', 'Business & Entrepreneurship', 'Creative Arts & Design',
    'Healthcare & Medicine', 'Education & Training', 'Finance & Economics',
    'Engineering & Manufacturing', 'Marketing & Sales', 'Research & Development',
    'Social Impact & NGO', 'Sports & Fitness', 'Travel & Hospitality'
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData as AssessmentData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const handleSkillToggle = (skillName: string, category: Skill['category']) => {
    const currentSkills = formData.skills || [];
    const existingSkill = currentSkills.find(s => s.name === skillName);
    
    if (existingSkill) {
      setFormData({
        ...formData,
        skills: currentSkills.filter(s => s.name !== skillName)
      });
    } else {
      setFormData({
        ...formData,
        skills: [...currentSkills, { name: skillName, level: 3, category }]
      });
    }
  };

  const handleSkillLevelChange = (skillName: string, level: number) => {
    const currentSkills = formData.skills || [];
    setFormData({
      ...formData,
      skills: currentSkills.map(s => 
        s.name === skillName ? { ...s, level: level as Skill['level'] } : s
      )
    });
  };

  const handleMultiSelect = (field: 'interests' | 'careerGoals', value: string) => {
    const currentValues = formData[field] || [];
    if (currentValues.includes(value)) {
      setFormData({
        ...formData,
        [field]: currentValues.filter(v => v !== value)
      });
    } else {
      setFormData({
        ...formData,
        [field]: [...currentValues, value]
      });
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : (category as Skill['category']));
  };

  const scrollToAssessmentTop = () => {
    if (assessmentRef.current) {
      window.scrollTo({ top: assessmentRef.current.offsetTop - 50, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : isActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  isActive ? 'text-blue-600' : 'text-slate-600'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div ref={assessmentRef} className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-800">Skills Assessment</h2>
              <button
                onClick={handleClearForm}
                className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Clear Form</span>
              </button>
            </div>
            <p className="text-slate-600 mb-2">Select your skills and rate your proficiency level (1 = Beginner, 5 = Expert)</p>
            
            {formData.skills && formData.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Selected Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => {
                    const Icon = getCategoryIcon(skill.category);
                    const tagColorClass = getCategoryTagColor(skill.category);
                    const textColorClass = getCategoryButtonTextColor(skill.category);
                    return (
                      <span key={index} className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${tagColorClass}`}>
                        {Icon && <Icon className={`w-4 h-4 ${getCategoryColor(skill.category)}`} />}
                        <span>{skill.name}</span>
                        <button
                          onClick={() => handleSkillToggle(skill.name, skill.category)}
                          className={`hover:text-slate-200 transition-colors ${textColorClass}`}
                          aria-label={`Deselect ${skill.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map(category => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.name;
                
                return (
                  <button
                    key={category.name}
                    onClick={() => toggleCategory(category.name)}
                    className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all duration-200 ${
                      isSelected ? category.selectedClasses : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-2 transition-colors duration-200 ${category.iconColor}`} />
                    <span className={`font-semibold text-slate-800 capitalize transition-colors duration-200`}>
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedCategory && (
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-bold text-slate-800 capitalize mb-4">{selectedCategory} Skills</h3>
                <div className="flex flex-col gap-4">
                  {skillsOptions
                    .filter(skill => skill.category === selectedCategory)
                    .map((skill) => {
                      const selectedSkill = formData.skills?.find(s => s.name === skill.name);
                      const isSelected = !!selectedSkill;
                      
                      return (
                        <div
                          key={skill.name}
                          title={skill.description}
                          className={`border-2 rounded-lg p-4 transition-all duration-200 ${
                            isSelected ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <label className="flex items-center space-x-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleSkillToggle(skill.name, skill.category)}
                                className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                              />
                              <span className="font-medium text-slate-800">{skill.name}</span>
                            </label>
                          </div>
                          
                          {isSelected && (
                            <div className="flex items-center space-x-4 pl-8">
                              <span className="text-sm text-slate-600 whitespace-nowrap">Proficiency:</span>
                              <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((level) => (
                                  <button
                                    type="button"
                                    key={level}
                                    onClick={() => handleSkillLevelChange(skill.name, level)}
                                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                                      selectedSkill?.level === level
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                                    }`}
                                  >
                                    {level}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
                <div className="text-center mt-6">
                  <button
                    type="button"
                    onClick={scrollToAssessmentTop}
                    className="group flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 text-slate-600 hover:text-slate-800 hover:bg-slate-100 mx-auto relative"
                  >
                    <ArrowUp className="w-5 h-5" />
                    <span className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-2 bg-slate-800 text-white text-sm rounded-md whitespace-nowrap">
                      Back to skills assessment
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Interests</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">What are your interests?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {interestsOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleMultiSelect('interests', interest)}
                      className={`p-3 text-left rounded-lg border-2 transition-all duration-200 ${
                        formData.interests?.includes(interest)
                          ? 'border-blue-300 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Work Preferences</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 md:col-span-2 flex flex-col items-center">
                <div className="w-full max-w-sm">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Work Style</label>
                  <select
                    value={formData.workPreferences?.workStyle || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      workPreferences: { ...formData.workPreferences!, workStyle: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select work style</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="office">Office</option>
                  </select>
                </div>
                
                <div className="w-full max-w-sm">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company Size Preference</label>
                  <select
                    value={formData.workPreferences?.companySize || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      workPreferences: { ...formData.workPreferences!, companySize: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    <option value="startup">Startup (1-50)</option>
                    <option value="medium">Medium (51-500)</option>
                    <option value="large">Large (500+)</option>
                  </select>
                </div>
                
                <div className="w-full max-w-sm">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Expected Salary Range (LPA)</label>
                  <select
                    value={formData.workPreferences?.salaryExpectation || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      workPreferences: { ...formData.workPreferences!, salaryExpectation: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select salary range</option>
                    <option value="3-6">3-6 LPA</option>
                    <option value="6-12">6-12 LPA</option>
                    <option value="12-20">12-20 LPA</option>
                    <option value="20+">20+ LPA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1 && !selectedCategory}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            currentStep === 1 && !selectedCategory
              ? 'text-slate-400 cursor-not-allowed'
              : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
            }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>{selectedCategory ? 'Back to Categories' : 'Back'}</span>
        </button>
        
        <button
          onClick={handleNext}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>{currentStep === 3 ? 'Complete Assessment' : 'Continue'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};