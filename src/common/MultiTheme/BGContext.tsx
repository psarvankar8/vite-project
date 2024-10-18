import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

type BGContextType = {
  theme: string;
  setTheme: (newTheme: string) => void;
  themeList: string[];
};

const themes = ['light', 'dark', 'blue', 'green', 'purple'];

const BGContext = createContext<BGContextType | undefined>(undefined);

export const useTheme = (): BGContextType => {
  const context = useContext(BGContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const themeChangeAnnouncementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
 
    if (themeChangeAnnouncementRef.current) {
      themeChangeAnnouncementRef.current.textContent = `Theme changed to ${newTheme} mode.`;
    }
  };

  return (
    <BGContext.Provider value={{ theme, setTheme: changeTheme, themeList: themes }}>
      {/* ARIA live region for screen reader announcements */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        style={{ position: 'absolute', left: '-9999px' }} 
        ref={themeChangeAnnouncementRef}
      />
      {children}
    </BGContext.Provider>
  );
};
