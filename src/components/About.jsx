import React from "react";
import image from '../assets/kidist.png';
import { CheckCircle2, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Dedicated to Building High-Performing Web Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[400px] bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center text-white text-3xl font-bold">
              <img src={image} alt=" " />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              I&apos;m Kidist, a Full-Stack Engineer based in San Francisco.
            </h3>
            <p className="text-slate-600 leading-relaxed">
              I specialize in building scalable software solutions, turning
              complex problems into intuitive, high-performance web
              applications. With over 5 years of commercial software engineering
              experience, I bridge design and engineering seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700 font-medium">
                  Clean Code Standards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700 font-medium">
                  Modern Tech Stack
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700 font-medium">
                  Responsive Layouts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="text-slate-700 font-medium">
                  Fast Performance
                </span>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-bold text-slate-900">5+ Years</div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-sm">
                <Award className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-bold text-slate-900">40+ Projects</div>
                  <div className="text-xs text-slate-500">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
