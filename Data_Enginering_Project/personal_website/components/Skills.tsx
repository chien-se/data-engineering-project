import { skillsData } from "@/lib/config";

export default function Skills() {
  const skillCategories = skillsData;

  const colors = [
    { border: "border-forest-500", dot: "bg-forest-500" },
    { border: "border-earth-500", dot: "bg-earth-500" },
    { border: "border-sky-500", dot: "bg-sky-500" },
    { border: "border-forest-400", dot: "bg-forest-400" },
  ];

  return (
    <section id="skills" className="section bg-earth-50 py-20">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-earth-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-earth-600 mb-12 text-lg max-w-2xl font-medium">
          A diverse toolkit built through hands-on experience and
          continuous learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={category.category}
                className={`bg-white rounded-lg p-6 border-t-4 ${color.border} shadow-sm`}
              >
                <h3 className="text-xl font-semibold text-earth-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-earth-700 font-medium"
                    >
                      <span className={`w-2 h-2 ${color.dot} rounded-full`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
