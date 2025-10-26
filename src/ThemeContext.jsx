import { createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
        console.log("theme changed to:", theme);
    }, [theme]);
    
    const toggleTheme = () => {
        const updatedTheme = theme === "light" ? "dark" : "light";
        setTheme(updatedTheme);
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
    );
};
