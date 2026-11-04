import projects from "../data/projects";

function Projects() {
  return (
    <section className="py-10 pb-16" id="projects">
      <div className="w-[90%] max-w-[1100px] mx-auto">
        <h2 className="text-2xl sm:text-[28px] font-semibold mb-8">
          My Projects
        </h2>

        <div className="mb-10">
          <h3 className="text-base sm:text-lg text-gray-400 mb-5">
            Development Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-dark-800 rounded-xl overflow-hidden block transition-transform duration-300 hover:-translate-y-1.5 group"
              >
                <div className="h-44 bg-dark-600 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <h4 className="px-4 pt-4 pb-1 text-[15px] text-gray-300">
                  {project.title}
                </h4>
                <p className="px-4 pb-4 text-xs text-gray-500">{project.tech}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
