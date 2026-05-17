import {
    createContext,
    useEffect,
    useState,
  } from "react";
  
  export const ThemeContext =
    createContext();
  
  function ThemeProvider({
    children,
  }) {
  
    const [darkMode, setDarkMode] =
      useState(false);
  
    useEffect(() => {
  
      if (darkMode) {
  
        document.documentElement.classList.add(
          "dark"
        );
  
      } else {
  
        document.documentElement.classList.remove(
          "dark"
        );
      }
  
    }, [darkMode]);
  
    const toggleDarkMode = () => {
  
      setDarkMode(!darkMode);
    };
  
    return (
  
      <ThemeContext.Provider
        value={{
          darkMode,
          toggleDarkMode,
        }}
      >
        {children}
  
      </ThemeContext.Provider>
    );
  }
  
  export default ThemeProvider;