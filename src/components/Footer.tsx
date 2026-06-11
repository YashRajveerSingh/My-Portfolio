import React from "react";
import { ChevronUp, Github, Linkedin, Code, User, ArrowUpCircle } from "lucide-react";
import { candidateDetails } from "../data";

export default function Footer() {
  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/5 py-12 relative z-10" id="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Mark */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-display font-medium text-xs text-white uppercase tracking-wider">
              Yash Rajveer Singh
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              B.Tech IT Undergraduate @ GL BAJAJ • class of 2027
            </p>
          </div>

          {/* Social Anchors */}
          <div className="flex items-center space-x-4">
            <a
              href={candidateDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
              title="LinkedIn"
              id="footer-social-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={candidateDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
              title="GitHub"
              id="footer-social-github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={candidateDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-slate-900 border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all duration-300"
              title="LeetCode"
              id="footer-social-leetcode"
            >
              <Code className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={handleBackToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/25 text-slate-400 hover:text-white flex items-center space-x-1.5 transition-all text-[11px] font-mono uppercase cursor-pointer"
              title="Back to top"
              id="footer-back-to-top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

        {/* Legal notice bottom */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-600 gap-4">
          <span>© {new Date().getFullYear()} Yash Rajveer Singh. All Rights Reserved.</span>
          <span className="uppercase text-slate-700">crafted with React, Vite & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
