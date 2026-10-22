import React from "react";
import image1 from "../assets/image1.png";
import { ExternalLink, GitBranch } from "lucide-react";

export default function Projects() {
  // 1. Project Data Array with Individual Links & Details
  const projectList = [
    {
      title: "SaaS Analytics Dashboard",
      desc: "A real-time metrics dashboard featuring dynamic charts, role authentication, and export utilities.",
      tags: ["React", "Tailwind", "Node.js"],
      liveLink: "https://your-saas-demo.com",
      codeLink: "https://github.com/yourusername/saas-dashboard",
    },
    {
      title: "E-Commerce Storefront",
      desc: "Fully featured shopping portal with cart management, secure stripe checkout, and admin catalog controls.",
      tags: ["Tailwind", "React", "JavaScript"],
      liveLink: "https://your-ecommerce-demo.com",
      codeLink: "https://github.com/yourusername/ecommerce-store",
    },
    {
      title: "AI Prompt Generator",
      desc: "An intelligent AI assistant platform leveraging LLM integrations to create contextual marketing copy.",
      tags: ["React", "OpenAI API", "Tailwind"],
      liveLink: "https://your-ai-prompt-demo.com",
      codeLink: "https://github.com/yourusername/ai-prompt-generator",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            Recent Projects
          </h2>
        </div>

        {/* 2. Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Image Banner */}
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
                  <img
                    src={image1}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* 3. Dynamic Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Action Buttons (Live Demo & Code Links) */}
              <div className="px-6 pb-6 pt-4 flex items-center gap-4 border-t border-slate-200/60">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  <GitBranch className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
