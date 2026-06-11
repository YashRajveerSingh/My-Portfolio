import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "achievements", "certifications", "contact"];
    
    // Setup intersection observer to track which section is currently centered
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -45% 0px", // Trigger when element is mostly centered in the viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#05060a] text-slate-100 flex flex-col relative" id="app-wrapper">
      
      {/* Decorative Global Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#05060a]" />
        
        {/* Modern thin scanning visual lines */}
        <div className="absolute left-1/4 h-full w-[1px] bg-white/[0.015]" />
        <div className="absolute left-2/4 h-full w-[1px] bg-white/[0.015]" />
        <div className="absolute left-3/4 h-full w-[1px] bg-white/[0.015]" />
        
        {/* Subtle horizontal tracking lines */}
        <div className="absolute top-1/4 w-full h-[1px] bg-white/[0.01]" />
        <div className="absolute top-2/4 w-full h-[1px] bg-white/[0.01]" />
        <div className="absolute top-3/4 w-full h-[1px] bg-white/[0.01]" />
      </div>

      {/* Structured Single-Page Modules */}
      <div className="relative z-10 flex-1">
        
        {/* Navigation Sticky Bar */}
        <Navbar activeSection={activeSection} />

        {/* Hero Banner Module */}
        <Hero />

        {/* Professional Academic & Aim Info */}
        <About />

        {/* Interactive Competency Matrix */}
        <Skills />

        {/* Engineering Projects Case Studies */}
        <Projects />

        {/* Quantitative Milestones & Competitive coding */}
        <Achievements />

        {/* Industry standard assessments */}
        <Certifications />

        {/* Secure Communications form */}
        <Contact />

        {/* Fine tuned footer */}
        <Footer />

      </div>

    </div>
  );
}
