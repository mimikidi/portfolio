import React, { useState } from "react";
import { Layout, Server, Database, Code2, Sparkles, Check } from "lucide-react";
import { skillCategories } from "../data/skillsData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const iconMap = {
    Layout: Layout,
    Server: Server,
    Database: Database,
    Code2: Code2,
  };

  const displayedCategories =
    selectedCategory === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.title.includes(selectedCategory));

  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            My Skills & Technologies
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Proficiencies across modern web frameworks, server architectures, databases, and development tooling.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["All", "Frontend", "Backend", "Databases", "Practices"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedCategory(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === filter
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/70 hover:bg-indigo-100/80 text-indigo-700 text-xs font-medium border border-indigo-100/60 transition"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
