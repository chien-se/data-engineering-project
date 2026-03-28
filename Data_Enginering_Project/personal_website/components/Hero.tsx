import Link from "next/link";
import { personalInfo, stats } from "@/lib/config";

export default function Hero() {
  const firstName = personalInfo.name.split(" ")[0];

  return (
    <section className="section bg-hero-pattern min-h-[70vh] flex items-center">
      <div className="container-max px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-accent-gold font-semibold text-sm tracking-widest">
                {personalInfo.tagline}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-spirit-900 mb-6 leading-tight">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="accent-text">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-lg text-spirit-700 font-medium mb-2">
              {personalInfo.title}
            </p>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-spirit-200">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-spirit-900">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="hidden md:block">
            <div className="relative w-full aspect-square">
              {/* Decorative circles representing perseverance */}
              <div className="absolute inset-0 rounded-full border-4 border-spirit-200 opacity-50"></div>
              <div className="absolute inset-8 rounded-full border-4 border-accent-gold opacity-60"></div>
              <div className="absolute inset-16 rounded-full border-2 border-spirit-600 opacity-70"></div>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-accent-gold font-bold text-lg">{firstName}</p>
                  <p className="text-spirit-900 font-bold text-xl md:text-2xl">
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
