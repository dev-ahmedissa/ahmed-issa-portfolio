import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "portfolio", label: "Portfolio" },
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16 sm:py-20" id="projects">
      <div className="w-[90%] max-w-[1150px] mx-auto">
        <p className="text-center text-xs text-gray-500 tracking-[2px] mb-2.5">
          MY WORK
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-3">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 text-sm max-w-md mx-auto mb-8">
          Real-world applications built with modern technologies and best
          practices.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-[13px] border transition-all duration-300 ${
                filter === f.id
                  ? "bg-[#e8e8e8] text-[#111] border-[#e8e8e8]"
                  : "text-gray-400 border-dark-500 hover:bg-[#e8e8e8] hover:text-[#111] hover:border-[#e8e8e8]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group bg-dark-850 border border-dark-500 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-dark-300"
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-green-400 text-[11px] px-2.5 py-1 rounded-full border border-green-400">
                  Completed
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base font-medium mb-2">{project.title}</h3>
                <p className="text-[13px] text-gray-400 mb-3.5 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-dark-700 border border-dark-500 px-2.5 py-0.5 rounded-full text-[11px] text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
