import { useState } from "react";
import { Code, Terminal, Layers, Database, Wrench, Sparkles } from "lucide-react";
import { skillsData, SkillCategory } from "../data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "Web Technologies":
        return <Code className="w-5 h-5 text-sky-400" />;
      case "Frameworks & Libs":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "Databases":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "Tools & Utilities":
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getSkillGlowClass = (category: string) => {
    switch (category) {
      case "Languages":
        return "hover:border-cyan-500/40 hover:shadow-cyan-500/5";
      case "Web Technologies":
        return "hover:border-sky-500/40 hover:shadow-sky-500/5";
      case "Frameworks & Libs":
        return "hover:border-blue-500/40 hover:shadow-blue-500/5";
      case "Databases":
        return "hover:border-indigo-500/40 hover:shadow-indigo-500/5";
      case "Tools & Utilities":
        return "hover:border-teal-500/40 hover:shadow-teal-500/5";
      default:
        return "hover:border-cyan-500/40 hover:shadow-cyan-500/5";
    }
  };

  const categories = ["All", ...skillsData.map((cat) => cat.categoryName)];

  return (
    <section id="skills" className="py-20 bg-slate-950/40 border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            Abilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            An organized inventory of programming languages, architectures, datastores, and specialized developer suites.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase border transition-all duration-300 ${
                activeTab === cat
                  ? "bg-cyan-950/45 text-cyan-400 border-cyan-500/30 font-bold"
                  : "bg-transparent text-slate-400 border-white/5 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-matrix">
          {skillsData
            .filter((cat) => activeTab === "All" || cat.categoryName === activeTab)
            .map((cat) => (
              <div
                key={cat.categoryName}
                id={`skill-cat-${cat.categoryName.replace(/\s+/g, '-').toLowerCase()}`}
                className="rounded-xl border border-white/5 bg-slate-900/35 p-5 flex flex-col justify-between hover:border-cyan-500/15 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 border-b border-white/5 pb-4 mb-4">
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-white/5 group-hover:border-cyan-500/20 transition-all">
                      {getCategoryIcon(cat.categoryName)}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                        {cat.categoryName}
                      </h3>
                      <span className="text-[9px] font-mono text-slate-500 tracking-wider">
                        {cat.skills.length} STACK COMPONENT{cat.skills.length > 1 ? "S" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Skills Mini Badging */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        id={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`px-3 py-2 rounded-lg bg-slate-950/50 border border-white/5 text-xs text-slate-200 flex items-center space-x-2 transition-all duration-300 ${getSkillGlowClass(cat.categoryName)}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover:bg-cyan-400 transition-all" />
                        <span className="font-mono">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro Category footer tag */}
                <div className="mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-slate-500 flex items-center justify-between uppercase">
                  <span>GL Bajaj Curriculum</span>
                  <span>verified level 5.0</span>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
