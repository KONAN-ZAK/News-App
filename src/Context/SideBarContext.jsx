import { createContext, useState } from 'react';

export const SideBarContext = createContext();
export const SideBarPageContext = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <SideBarContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      {children}
    </SideBarContext.Provider>
  );
};
