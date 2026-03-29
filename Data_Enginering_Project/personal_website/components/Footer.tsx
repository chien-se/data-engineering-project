import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/config";

const brandFirst = personalInfo.name.split(" ")[0];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-900 text-white py-16 border-t border-earth-800">
      <div className="container-max px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {brandFirst}
              <span className="text-forest-400">.dev</span>
            </h3>
            <p className="text-earth-400 text-sm font-medium">
              Crafted with persistence, dedication, and a relentless spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Navigation</h4>
            <ul className="space-y-3 text-sm text-earth-400">
              <li>
                <Link href="#about" className="hover:text-white transition font-semibold">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition font-semibold">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#resume" className="hover:text-white transition font-semibold">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition font-semibold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Social</h4>
            <ul className="space-y-3 text-sm text-earth-400">
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-semibold">
                  GitHub
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-semibold">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-earth-400">
              <li>
                <a href={socialLinks.email} className="hover:text-white transition font-semibold">
                  Email Me
                </a>
              </li>
              <li className="text-forest-400 font-semibold">
                Open to opportunities
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-800 pt-8">
          <p className="text-center text-earth-500 text-sm font-medium">
            &copy; {currentYear} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
