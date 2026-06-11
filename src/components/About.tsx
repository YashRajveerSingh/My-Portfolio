import { GraduationCap, MapPin, Award, BookOpen, Sparkles, Database } from "lucide-react";
import { motion } from "motion/react";
import { candidateDetails } from "../data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#05060a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Aspiring Software Engineer
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            Detailing my academic background, technical focus, and professional drive.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Tech Graphic Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center" id="about-graphic">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85">
              {/* Outer Glow Path */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 blur-xl" />
              
              {/* Main Vector Frame */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 border-b border-white/5 pb-3">
                  <span>SYSTEM_ID // CANDIDATE_01</span>
                  <span>LIVE // ACTIVE</span>
                </div>

                {/* Avatar Visual representation */}
                <div className="flex-1 flex flex-col items-center justify-center py-6 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center relative shadow-inner">
                    <Database className="w-10 h-10 text-cyan-400" />
                    {/* Pulsing radar */}
                    <span className="absolute inset-x-0 inset-y-0 rounded-full border border-cyan-400/20 animate-ping [animation-duration:3s]" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-display font-bold text-white text-base tracking-wide uppercase">
                      {candidateDetails.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 tracking-wider mt-1 uppercase">
                      B.Tech Info Technology / GL Bajaj
                    </p>
                  </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-400">
                  <div className="bg-slate-950/40 p-2 rounded-lg border border-white/5 flex flex-col items-center">
                    <span className="text-cyan-400 font-bold block text-sm">8.09</span>
                    <span>CURRENT CGPA</span>
                  </div>
                  <div className="bg-slate-950/40 p-2 rounded-lg border border-white/5 flex flex-col items-center">
                    <span className="text-cyan-400 font-bold block text-sm">2027</span>
                    <span>GRAD YEAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Summary Info */}
          <div className="lg:col-span-7 space-y-6" id="about-details">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-wide">
              Architecting solid digital backends & logical structures.
            </h3>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              {candidateDetails.aboutSummary}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              My engineering trajectory is defined by a strong dedication to backend workflows, relational schema designs, and data pipelines. Armed with powerful tools like Spring Boot and MySQL, I actively build solutions implementing robust, secure APIs, and streamlined web views.
            </p>

            {/* Structured Academic timeline details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="academic-cards">
              {/* Institution card */}
              <div className="p-4 rounded-xl bg-slate-900/35 border border-white/5 flex items-start space-x-3 hover:border-cyan-500/20 transition-all">
                <div className="p-2 rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Education</h4>
                  <p className="text-xs text-slate-300 font-medium mt-1">B.Tech in Information Technology</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">GL Bajaj Institute of Tech & Mgt</p>
                  <span className="text-[10px] text-cyan-400 font-mono mt-1 block bg-cyan-950/35 border border-cyan-500/10 px-1.5 py-0.5 rounded-md w-max">CGPA: 8.09/10</span>
                </div>
              </div>

              {/* Geographic status card */}
              <div className="p-4 rounded-xl bg-slate-900/35 border border-white/5 flex items-start space-x-3 hover:border-cyan-500/20 transition-all">
                <div className="p-2 rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Location & Origin</h4>
                  <p className="text-xs text-slate-300 font-medium mt-1">Gorakhpur, Uttar Pradesh</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">GL Bajaj, Greater Noida (NCR)</p>
                  <span className="text-[10px] text-sky-400 font-mono mt-1 block bg-sky-950/35 border border-sky-500/10 px-1.5 py-0.5 rounded-md w-max">Open to Relocation</span>
                </div>
              </div>
            </div>

            {/* Bullet achievements badges row */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4" id="about-badges">
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Smart India Hackathon</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>450+ LeetCode Solved</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Certified Java Programmer</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
