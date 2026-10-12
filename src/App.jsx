import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-36 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-600 border border-indigo-100 mb-6">
          ✨ Available for freelance & full-time roles
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-slate-900">
          Crafting Digital Experiences with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Precision
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-slate-600">
          Hi, I&apos;m Alex — a Full-Stack Software Engineer building robust web
          applications and intuitive user interfaces.
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Alex.Dev. All rights reserved.</div>
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
