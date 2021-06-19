import React, { createContext, useEffect, useState } from 'react';
import api from '../services/auth';
import history from '../history';
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem('@RNAuth:user');
    const storageToken = localStorage.getItem('@RNAuth:token');

    if (storageUser && storageToken) {
    api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

      setUser(JSON.parse(storageUser));
      history.push('/dashboard');
    }
    setLoading(false);
  }, [loading]);

  async function SignIn({ email, password }) {
    setLoading(true);

    const response = await api.post('/authenticate', { email, password });
    const { user, token } = response.data;

    setUser(user);
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    localStorage.setItem('@RNAuth:user', JSON.stringify(user));
    localStorage.setItem('@RNAuth:token', token);
  }

  function SignOut() {
    setLoading(true);

    localStorage.removeItem('@RNAuth:user');
    localStorage.removeItem('@RNAuth:token');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ SignIn, isAuthenticated: !!user, user, SignOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
