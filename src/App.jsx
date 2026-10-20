import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ArrowRight } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        darkMode
          ? "bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white"
          : "bg-white text-slate-900 selection:bg-indigo-500 selection:text-white"
      }`}
    >
      {/* Navigation Bar with Theme Toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-36 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border ${
            darkMode
              ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
              : "bg-indigo-50 text-indigo-600 border-indigo-100"
          }`}
        >
          ✨ Available for freelance & full-time roles
        </div>
        <h1
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}
        >
          Future-focused software developer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Precision
          </span>
        </h1>
        <p
          className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}
        >
           building scalable
          full-stack web applications with modern frameworks and precision.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all ${
              darkMode
                ? "text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800"
                : "text-slate-700 bg-slate-100 hover:bg-slate-200"
            }`}
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Page Sections (All supporting dark/light mode dynamically via props or structural classes) */}
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      {/* Footer */}
      <footer
        className={`py-12 text-center text-sm border-t ${
          darkMode
            ? "bg-slate-900 border-slate-800 text-slate-400"
            : "bg-slate-900 text-slate-300 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} kidist.Dev. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
