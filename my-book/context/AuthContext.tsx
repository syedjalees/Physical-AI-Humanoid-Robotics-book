
// my-book/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SigninFormValues, SignupFormValues } from '../lib/schemas'; // Adjust path

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  user: { username: string; email: string } | null; // Extend this with more user info as needed
  signup: (data: SignupFormValues) => Promise<boolean>;
  signin: (data: SigninFormValues) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('authUser');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);

  const API_BASE_URL = 'http://localhost:8000'; // Docusaurus might need a different env var, adjust as needed

  const signup = async (data: SignupFormValues) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Signup failed');
      }
      alert('Signup successful! Please sign in.');
      window.location.href = '/signin'; // Docusaurus client-side navigation
      return true;
    } catch (error: any) {
      console.error('Signup error:', error.message);
      alert(error.message);
      return false;
    }
  };

  const signin = async (data: SigninFormValues) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Signin failed');
      }
      const result = await response.json();
      const newToken = result.token; // Assuming backend returns { token: '...', user: { ... } }
      const newUser = result.user;   // Adjust based on actual backend response

      if (newToken && newUser) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('authToken', newToken);
          localStorage.setItem('authUser', JSON.stringify(newUser));
        }
        setToken(newToken);
        setUser(newUser);
        setIsAuthenticated(true);
        window.location.href = '/'; // Redirect to home or dashboard after signin
        return true;
      } else {
        throw new Error('Invalid response from server: Missing token or user info');
      }
    } catch (error: any) {
      console.error('Signin error:', error.message);
      alert(error.message);
      return false;
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    }
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = '/signin';
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, user, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
