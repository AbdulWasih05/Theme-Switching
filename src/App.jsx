import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <ThemeSwitcher />
      </ThemeProvider>
    </>
  );
}

export default App;
