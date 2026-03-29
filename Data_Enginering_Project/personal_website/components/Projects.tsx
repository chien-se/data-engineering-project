import { projects } from "@/lib/config";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section bg-stone-50 py-20">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-stone-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-stone-600 mb-12 text-lg max-w-2xl font-medium">
          Showcasing my best work — projects that demonstrate technical depth,
          problem-solving ability, and commitment to quality.
        </p>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-stone-200 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-600 mb-4 text-sm line-clamp-2 font-medium flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Single View Project link - stays at bottom */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 self-start"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-stone-900 mb-6">
              Other Notable Projects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-l-amber-600"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-stone-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-stone-600 text-sm mb-3 font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 whitespace-nowrap"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
