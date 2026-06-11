import { Award, CheckCircle2, AwardIcon, ExternalLink } from "lucide-react";
import { certificationsData } from "../data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-[#05060a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            Professional Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Certifications
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            Formal technical assessments completed during my academic undergraduate career.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="certifications-matrix">
          {certificationsData.map((cert) => (
            <div
              key={cert.title}
              id={`cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`rounded-xl border border-white/5 bg-gradient-to-tr p-5 flex items-start space-x-4 hover:border-cyan-500/15 duration-300 transition-all ${cert.badgeColor} group`}
            >
              {/* Badge Icon Accent */}
              <div className="p-3.5 rounded-lg bg-slate-950/60 border border-white/5 group-hover:border-cyan-500/20 duration-300 transition-all mt-0.5">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Title & Issuer Details */}
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Verified Assessment
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.year}</span>
                </div>

                <div className="flex items-center space-x-1.5 pt-2.5 text-[10px] font-mono text-green-400 font-medium uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Syllabus Compliance Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
