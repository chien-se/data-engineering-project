import { personalInfo, socialLinks } from "@/lib/config";
import { assetPath } from "@/lib/site";

const githubHandle =
  socialLinks.github.split("/").filter(Boolean).pop() ?? "GitHub";

export default function Contact() {
  return (
    <section id="contact" className="section bg-earth-900 text-white py-20">
      <div className="container-max px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-earth-300 mb-12 font-medium leading-relaxed">
            I'm always interested in discussing new opportunities, collaboration, creative projects, and innovative ideas.
            Feel free to reach out — I'd love to connect!
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-xl bg-earth-800 border border-earth-700 hover:border-earth-600 transition-all">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold mb-3 text-lg text-white">Email</h3>
              <a
                href={socialLinks.email}
                className="text-earth-300 hover:text-white transition font-semibold text-sm break-words"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="p-8 rounded-xl bg-earth-800 border border-earth-700 hover:border-earth-600 transition-all">
              <div className="text-4xl mb-4">🐙</div>
              <h3 className="font-bold mb-3 text-lg text-white">GitHub</h3>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-300 hover:text-white transition font-semibold"
              >
                @{githubHandle}
              </a>
            </div>

            <div className="p-8 rounded-xl bg-earth-800 border border-earth-700 hover:border-earth-600 transition-all">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold mb-3 text-lg text-white">LinkedIn</h3>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-earth-300 hover:text-white transition font-semibold"
              >
                My Profile
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a href={socialLinks.email} className="px-6 py-3 bg-forest-600 hover:bg-forest-500 text-white rounded-lg font-bold shadow-lg transition-colors inline-block">
              Send me an Email
            </a>
            <a href={assetPath("/resume.pdf")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-earth-500 text-white rounded-lg font-bold hover:bg-earth-800 transition-colors inline-block">
              View Resume
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-earth-400 text-base font-medium max-w-xl mx-auto leading-relaxed">
            Whether you have an opportunity, want to collaborate, or just chat about tech — I'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
