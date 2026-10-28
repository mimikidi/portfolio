import React from "react";
import { ArrowRight, Sparkles, Mail, FileCode2, Terminal } from "lucide-react";
import kidistImg from "../assets/kidist.png";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-slate-50">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Software Engineering Student • Injibara University</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Building Modern, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                High-Performance
              </span>{" "}
              Web Applications.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I&apos;m <span className="font-semibold text-slate-900">Kidist</span>. A passionate software engineering student specializing in React, responsive user interfaces, modular architecture, and end-to-end fullstack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Express", "REST APIs", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-sm hover:border-indigo-300 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing Card Decorative Shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl transform rotate-2 scale-105 opacity-25 blur-lg" />

              <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Photo frame */}
                <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 relative group">
                  <img
                    src={kidistImg}
                    alt="Kidist - Software Engineer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating bottom badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-bold text-lg">Kidist</p>
                    <p className="text-xs text-indigo-200">Software Engineering Student</p>
                    <p className="text-[11px] text-slate-300">Injibara University</p>
                  </div>
                </div>

                {/* Quick Stats Grid under photo */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-center">
                    <span className="block text-indigo-600 font-bold text-base">Active</span>
                    <span className="text-[11px] text-slate-600 font-medium">Collaborations</span>
                  </div>
                  <div className="bg-purple-50/70 p-3 rounded-xl border border-purple-100 text-center">
                    <span className="block text-purple-600 font-bold text-base">Full-Stack</span>
                    <span className="text-[11px] text-slate-600 font-medium">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
