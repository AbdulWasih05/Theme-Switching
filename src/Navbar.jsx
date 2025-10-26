import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-full bg-background text-secondary">
      <div className="flex items-center justify-between h-16 px-6  border-b-2 border-primary shadow-sm container mx-auto ">
        <h1 className="text-2xl font-semibold ">Theme Switcher</h1>
        <button className="text-2xl p-2 rounded-full hover:bg-muted transition-all duration-200" onClick={toggleTheme}>
          {theme === "light" ? "🌜" : "🌞"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
