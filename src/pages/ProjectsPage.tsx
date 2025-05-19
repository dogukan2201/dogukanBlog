import React, { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { projects } from "../data/projects";

const ProjectsPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState<string>("Tümü");

  const categories = [
    "Tümü",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "Tümü"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="animate-fadeIn">
      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">Projeler</h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Son çalışmalarım, kişisel projelerim ve açık kaynak katkılarımın bir
            koleksiyonu.
          </p>
        </div>
      </section>

      <section
        className={`py-8 px-4 sm:px-6 lg:px-8 rounded-xl ${
          darkMode ? "bg-slate-800" : "bg-gray-50"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-slate-700 text-gray-300 hover:bg-slate-600"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-12 px-4 sm:px-6 lg:px-8 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode ? "bg-slate-800" : "bg-white border border-gray-200"
                }`}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode ? "bg-slate-900/80" : "bg-white/80"
                    }`}
                  >
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        aria-label="Canlı Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full ${
                          darkMode
                            ? "bg-slate-700 text-white hover:bg-slate-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        } transition-colors`}
                        aria-label="GitHub Deposu"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? "bg-slate-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p
                    className={`mb-4 line-clamp-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center text-xs px-2 py-1 rounded-md ${
                          darkMode
                            ? "bg-slate-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Code size={12} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div
              className={`text-center py-16 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p className="text-xl">Bu kategoride proje bulunamadı.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
