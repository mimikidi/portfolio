import React from "react";
import kidistImg from "../assets/white kid.png";
import { CheckCircle2, Briefcase, Award, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-3">
            Dedicated to Building High-Performing Web Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Profile Photo ── */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Decorative glow behind the card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-3xl rotate-2 scale-105 opacity-20 blur-xl pointer-events-none" />

            <div className="relative w-[280px] sm:w-[320px] bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Photo — natural 3:4 aspect ratio, face centered */}
              <div className="w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={kidistImg}
                  alt="Kidist — Software Engineering Student"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 18%" }}
                />
              </div>

              {/* Name badge below photo */}
              <div className="p-4 text-center border-t border-slate-100 dark:border-slate-700">
                <p className="font-bold text-slate-900 dark:text-white text-base">Kidist</p>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium mt-0.5">
                  Software Engineering Student
                </p>
                <p className="text-slate-400 text-xs mt-0.5 flex items-center justify-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Injibara University
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              I&apos;m Kidist, a software engineering student at Injibara University.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              &ldquo;I want to understand how to build full-stack web applications by
              connecting frontend interfaces, backend APIs, and database storage.&rdquo;
              During the last semester, I actively collaborated with my teammates
              on group assignments.
            </p>

            {/* Skills checklist */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                "Test Code",
                "Prepare Documentation",
                "Gathering Requirements",
                "Best Design",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="pt-4 flex flex-wrap gap-4">
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
