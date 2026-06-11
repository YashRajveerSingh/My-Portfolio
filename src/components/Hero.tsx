import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Code, Calendar, MapPin, Mail, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { candidateDetails } from "../data";

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);

  const roles = candidateDetails.roles;
  const PERIOD = 150;
  const DELETING_PERIOD = 75;
  const WAIT_TIME = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, DELETING_PERIOD);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentFullText.slice(0, prev.length + 1));
      }, PERIOD);
    }

    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), WAIT_TIME);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateDetails.email);
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#05060a]"
    >
      {/* Background Neon Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-900/15 blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-blue-900/15 blur-[80px] sm:blur-[110px] animate-pulse [animation-delay:2s]" />
        
        {/* Particle Overlay (CSS Grid) */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Meta Description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" id="hero-info-panel">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/45 border border-cyan-500/20 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-400 uppercase">
                Open for Summer Internship & Placements
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
                Hey, I'm <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-sm select-all">
                  Yash Rajveer Singh
                </span>
              </h1>
              
              <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl font-mono text-slate-300 font-medium">
                  {displayedText}
                </span>
                <span className="w-1.5 h-6 sm:h-7 bg-cyan-400 ml-1.5 animate-pulse" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              {candidateDetails.tagline} Focused on structured system architecture, optimizing datastores, and contributing to reliable corporate stacks.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-ctas"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/10 border border-cyan-400/20"
                id="hero-cta-projects"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                id="hero-cta-resume"
              >
                <Download className="w-4.5 h-4.5" />
                <span>View Credentials</span>
              </button>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6 flex items-center justify-center lg:justify-start space-x-4"
              id="hero-social-row"
            >
              <div className="text-xs font-mono text-slate-500 tracking-wider uppercase">Connect:</div>
              <div className="flex space-x-3">
                <a
                  href={candidateDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all duration-300 flex items-center justify-center group"
                  id="hero-social-linkedin"
                >
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={candidateDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all duration-300 flex items-center justify-center group"
                  id="hero-social-github"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href={candidateDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-400 transition-all duration-300 flex items-center justify-center group"
                  id="hero-social-leetcode"
                >
                  <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Glass Card Code Presentation */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] relative mt-4 lg:mt-0" id="hero-graphic-panel">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute inset-0 rounded-2xl glass-card p-5 sm:p-6 flex flex-col justify-between border border-cyan-500/10 shadow-3xl shadow-cyan-950/20 lg:scale-105"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider">Candidate.java</div>
                <div className="w-[10px]" />
              </div>

              {/* Code Script Representation */}
              <div className="flex-1 font-mono text-xs overflow-y-auto pt-4 space-y-2 text-slate-300 whitespace-pre scrollbar-thin">
                <div><span className="text-cyan-400">package</span> student.placement;</div>
                <div className="text-slate-500 font-light">// Pre-final year placement record</div>
                <div><span className="text-sky-400">public class</span> <span className="text-yellow-400">YashRajfeer</span> &#123;</div>
                <div className="pl-4"><span className="text-sky-400">private String</span> name = <span className="text-green-300">"Yash Rajveer Singh"</span>;</div>
                <div className="pl-4"><span className="text-sky-400">private String</span> target = <span className="text-green-300">"Software Engineer"</span>;</div>
                <div className="pl-4"><span className="text-sky-400">private Double</span> cgpa = <span className="text-yellow-300">8.09</span>;</div>
                <div className="pl-4"><span className="text-sky-400">private String[]</span> skills = &#123;<span className="text-green-300">"Java"</span>, <span className="text-green-300">"Spring Boot"</span>, <span className="text-green-300">"React"</span>&#125;;</div>
                <div className="pl-4"><span className="text-sky-400">private int</span> leetCodeSolved = <span className="text-cyan-300">450</span>;</div>
                <div className="pl-4"><span className="text-sky-400">private boolean</span> sihParticipant = <span className="text-cyan-300">true</span>;</div>
                <div className="text-slate-500 font-light pl-4">// Compiles successfully under high stress environments</div>
                <div className="pl-4"><span className="text-sky-400">public void</span> <span className="text-indigo-400">executeTask</span>() &#123;</div>
                <div className="pl-8"><span className="text-cyan-400">System</span>.out.<span className="text-indigo-400">println</span>(<span className="text-green-300">"Solving real-world problems efficiently."</span>);</div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Bottom Console Output Bar */}
              <div className="border-t border-white/5 pt-3.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-500">▶ run main</span>
                <span className="text-green-400">BUILD SUCCESSFUL</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* View Credentials / Quick Resume Preview modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-xl p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <h3 className="font-display font-bold text-lg text-white">Yash's Digital Resume Meta</h3>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-slate-950/40 rounded-lg text-xs space-y-1 text-slate-300 font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1 mb-2"><span className="text-cyan-400">ATTRIBUTE</span><span className="text-cyan-400">VALUE</span></div>
                  <div className="flex justify-between"><span>Placement CGPA</span><span className="text-white font-medium">8.09 / 10.0</span></div>
                  <div className="flex justify-between"><span>LeetCode Metrics</span><span className="text-yellow-400 font-medium">450+ Solved</span></div>
                  <div className="flex justify-between"><span>SIH Status</span><span className="text-cyan-400 font-medium font-bold">2025 Participant</span></div>
                  <div className="flex justify-between"><span>Location</span><span className="text-white">Gorakhpur, UP</span></div>
                  <div className="flex justify-between"><span>Contact Email</span><span className="text-sky-400">yashrajveersingh936@gmail.com</span></div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Core Highlights</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Certified Programming Using Java by <strong>Infosys Springboard</strong> (2026).</li>
                    <li>Achieved top tier <strong>5★ SQL rating</strong> on HackerRank (2025).</li>
                    <li>Experience building full stack apps with Spring Boot, Node.js, and React.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 mt-6 border-t border-white/5 pt-4">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center space-x-1.5 rounded-lg hover:bg-slate-800 border border-transparent hover:border-white/5"
                >
                  {resumeCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Copied Email!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${candidateDetails.email}`}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center space-x-1"
                >
                  <span>Email Direct</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
