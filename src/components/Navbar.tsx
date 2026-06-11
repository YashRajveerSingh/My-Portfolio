import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, Github, Linkedin, Code } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { candidateDetails } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center space-x-2.5 group"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-sky-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Cpu className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors uppercase leading-none">
                Yash Rajveer Singh
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase mt-1">
                PRE-FINAL B.TECH IT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" id="nav-desktop-menu">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  id={`nav-item-${item.href.replace("#", "")}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all uppercase relative ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-cyan-950/30 border border-cyan-500/20 rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Social Shortcuts */}
          <div className="hidden lg:flex items-center space-x-3 text-slate-400" id="nav-socials">
            <a
              href={candidateDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1 hover:bg-slate-900/50 rounded-md"
              title="GitHub"
              id="nav-social-github"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={candidateDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1 hover:bg-slate-900/50 rounded-md"
              title="LinkedIn"
              id="nav-social-linkedin"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={candidateDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors p-1 hover:bg-slate-900/50 rounded-md"
              title="LeetCode"
              id="nav-social-leetcode"
            >
              <Code className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-1 hover:bg-slate-900/50 rounded-md transition-colors focus:outline-none"
              aria-label="Toggle Menu"
              id="nav-mobile-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 mx-auto max-w-6xl">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    id={`nav-item-mobile-${item.href.replace("#", "")}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium uppercase tracking-wider transition-all ${
                      isActive
                        ? "bg-cyan-950/40 text-cyan-400 border-l-2 border-cyan-500"
                        : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex items-center space-x-6 px-4">
                <a
                  href={candidateDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center space-x-2 text-xs uppercase"
                  id="nav-mobile-github"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={candidateDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white flex items-center space-x-2 text-xs uppercase"
                  id="nav-mobile-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={candidateDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 flex items-center space-x-2 text-xs uppercase"
                  id="nav-mobile-leetcode"
                >
                  <Code className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
