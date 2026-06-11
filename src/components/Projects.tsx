import React, { useState } from "react";
import { FolderGit2, Github, ExternalLink, Terminal, Play, Loader2, ShieldCheck, Database, Check } from "lucide-react";
import { projectsData } from "../data";

export default function Projects() {
  // Live Playground State for the AI SQL Generator inside the card
  const [naturalLanguageInput, setNaturalLanguageInput] = useState("Show me users who joined in May 2026 and have active subscriptions");
  const [generatedSql, setGeneratedSql] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [playgroundSuccess, setPlaygroundSuccess] = useState(false);

  // Simple prompt-to-SQL logic block to demonstrate Yash's selective SELECT-only parsing rules
  const handleSimulateSql = (e: React.FormEvent) => {
    e.preventDefault();
    if (!naturalLanguageInput.trim()) return;

    setIsGenerating(true);
    setGeneratedSql("");
    setPlaygroundSuccess(false);

    // Filter malicious query inputs to demonstrate SELECT-only secure regex rules
    const lowerInput = naturalLanguageInput.toLowerCase();
    const isSecurityViolation = 
      lowerInput.includes("delete") || 
      lowerInput.includes("drop") || 
      lowerInput.includes("truncate") || 
      lowerInput.includes("update") || 
      lowerInput.includes("insert") || 
      lowerInput.includes("alter");

    setTimeout(() => {
      setIsGenerating(false);
      if (isSecurityViolation) {
        setGeneratedSql(
          `-- SECURITY VIOLATION BLOCKED BY MIDDLWARE regex\n-- ERROR: Mutation operations (INSERT/UPDATE/DROP/DELETE) are disabled.\n-- SELECT-only permissions enforced.`
        );
        return;
      }

      // Generate a nice simulated select query
      let query = "SELECT * FROM users";
      
      if (lowerInput.includes("joined") || lowerInput.includes("may")) {
        query += "\nWHERE created_at BETWEEN '2026-05-01' AND '2026-05-31'";
      }
      
      if (lowerInput.includes("active") || lowerInput.includes("subscription")) {
        query += lowerInput.includes("created_at") 
          ? "\n  AND status = 'active'"
          : "\nWHERE status = 'active'";
      }

      if (lowerInput.includes("order") || lowerInput.includes("sort")) {
        query += "\nORDER BY created_at DESC";
      }

      if (lowerInput.includes("limit") || lowerInput.includes("show 10")) {
        query += "\nLIMIT 10;";
      } else {
        query += ";";
      }

      setGeneratedSql(query);
      setPlaygroundSuccess(true);
    }, 900);
  };

  return (
    <section id="projects" className="py-20 bg-[#05060a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            Showcasing real-world enterprise architectures, secure REST gateways, and analytics interfaces.
          </p>
        </div>

        {/* Projects Layout Stack */}
        <div className="space-y-12" id="projects-grid">
          {projectsData.map((project, idx) => {
            const isSqlGen = project.title.includes("SQL");

            return (
              <div
                key={project.title}
                id={`project-${idx}`}
                className="rounded-2xl border border-white/5 bg-slate-900/15 backdrop-blur-md p-6 sm:p-8 hover:border-cyan-500/15 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Specs Side */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Badge Category */}
                    <div className="flex items-center space-x-3.5">
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/45 px-2.5 py-1 rounded-md border border-cyan-500/15">
                        {project.category}
                      </span>
                      <span className="text-slate-600 text-xs font-mono">/</span>
                      <span className="text-[10px] font-mono text-slate-400 font-medium uppercase tracking-wider">
                        Production Ready
                      </span>
                    </div>

                    {/* Headline and Narrative */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Bullet Achievements List */}
                    <ul className="space-y-2 mt-4 text-xs text-slate-400 leading-relaxed font-normal">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start">
                          <span className="text-cyan-400 mr-2.5 font-bold text-[13px] mt-0.5">•</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Micro Tech Tags */}
                    <div className="pt-3">
                      <span className="text-[10px] font-mono text-slate-500 block mb-2 uppercase">Core Stack:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-slate-950/60 border border-white/5 text-[10px] text-slate-400 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Primary Trigger Actions */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-white/5 mt-5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4.5 py-2 rounded-lg bg-slate-950 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-white flex items-center space-x-2"
                        id={`project-github-btn-${idx}`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Custom Interactive Mock-Panel Side */}
                  <div className="lg:col-span-5 h-full">
                    {isSqlGen ? (
                      /* Awesome real interactive SQL generator Simulator! */
                      <div className="rounded-xl border border-white/5 bg-slate-950/45 p-5 flex flex-col justify-between h-full space-y-4" id="project-sql-simulator">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                          <div className="flex items-center space-x-2">
                            <Terminal className="w-4 h-4 text-cyan-400" />
                            <span className="text-[10px] font-mono text-cyan-400 font-medium uppercase tracking-wider">
                              Interactive SQL Middleware Sim
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500">SELECT_ONLY SECURE</span>
                        </div>

                        <form onSubmit={handleSimulateSql} className="space-y-3">
                          <label className="text-[10px] font-mono text-slate-400 block uppercase">
                            Natural Language Input:
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={naturalLanguageInput}
                              onChange={(e) => setNaturalLanguageInput(e.target.value)}
                              className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 pr-10"
                              placeholder="e.g., Get active users from last month"
                            />
                            <button
                              type="submit"
                              disabled={isGenerating}
                              className="absolute right-1.5 top-1.5 h-8 w-8 bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:bg-slate-800 disabled:text-slate-500 rounded-md flex items-center justify-center transition-colors shadow-md"
                              title="Simulate Generation"
                            >
                              {isGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                            </button>
                          </div>
                        </form>

                        {/* Simulated Console Screen */}
                        <div className="p-3 rounded-lg bg-slate-900 font-mono text-[11px] text-slate-300 h-28 overflow-y-auto border border-white/5 whitespace-pre scrollbar-thin">
                          {isGenerating ? (
                            <span className="text-cyan-400 animate-pulse">// Parsing input & applying regex-rules...</span>
                          ) : generatedSql ? (
                            generatedSql
                          ) : (
                            <span className="text-slate-500">// Enter a natural language request & tap play to simulate Yash's SELECT-only regex gateway.</span>
                          )}
                        </div>

                        {/* Security check confirmation indicator */}
                        <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 bg-slate-900/30 p-2 rounded-lg border border-white/5">
                          <ShieldCheck className="w-4.5 h-4.5 text-green-400 stroke-[2.5]" />
                          <span className="uppercase">Regex Validation status: PASSED SELECT_ONLY</span>
                        </div>
                      </div>
                    ) : (
                      /* Eco-Track Dashboard graphic visualizer indicator! */
                      <div className="rounded-xl border border-white/5 bg-slate-950/45 p-5 flex flex-col justify-between h-full space-y-4" id="project-eco-simulator">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3">
                          <div className="flex items-center space-x-2">
                            <FolderGit2 className="w-4 h-4 text-cyan-400" />
                            <span className="text-[10px] font-mono text-cyan-400 font-medium uppercase tracking-wider">
                              Eco-Track Emission Chart Sim
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500">Chart_JS layout</span>
                        </div>

                        {/* Dummy emission metrics chart simulation */}
                        <div className="space-y-3.5">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>Carbon Category Distribution:</span>
                            <span className="text-cyan-400 font-bold">12.4 MT CO2/Yr</span>
                          </div>

                          {/* Interactive Bar Charts representation */}
                          <div className="space-y-2">
                            {/* Transport */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                                <span>TRANSPORTATION (AI SUGGESTED REDUCTION: -20%)</span>
                                <span>45%</span>
                              </div>
                              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                                <div className="bg-cyan-500 h-full rounded-full" style={{ width: "45%" }} />
                              </div>
                            </div>

                            {/* Food */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                                <span>ENERGY & FOOD CONSERVES</span>
                                <span>30%</span>
                              </div>
                              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                                <div className="bg-sky-500 h-full rounded-full" style={{ width: "30%" }} />
                              </div>
                            </div>

                            {/* Waste */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                                <span>RECYCLING & WASTE MINIMIZATION</span>
                                <span>25%</span>
                              </div>
                              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                                <div className="bg-indigo-500 h-full rounded-full" style={{ width: "25%" }} />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Firebase database synchronized status indicator */}
                        <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 bg-slate-900/30 p-2 rounded-lg border border-white/5">
                          <Database className="w-4.5 h-4.5 text-cyan-400" />
                          <span className="uppercase">Firebase DB Sync: ACTIVE [REPLICATION CONNECTED]</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
