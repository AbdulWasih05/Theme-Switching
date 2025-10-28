import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import DemoCard from "./DemoCard";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <ThemeSwitcher />
        <DemoCard />
      </ThemeProvider>
    </>
  );
}

export default App;
