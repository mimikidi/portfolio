import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'about' | 'projects' | 'skills' | 'contact' | 'services'

  // Scroll to section when tab is changed or stay in full view
  const handleNavigate = (tabId) => {
    setActiveTab("all");
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-indigo-600 selection:text-white flex flex-col">
      {/* Global Navigation Bar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections - Rearranged by About, Project, Skills, Contact */}
      <main className="flex-1">
        {/* 1. Home / Hero Landing Section */}
        <Hero onExploreProjects={() => handleNavigate("projects")} onContact={() => handleNavigate("contact")} />

        {/* 2. About Me Page / Section */}
        <About onExploreWork={() => handleNavigate("projects")} />

        {/* 3. Projects Page / Section (Features Cosmetic Store front and center!) */}
        <Projects />

        {/* 4. Skills Page / Section */}
        <Skills />

        {/* 5. Services Section */}
        <Services onContact={() => handleNavigate("contact")} />

        {/* 6. Contact Page / Section */}
        <Contact />
      </main>

      {/* Global Developer Portfolio Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
