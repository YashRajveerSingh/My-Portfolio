import { Award, Flame, Code2, ShieldCheck, ChevronRight } from "lucide-react";
import { achievementsData } from "../data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-950/40 border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Key Achievements
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            Verifiable markers of quantitative logic solving and national collaborative teamwork solutions.
          </p>
        </div>

        {/* Two Achievement Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="achievements-cards-group">
          {achievementsData.map((item, idx) => {
            const isLeetcode = item.title.toLowerCase().includes("leetcode");

            return (
              <div
                key={item.title}
                id={`achievement-${idx}`}
                className="rounded-2xl border border-white/5 bg-slate-900/15 p-6 sm:p-8 hover:border-cyan-500/15 duration-300 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Icon & Title Accent Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 group-hover:border-cyan-500/20 transition-all">
                      {isLeetcode ? (
                        <Code2 className="w-6 h-6 text-cyan-400 stroke-[2]" />
                      ) : (
                        <Flame className="w-6 h-6 text-orange-400 stroke-[2]" />
                      )}
                    </div>
                    
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {isLeetcode ? "ALGORITHMIC COMPETENCY" : "COLLABORATIVE INNOVATION"}
                    </span>
                  </div>

                  {/* Highlighting Number Metric */}
                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-glow-cyan">
                      {item.metric}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-200 uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  {/* Descriptive statement */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Additional metrics info / action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span className="uppercase">Verified Credentials</span>
                  </div>
                  
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-cyan-400 hover:text-white transition-colors flex items-center space-x-1 uppercase group/link"
                    >
                      <span>Show Profile</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
