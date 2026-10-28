import React from "react";
import { Layout, Server, Database, CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Crafting intuitive, responsive, and fluid user interfaces using React.js, modern JavaScript, Tailwind CSS, and component-based design.",
      icon: Layout,
      tags: ["React.js", "Tailwind CSS", "Responsive UI", "Single Page Apps"],
    },
    {
      title: "Backend Architecture & APIs",
      desc: "Building structured, secure, and performant RESTful APIs and server-side endpoints using Node.js, Express, and Python.",
      icon: Server,
      tags: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Fullstack Web Solutions",
      desc: "End-to-end web application development connecting robust databases (MongoDB, PostgreSQL) with interactive frontends and cloud deployment.",
      icon: Database,
      tags: ["Full-Stack", "MongoDB", "PostgreSQL", "Vite / Vercel"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-xs uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            My Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            What I Can Deliver For You
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Providing reliable engineering solutions tailored to modern product and software standards.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-1">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-medium"
                    >
                      {tag}
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
