import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/config";

const brandFirst = personalInfo.name.split(" ")[0];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spirit-900 text-white py-12">
      <div className="container-max px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {brandFirst}
              <span className="accent-text">.dev</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Crafted with persistence and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#about" className="hover:accent-text transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:accent-text transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#resume" className="hover:accent-text transition">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:accent-text transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:accent-text transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:accent-text transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={socialLinks.email} className="hover:accent-text transition">
                  Email
                </a>
              </li>
              <li className="text-gray-400">
                Available for opportunities
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-spirit-700 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} {personalInfo.name}. Built with Next.js, Tailwind CSS, and a relentless spirit.
          </p>
        </div>
      </div>
    </footer>
  );
}
