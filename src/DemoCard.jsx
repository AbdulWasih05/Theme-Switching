import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const DemoCard = () => {
  const { theme } = useContext(ThemeContext);

  const demoData = [
    {
      id: 1,
      title: "React",
      description: "A JavaScript library for building user interfaces with components",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: "🎨",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      id: 3,
      title: "Dark Mode",
      description: "Seamless theme switching with Context API",
      icon: "🌙",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 4,
      title: "Responsive Design",
      description: "Beautiful UI that works on all screen sizes",
      icon: "📱",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <div className="w-full px-6 py-8 container mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary mb-2">Demo Cards</h2>
        <p className="text-secondary/70">
          Showcase of responsive cards with theme-aware colors
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {demoData.map((card) => (
          <div
            key={card.id}
            className="group bg-background border-2 border-primary rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-secondary mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-secondary/70 text-sm mb-4">{card.description}</p>

            {/* Color Bar */}
            <div className={`h-1 rounded-full bg-linear-to-r ${card.color}`}></div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-12 bg-background border-2 border-primary rounded-lg p-8">
        <h3 className="text-2xl font-bold text-secondary mb-6">✨ Key Features</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Easy Toggle</h4>
              <p className="text-secondary/70 text-sm">
                One-click theme switching between light and dark modes
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl">💾</div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Persistent</h4>
              <p className="text-secondary/70 text-sm">
                Theme preference is saved to localStorage
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Fast & Smooth</h4>
              <p className="text-secondary/70 text-sm">
                Instant theme switching with smooth transitions
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-3xl">🎨</div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Custom Colors</h4>
              <p className="text-secondary/70 text-sm">
                Easily customizable theme colors with CSS variables
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-background border-2 border-accent rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-accent mb-2">2</div>
          <p className="text-secondary font-semibold">Themes</p>
          <p className="text-secondary/70 text-sm">Light & Dark modes</p>
        </div>

        <div className="bg-background border-2 border-accent rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-accent mb-2">∞</div>
          <p className="text-secondary font-semibold">Customizable</p>
          <p className="text-secondary/70 text-sm">CSS variables for colors</p>
        </div>

        <div className="bg-background border-2 border-accent rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-accent mb-2">100%</div>
          <p className="text-secondary font-semibold">Responsive</p>
          <p className="text-secondary/70 text-sm">Mobile friendly design</p>
        </div>
      </div>

      {/* Theme Info */}
      <div className="mt-12 bg-linear-to-r from-primary to-accent rounded-lg p-6 text-center">
        <p className="text-secondary font-semibold text-lg">
          Current Theme: <span className="capitalize font-bold">{theme}</span>
        </p>
        <p className="text-secondary/80 text-sm mt-2">
          {theme === "light"
            ? "☀️ Light mode - Easy on the eyes during daytime"
            : "🌙 Dark mode - Comfortable for night-time viewing"}
        </p>
      </div>
    </div>
  );
};

export default DemoCard;
