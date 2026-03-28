import { education, experience, socialLinks } from "@/lib/config";

export default function Resume() {
  return (
    <section id="resume" className="section bg-spirit-50">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-spirit-900 mb-4">
          Experience & Education
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl">
          My professional journey built on continuous growth and impactful contributions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-spirit-600 mb-8">
              Highlights
            </h3>

            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.title + job.period} className="card bg-white">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-spirit-900">
                        {job.title}
                      </h4>
                      <p className="text-sm text-accent-gold font-semibold">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-spirit-600 mb-8">
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.school + edu.year} className="card bg-white">
                  <h4 className="text-lg font-bold text-spirit-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-accent-gold font-semibold mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">{edu.year}</p>
                  <p className="text-sm text-gray-600">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            View my complete resume and connect on LinkedIn
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/resume.pdf" className="btn-primary">
              Download Resume
            </a>
            <a href={socialLinks.linkedin} className="btn-secondary">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
