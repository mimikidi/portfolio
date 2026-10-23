import "./Projects.css";
import { ExternalLink, GitBranch } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Glow Beauty Store",
    description:
      "A modern beauty store for skincare, makeup, and beauty products, with a responsive layout.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, projects, and contact information.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    id: 3,
    title: "Online Shopping App",
    description:
      "A simple shopping interface with product cards, categories, and a clean user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "CSS", "Vite"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <p className="projects-subtitle">MY WORK</p>

        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>

        <p className="projects-description">
          Here are some projects I have created using modern web technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <GitBranch size={17} />
                    GitHub
                  </a>

                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
