import React, { useState } from "react";
import {
  ExternalLink,
  GitBranch,
  Sparkles,
  Layers,
  X,
  Play,
  CheckCircle,
} from "lucide-react";
import { projectsData } from "../data/projectsData";
import CosmeticStore from "./CosmeticStore";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'inline-cosmetic'
  const [showCosmeticModal, setShowCosmeticModal] = useState(false);

  const categories = ["All", "E-Commerce", "Frontend", "Full Stack"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="projects-section-wrapper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            Featured Portfolio Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Projects & Interactive Applications
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Explore my recent engineering builds, responsive frontend interfaces,
            and interactive demo applications.
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (viewMode === "inline-cosmetic") setViewMode("grid");
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat && viewMode === "grid"
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Live Demo Pill Toggle */}
          <div className="flex items-center gap-2 bg-indigo-50/70 p-1 rounded-xl border border-indigo-100">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === "grid"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              All Projects
            </button>

            <button
              onClick={() => setViewMode("inline-cosmetic")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === "inline-cosmetic"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-indigo-700 hover:bg-indigo-100/60"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Live Cosmetic Store Demo
            </button>
          </div>
        </div>

        {/* View Mode: Inline Cosmetic Demo */}
        {viewMode === "inline-cosmetic" ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white px-5 py-3 rounded-xl border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-800">
                  Interactive Preview: Glow Beauty Store Project
                </span>
                <span className="text-xs text-slate-500 hidden md:inline">
                  (Test live catalog search, category filters, and cart logic)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCosmeticModal(true)}
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-800 px-2.5 py-1 rounded bg-indigo-50 transition"
                >
                  Open Fullscreen
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded bg-slate-100 transition"
                >
                  <X className="w-3.5 h-3.5" /> Close Demo
                </button>
              </div>
            </div>

            {/* Embedded Live Cosmetic Store Component */}
            <CosmeticStore onClose={() => setViewMode("grid")} isModal={false} />
          </div>
        ) : (
          /* View Mode: Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card-container">
                {/* Media thumbnail */}
                <div className="project-card-media group">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-indigo-700 font-bold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                    {project.badge}
                  </div>

                  {project.isCosmeticStore && (
                    <button
                      onClick={() => setShowCosmeticModal(true)}
                      className="project-demo-overlay-btn"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      Launch Live Store Demo
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
                    <span className="text-indigo-600 font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  {project.highlights && (
                    <div className="mb-4 space-y-1.5 pt-2 border-t border-slate-100">
                      {project.highlights.slice(0, 2).map((hl, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
                    >
                      <GitBranch className="w-4 h-4" />
                      Code Repository
                    </a>

                    {project.isCosmeticStore ? (
                      <button
                        onClick={() => setShowCosmeticModal(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-600/20 transition active:scale-95"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Live Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target={project.demo.startsWith("#") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Fullscreen Interactive Modal for Glow Beauty Store */}
        {showCosmeticModal && (
          <div
            className="cosmetic-modal-backdrop"
            onClick={() => setShowCosmeticModal(false)}
          >
            <div
              className="cosmetic-modal-window"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Control Bar */}
              <div className="sticky top-0 z-50 flex items-center justify-between bg-slate-900 text-white px-5 py-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold tracking-wide uppercase">
                    Interactive Project Demo: Glow Beauty Store
                  </span>
                </div>

                <button
                  onClick={() => setShowCosmeticModal(false)}
                  className="flex items-center gap-1 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition"
                >
                  <X className="w-4 h-4" /> Close Demo
                </button>
              </div>

              {/* Store Component */}
              <CosmeticStore
                onClose={() => setShowCosmeticModal(false)}
                isModal={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
