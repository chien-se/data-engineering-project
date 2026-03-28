import { projects } from "@/lib/config";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section bg-white">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-spirit-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl">
          Showcasing my best work—projects that demonstrate technical depth,
          problem-solving ability, and commitment to quality.
        </p>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border-2 border-spirit-200 hover:border-accent-gold transition-all duration-300"
            >
              {/* Placeholder for project image */}
              <div className="relative h-64 bg-gradient-to-br from-spirit-200 to-spirit-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-spirit-600 font-semibold">Project Image</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white relative z-10">
                <h3 className="text-xl font-bold text-spirit-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-spirit-50 text-spirit-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.link} className="btn-primary text-sm py-2">
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="btn-secondary text-sm py-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-spirit-900 mb-6">
              Other Notable Projects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="card bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-spirit-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-spirit-50 text-spirit-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 md:flex-col">
                    <a href={project.link} className="btn-primary text-sm py-2">
                      View
                    </a>
                    <a
                      href={project.github}
                      className="btn-secondary text-sm py-2"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
