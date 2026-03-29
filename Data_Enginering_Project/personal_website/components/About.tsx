import Image from "next/image";
import { assetPath } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="section bg-white py-20">
      <div className="container-max px-4 md:px-8">
        <h2 className="text-4xl font-bold text-earth-900 mb-16 text-center">About Me</h2>

        {/* Profile Section */}
        <div className="relative mb-20">
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Profile Image — public/profile_image.png; next/image respects basePath for GitHub Pages */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-earth-200">
                  <Image
                    src={assetPath("/profile_image.png")}
                    alt="Profile"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold text-earth-900 mb-6">My Journey</h3>
              <p className="text-lg text-earth-700 leading-relaxed mb-6">
                I'm a passionate data engineer and full-stack developer with a love for building innovative solutions.
                My journey started with a curiosity about how things work, which evolved into a career dedicated to
                creating meaningful technology that solves real problems.
              </p>
              <p className="text-lg text-earth-700 leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or enjoying the creative side of development. I believe in continuous learning and pushing boundaries.
              </p>
              <p className="text-lg text-earth-700 leading-relaxed mb-8">
                Incoming Summer Engineering Intern at Snohomish County PUD
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-earth-50 rounded-lg p-4 shadow-sm border border-earth-200">
                  <p className="text-2xl font-bold text-forest-600">4+</p>
                  <p className="text-sm text-earth-600">Years Experience</p>
                </div>
                <div className="bg-earth-50 rounded-lg p-4 shadow-sm border border-earth-200">
                  <p className="text-2xl font-bold text-forest-600">20+</p>
                  <p className="text-sm text-earth-600">Projects Built</p>
                </div>
                <div className="bg-earth-50 rounded-lg p-4 shadow-sm border border-earth-200">
                  <p className="text-2xl font-bold text-forest-600">100%</p>
                  <p className="text-sm text-earth-600">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Hobbies */}
        <div className="bg-earth-50 rounded-xl shadow-sm border border-earth-200 p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-earth-900 mb-8 text-center">My Hobbies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">📖</div>
              <p className="font-semibold text-earth-800">Reading Manga</p>
              <p className="text-sm text-earth-600">1000+ mangas read</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎸</div>
              <p className="font-semibold text-earth-800">Punk Concerts</p>
              <p className="text-sm text-earth-600">Live music & mosh pits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💪</div>
              <p className="font-semibold text-earth-800">Working Out</p>
              <p className="text-sm text-earth-600">Weight lifting and MMA </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌾</div>
              <p className="font-semibold text-earth-800">Gaming</p>
              <p className="text-sm text-earth-600">Stardew Valley and TFT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
