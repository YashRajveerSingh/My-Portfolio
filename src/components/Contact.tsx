import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Github, Linkedin, Code } from "lucide-react";
import { candidateDetails } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/40 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/10">
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3.5 tracking-tight">
            Contact Information
          </h2>
          <p className="text-slate-400 mt-3 text-xs sm:text-sm font-normal">
            Whether for summer internships, graduate recruitment, or algorithmic projects, reach out!
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-coordinates">
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-display font-medium text-white tracking-wide">
                Reach out directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                I am actively seeking software placements starting summer 2026 / 2027. Send a message, copy coordinates, or connect on LinkedIn.
              </p>

              {/* Coordinates List Stack */}
              <div className="space-y-4">
                {/* Email address */}
                <div className="p-4 rounded-xl bg-slate-900/35 border border-white/5 flex items-start space-x-3.5 hover:border-cyan-500/2 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email address</h4>
                    <a
                      href={`mailto:${candidateDetails.email}`}
                      className="text-white hover:text-cyan-400 text-xs sm:text-sm font-semibold transition-colors mt-0.5 block"
                    >
                      {candidateDetails.email}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-4 rounded-xl bg-slate-900/35 border border-white/5 flex items-start space-x-3.5 hover:border-cyan-500/2 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Phone & WhatsApp</h4>
                    <a
                      href={`tel:${candidateDetails.phone.replace(/\s+/g, "")}`}
                      className="text-white hover:text-cyan-400 text-xs sm:text-sm font-semibold transition-colors mt-0.5 block font-mono"
                    >
                      {candidateDetails.phone}
                    </a>
                  </div>
                </div>

                {/* Geographic base */}
                <div className="p-4 rounded-xl bg-slate-900/35 border border-white/5 flex items-start space-x-3.5 hover:border-cyan-500/2 transition-colors">
                  <div className="p-2.5 rounded-lg bg-cyan-950/45 border border-cyan-500/20 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location ORIGIN</h4>
                    <span className="text-white text-xs sm:text-sm font-semibold mt-0.5 block">
                      {candidateDetails.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Footer Social Anchors */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest">Professional Links:</span>
              <div className="flex gap-4">
                <a
                  href={candidateDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
                  id="contact-linkedin-link"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={candidateDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
                  id="contact-github-link"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={candidateDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center space-x-1.5"
                  id="contact-leetcode-link"
                >
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form panel */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="rounded-2xl border border-white/5 bg-slate-900/15 backdrop-blur-md p-6 sm:p-8 hover:border-cyan-500/10 transition-all duration-300 shadow-xl h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-400 block uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/5 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500/40 transition-colors"
                      placeholder="e.g. Hiring Manager"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-400 block uppercase">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/5 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500/40 transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-400 block uppercase">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-white/5 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500/40 transition-colors"
                    placeholder="e.g. Summer internship interview details"
                  />
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-slate-400 block uppercase">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-white/5 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-cyan-500/40 transition-colors resize-none"
                    placeholder="Provide details about opportunities, teams, or scopes..."
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSending || success}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:opacity-60"
                  id="contact-submit-btn"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
                      <span>Transmitted successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Transmission</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Indicator Feedback */}
              {success && (
                <div className="p-3 bg-green-950/20 border border-green-500/20 rounded-lg flex items-center space-x-2.5 mt-4 text-[10px] font-mono text-green-400 uppercase animate-fade-in">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                  <span>Simulated message saved locally. Yash will receive this at yashrajveersingh936@gmail.com</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
