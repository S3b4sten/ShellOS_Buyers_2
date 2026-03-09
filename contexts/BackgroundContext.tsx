import React, { createContext, useContext, useState } from 'react';
import { CATEGORY_BG_MAP } from '../constants';

interface BackgroundContextType {
  background: string;
  setCategory: (category: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [background, setBackground] = useState(CATEGORY_BG_MAP["Tout"]);

  const setCategory = (category: string) => {
    const newBg = CATEGORY_BG_MAP[category] || CATEGORY_BG_MAP["Tout"];
    setBackground(newBg);
  };

  return (
    <BackgroundContext.Provider value={{ background, setCategory }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};