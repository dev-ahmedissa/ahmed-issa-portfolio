import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsLight(true);
      document.body.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <div
      className="bg-dark-950 text-[#f0f0f0] font-sans antialiased leading-relaxed min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <Navbar isLight={isLight} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
