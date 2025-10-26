import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [count, setCount] = useState(0);
  const [IsDark, setIsDark] = useState(
    (() => {
      const theme = localStorage.getItem("theme");
      console.log("initial theme:", theme);
      return theme === "dark";
    })()
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", IsDark);
    localStorage.setItem("theme", IsDark ? "dark" : "light");
    console.log("theme changed to:", IsDark ? "dark" : "light");
  }, [IsDark]);

  return (
    <>
      <div className="container mx-auto max-w-full">
        <div className="flex items-center justify-center h-screen bg-background">
          <div  className="p-16 border-black border-4 gap-8  border-solid flex flex-col items-center justify-center rounded-lg bg-primary">
            <div className="text-3xl text-secondary">Theme Switcher App</div>
            <div>
              <button
                className="bg-accent px-4 py-2 rounded text-white"
                onClick={() => setIsDark(!IsDark)}
              >
                Toggle theme
              </button>
            </div>
              <p className="text-center text-secondary">Your current theme is: {IsDark ? "Dark" : "Light"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
