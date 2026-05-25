import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <div className={`w-full overflow-x-hidden relative ${!loading ? "opacity-100" : "opacity-0"}`}>
        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 right-0 px-10 py-5 z-50">
          <Navbar isLoaded={!loading} />
        </div>

        {/* Home */}
        <section id="home">
          <HeroSection isLoaded={!loading} />
        </section>

        {/* About */}
        <About />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact */}
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default App;
