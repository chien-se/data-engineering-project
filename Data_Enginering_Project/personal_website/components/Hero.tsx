import Link from "next/link";
import { personalInfo, stats } from "@/lib/config";

export default function Hero() {
  const firstName = personalInfo.name.split(" ")[0];

  return (
    <section className="section bg-earth-50 min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Subtle nature-inspired background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-100 rounded-full translate-y-1/2 -translate-x-1/3 opacity-50"></div>
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-earth-200 rounded-full opacity-30"></div>

      <div className="container-max px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-forest-700 font-semibold text-sm tracking-widest bg-forest-50 px-4 py-2 rounded-full border border-forest-200">
                {personalInfo.tagline}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-earth-900 mb-6 leading-tight">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-forest-600">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-lg text-earth-700 font-medium mb-2">
              {personalInfo.title}
            </p>

            <p className="text-xl text-earth-600 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="#projects" className="btn-primary">
                View My Work
              </Link>
              <Link href="#contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-lg p-4 border border-earth-200">
                  <p className="text-2xl font-bold text-forest-600">{s.value}</p>
                  <p className="text-sm text-earth-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Nature-inspired decorative element */}
          <div className="hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Organic rings like tree rings / ripples */}
              <div className="absolute inset-0 rounded-full border-2 border-earth-200 opacity-40"></div>
              <div className="absolute inset-6 rounded-full border-2 border-forest-200 opacity-50"></div>
              <div className="absolute inset-12 rounded-full border border-earth-300 opacity-30"></div>
              <div className="absolute inset-20 rounded-full border border-forest-300 opacity-40"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 bg-earth-900 rounded-2xl p-8 shadow-lg">
                  <p className="text-white font-bold text-2xl mt-2">{firstName}</p>
                  <p className="text-earth-300 font-semibold text-sm mt-4">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
