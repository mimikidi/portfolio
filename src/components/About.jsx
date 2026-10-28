import React from "react";
import image from "../assets/kidist.png";
import {
  CheckCircle2,
  Award,
  Briefcase,
  GraduationCap,
  FileCheck,
  Code2,
  Users,
} from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Requirement Gathering", desc: "Analyzing project scopes & user requirements" },
    { title: "Intuitive UI/UX Design", desc: "Creating modern, responsive user experiences" },
    { title: "Code Testing & QA", desc: "Verifying logic, reliability, and edge cases" },
    { title: "Technical Documentation", desc: "Writing clean specifications and reports" },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Dedicated to Building High-Performing Web Applications
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Merging strong computer science foundations with modern frontend & backend web technologies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo / Card visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-72 sm:w-80 h-96 sm:h-[420px] bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 rounded-3xl p-1 shadow-xl overflow-hidden">
                <img
                  src={image}
                  alt="Kidist - Injibara University"
                  className="w-full h-full object-cover object-top rounded-[22px]"
                />
              </div>

              {/* Floating highlight badge */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Injibara University</div>
                  <div className="text-xs text-slate-500">Software Engineering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              I&apos;m Kidist, a software engineering student at Injibara University.
            </h3>

            <p className="text-slate-600 leading-relaxed text-base">
              I am dedicated to building responsive, dependable software solutions. Through rigorous university coursework, team projects, and hands-on application development, I have developed a strong discipline in the complete software engineering lifecycle—from requirements elicitation to system architecture, user interface crafting, and rigorous code testing.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-800 font-semibold text-sm">
                      {item.title}
                    </span>
                    <span className="text-xs text-slate-500">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Metric / Experience Cards */}
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Active Collaborator</div>
                  <div className="text-xs text-slate-500">Software Engineering Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl border border-slate-200 shadow-sm flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Team Work & Leadership</div>
                  <div className="text-xs text-slate-500">Group Deliverables & Demos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
