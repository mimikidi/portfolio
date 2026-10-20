import React from "react";
import {
  Layout,
  Server,
  Database,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Crafting responsive, dynamic, and reactive user interfaces using React, Next.js, and Tailwind CSS.",
      icon: Layout,
    },
    {
      title: "Backend Architecture",
      desc: "Building secure, scalable RESTful and GraphQL APIs utilizing Node.js, Express, and Python.",
      icon: Server,
    },
    {
      title: "Fullstack Solutions",
      desc: "End-to-end development from database design and cloud provisioning to production deployment.",
      icon: Database,
    }, 
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
            My Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">
            What I Can Do For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-indigo-500/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
