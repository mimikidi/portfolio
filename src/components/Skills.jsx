import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "HTML5 / CSS3",
         ,
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "REST APIs",
        "GraphQL",
        
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Git & GitHub",
        "Docker",
        "Vercel / AWS",
        "Webpack / Vite",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            My Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
