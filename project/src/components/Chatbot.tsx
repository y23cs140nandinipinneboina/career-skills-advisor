import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, Send, Bot, User, MessageCircle } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  onBack: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onBack }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello ${user?.name}! I'm your AI Career Assistant. I can help you with career guidance, skill recommendations, interview preparation, and job search strategies. What would you like to know?`,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Career guidance responses
    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('profession')) {
      return `Based on your profile as a ${user?.education?.field || 'professional'}, I'd recommend exploring these career paths:

1. **Industry-specific roles** - Look for positions that directly utilize your ${user?.education?.field || 'field of study'}
2. **Cross-functional opportunities** - Consider roles in project management, consulting, or business analysis
3. **Emerging fields** - Explore AI, data science, or digital transformation roles

Your skills in ${user?.skills?.join(', ') || 'your field'} are particularly valuable. Would you like specific job recommendations or guidance on skill development?`;
    }
    
    // Skill development responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('learn') || lowerMessage.includes('course')) {
      return `Great question about skill development! Based on your interests in ${user?.interests?.join(', ') || 'your field'}, here are my recommendations:

**Technical Skills:**
- Programming languages relevant to your field
- Data analysis and visualization tools
- Cloud platforms (AWS, Azure, GCP)

**Soft Skills:**
- Communication and presentation
- Leadership and team management
- Problem-solving and critical thinking

**Industry-specific Skills:**
- Certifications in your domain
- Latest tools and technologies
- Industry best practices

I recommend starting with 2-3 skills that align with your career goals. Would you like specific course recommendations?`;
    }
    
    // Interview preparation responses
    if (lowerMessage.includes('interview') || lowerMessage.includes('preparation') || lowerMessage.includes('tips')) {
      return `Here's a comprehensive interview preparation strategy:

**Before the Interview:**
1. Research the company thoroughly - their mission, values, recent news
2. Review the job description and prepare specific examples
3. Practice common questions using the STAR method
4. Prepare thoughtful questions about the role and company

**During the Interview:**
1. Arrive 10-15 minutes early
2. Maintain good eye contact and positive body language
3. Listen actively and ask for clarification if needed
4. Show enthusiasm for the role and company

**Common Questions to Practice:**
- Tell me about yourself
- Why are you interested in this role?
- Describe a challenge you overcame
- Where do you see yourself in 5 years?

Would you like me to help you practice answers to any specific questions?`;
    }
    
    // Salary and negotiation responses
    if (lowerMessage.includes('salary') || lowerMessage.includes('negotiate') || lowerMessage.includes('pay')) {
      return `Salary negotiation is crucial for your career growth. Here's my advice:

**Research Phase:**
- Use platforms like Glassdoor, PayScale, and LinkedIn Salary Insights
- Consider location, experience, and company size
- Factor in the complete compensation package

**Negotiation Strategy:**
1. Wait for the offer before discussing salary
2. Express enthusiasm for the role first
3. Present a range based on market research
4. Be prepared to justify your ask with specific achievements

**For your field (${user?.education?.field || 'your domain'}):**
- Entry-level: Research shows typical ranges
- Mid-level: Focus on your unique value proposition
- Senior-level: Emphasize leadership and strategic impact

Remember, negotiation isn't just about base salary - consider benefits, vacation time, professional development, and remote work options.

Would you like help preparing for a specific salary conversation?`;
    }
    
    // Resume and profile responses
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('profile')) {
      return `Let me help you optimize your resume! Here are key recommendations:

**Structure & Format:**
- Use a clean, ATS-friendly template
- Keep it to 1-2 pages maximum
- Use consistent formatting and fonts

**Content Strategy:**
- Start with a compelling summary statement
- Use action verbs and quantify achievements
- Tailor keywords to each job application

**Based on Your Profile:**
- Highlight your ${user?.education?.degree || 'degree'} from ${user?.education?.institution || 'your institution'}
- Emphasize your skills: ${user?.skills?.join(', ') || 'technical and soft skills'}
- Showcase relevant achievements and projects

**Sections to Include:**
1. Professional Summary
2. Technical Skills
3. Work Experience (or Projects if recent graduate)
4. Education
5. Certifications & Achievements

Would you like specific advice on any particular section of your resume?`;
    }
    
    // Default response
    return `I understand you're asking about "${message}". As your AI Career Assistant, I can help with:

🎯 **Career Guidance** - Explore career paths and opportunities
📚 **Skill Development** - Learn what skills to develop and where
💼 **Interview Prep** - Practice and preparation strategies  
💰 **Salary Negotiation** - Research and negotiation tips
📄 **Resume Optimization** - Make your resume stand out
🔍 **Job Search Strategy** - Find the right opportunities

Could you be more specific about what aspect you'd like help with? For example, you could ask:
- "How can I transition into data science?"
- "What skills should I learn for software engineering?"
- "How do I prepare for technical interviews?"
- "What salary should I expect in my field?"

I'm here to provide personalized advice based on your background in ${user?.education?.field || 'your field'}!`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "What career paths match my skills?",
    "How do I prepare for technical interviews?",
    "What skills should I learn next?",
    "How can I negotiate my salary?",
    "Can you review my resume strategy?"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl mr-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Career Assistant</h1>
                <p className="text-gray-600">Get personalized career guidance and advice</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-green-600">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-2xl shadow-lg flex flex-col h-[600px]">
        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-3xl ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'bg-blue-600' 
                    : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className={`px-4 py-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                } ${message.role === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}`}>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-3xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div className="px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about careers, skills, interviews, or job search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={1}
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};