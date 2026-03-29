import { education, socialLinks } from "@/lib/config";
import { assetPath } from "@/lib/site";

export default function Resume() {
  const getSchoolLink = (school: string) => {
    if (school.includes("Everett Community College")) {
      return "https://lynnwoodtimes.com/2024/06/14/everett-community-college/";
    }
    if (school.includes("University of Washington")) {
      return assetPath("/UWUnofficialTranscript.pdf");
    }
    return null;
  };

  return (
    <section id="resume" className="section bg-white py-20">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-earth-900 mb-4">
          Education
        </h2>
        <p className="text-earth-600 mb-12 text-lg max-w-2xl font-medium">
          My academic journey built on continuous growth and dedication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => {
            const schoolLink = getSchoolLink(edu.school);
            return (
              <div key={edu.school + edu.year} className="bg-earth-50 rounded-lg p-6 border-l-4 border-forest-500">
                <h4 className="text-lg font-bold text-earth-900 mb-2">
                  {edu.degree}
                </h4>
                {schoolLink ? (
                  <a
                    href={schoolLink}
                    target={schoolLink.startsWith("http") ? "_blank" : undefined}
                    rel={schoolLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm bg-forest-50 text-forest-700 font-bold px-3 py-1 rounded-full inline-block mb-2 hover:bg-forest-100 transition"
                  >
                    {edu.school}
                  </a>
                ) : (
                  <p className="text-sm bg-forest-50 text-forest-700 font-bold px-3 py-1 rounded-full inline-block mb-2">
                    {edu.school}
                  </p>
                )}
                <p className="text-xs font-bold text-earth-600 bg-earth-100 px-3 py-2 rounded-full inline-block mb-3">
                  {edu.year}
                </p>
                <p className="text-earth-600 text-sm font-medium">{edu.details}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-earth-600 mb-6 text-lg font-semibold">
            View my complete resume or connect on LinkedIn
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={assetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
