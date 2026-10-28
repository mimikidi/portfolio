import React from "react";
import { Code2, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-white group">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                kidist<span className="text-indigo-400">.dev</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Software engineering student at Injibara University passionate about modern web technologies, test-driven development, and high-impact digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Injibara, Ethiopia
              </span>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects & Demos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Project & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Featured Interactive Demo
            </h4>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white text-sm">
                  Glow Beauty Store
                </span>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full">
                  Interactive
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Experience full catalog filtering, search, and dynamic shopping cart logic inside the Projects section.
              </p>
              <a
                href="#projects"
                className="inline-block text-xs font-semibold text-indigo-400 hover:text-indigo-300 pt-1"
              >
                Launch Demo ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Kidist. Built with React & Tailwind CSS. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
