import React from "react";
import { CheckCircle2, Briefcase, Award } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Dedicated to Building High-Performing Web Applications
          </h2>
        </div>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Gradient Avatar — no image dependency */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-[280px] h-[320px] sm:w-[320px] sm:h-[370px] bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-center gap-3">
              {/* Initials avatar */}
              <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center text-white text-4xl font-extrabold tracking-tight select-none">
                KJ
              </div>
              <span className="text-white/90 text-sm font-semibold tracking-wide">Kidist</span>
              <span className="text-white/60 text-xs">Software Engineer</span>
              {/* Decorative circles */}
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/10 border border-white/20" />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 border border-white/20" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              I&apos;m Kidist, a software engineering student at Injibara University.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              &ldquo;I want to understand how to build full-stack web applications by connecting frontend interfaces, backend APIs, and database storage.&rdquo; During the last semester, I actively collaborated with my teammates on group assignments.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Test Code</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  Prepare Documentation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  Gathering Requirements
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">Best Design</span>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Active</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Group Work</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
