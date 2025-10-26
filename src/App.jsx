import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [IsDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", IsDark);
  }, [IsDark]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen bg-primary">
          <div className="text-3xl text-secondary">
            this is demo text
          </div>
          <div>
            <button className="bg-accent px-4 py-2 rounded text-white" onClick={() => setIsDark(!IsDark)}>
              toggle theme
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
