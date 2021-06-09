import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../app/firebase';

const userContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userResult: any) => {
      if (userResult) {
        setUser(userResult);
      } else {
        setUser(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div>Loading...</div>;
  return <userContext.Provider value={{ user }}>{children}</userContext.Provider>;
};

export const useUser = () => {
  return useContext(userContext);
};
