import React, { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

const App = () => {
  useEffect(() => {
    // Initial theme set to dark
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
      <main className="relative">
        <Header />
        <Hero />
      </main>
    </div>
  );
};

export default App;
