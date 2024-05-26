// context/SideMenuContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SideMenuContextType {
  open: boolean;
  toggleOpen: () => void;
}

const SideMenuContext = createContext<SideMenuContextType | undefined>(undefined);

export const SideMenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedOpen = localStorage.getItem('sideMenuOpen');
      return storedOpen !== null ? JSON.parse(storedOpen) : false;
    }
    return false;
  });

  const toggleOpen = () => {
    setOpen((prevOpen) => {
      const newOpen = !prevOpen;
      localStorage.setItem('sideMenuOpen', JSON.stringify(newOpen));
      return newOpen;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedOpen = localStorage.getItem('sideMenuOpen');
      if (storedOpen !== null) {
        setOpen(JSON.parse(storedOpen));
      }
    }
  }, []);

  return (
    <SideMenuContext.Provider value={{ open, toggleOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenu = (): SideMenuContextType => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error('useSideMenu must be used within a SideMenuProvider');
  }
  return context;
};
