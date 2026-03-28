import { skillsData } from "@/lib/config";

export default function Skills() {
  const skillCategories = skillsData;

  return (
    <section id="skills" className="section bg-spirit-50">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-spirit-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl">
          A diverse toolkit built through years of hands-on experience and
          continuous learning. Each skill represents a commitment to mastery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="card bg-white border-t-4 border-accent-gold"
            >
              <h3 className="text-xl font-semibold text-spirit-900 mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
