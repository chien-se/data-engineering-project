import { personalInfo, socialLinks } from "@/lib/config";

const githubHandle =
  socialLinks.github.split("/").filter(Boolean).pop() ?? "GitHub";

export default function Contact() {
  return (
    <section id="contact" className="section bg-gradient-to-br from-spirit-900 to-spirit-800 text-white">
      <div className="container-max px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
          <p className="text-xl text-gray-200 mb-8">
            I'm always interested in discussing new opportunities, collaboration,
            and creative projects. Feel free to reach out!
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur">
              <div className="text-accent-gold mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href={socialLinks.email}
                className="text-gray-200 hover:accent-text transition"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur">
              <div className="text-accent-gold mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:accent-text transition"
              >
                @{githubHandle}
              </a>
            </div>

            <div className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur">
              <div className="text-accent-gold mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.047-8.733 0-9.65h3.554v1.366c.43-.658 1.191-1.591 2.901-1.591 2.12 0 3.71 1.385 3.71 4.36v5.515zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.6 11.597H3.738V9.557h3.199v10.895zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:accent-text transition"
              >
                Profile
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={socialLinks.email} className="btn-primary bg-accent-gold hover:bg-yellow-500 text-spirit-900">
              Send me an Email
            </a>
            <a href="/resume.pdf" className="btn-secondary border-white text-white hover:bg-white hover:text-spirit-900">
              Download Resume
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-gray-300 text-sm mt-8">
            Whether you have an opportunity, want to collaborate, or just chat about
            tech—I'd love to hear from you. Let's create something meaningful together.
          </p>
        </div>
      </div>
    </section>
  );
}
