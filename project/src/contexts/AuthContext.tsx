import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Partial<User>, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('career_advisor_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const storedUsers = localStorage.getItem('career_advisor_users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('career_advisor_user', JSON.stringify(userWithoutPassword));
      return true;
    }
    
    return false;
  };

  const signup = async (userData: Partial<User>, password: string): Promise<boolean> => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone,
        age: userData.age || 0,
        education: userData.education || {
          level: 'pursuing',
          degree: '',
          field: '',
          institution: '',
          year: new Date().getFullYear()
        },
        experience: userData.experience || {
          hasExperience: false
        },
        skills: userData.skills || [],
        interests: userData.interests || [],
        achievements: userData.achievements || [],
        isStudent: userData.isStudent !== false
      };

      const storedUsers = localStorage.getItem('career_advisor_users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if user already exists
      if (users.some((u: any) => u.email === newUser.email)) {
        return false;
      }
      
      users.push({ ...newUser, password });
      localStorage.setItem('career_advisor_users', JSON.stringify(users));
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('career_advisor_user', JSON.stringify(newUser));
      
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('career_advisor_user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('career_advisor_user', JSON.stringify(updatedUser));
      
      // Update in users array too
      const storedUsers = localStorage.getItem('career_advisor_users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const userIndex = users.findIndex((u: any) => u.id === user.id);
        if (userIndex !== -1) {
          users[userIndex] = { ...users[userIndex], ...userData };
          localStorage.setItem('career_advisor_users', JSON.stringify(users));
        }
      }
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};