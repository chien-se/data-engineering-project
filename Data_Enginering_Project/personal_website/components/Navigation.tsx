"use client";

import { useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/config";

const brandFirst = personalInfo.name.split(" ")[0];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-earth-900/95 backdrop-blur-sm shadow-lg border-b border-earth-800">
      <div className="container-max px-4 md:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-white group">
            {brandFirst}
            <span className="text-forest-400 group-hover:text-forest-300 transition">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-earth-200 hover:text-white transition font-medium">
              About
            </Link>
            <Link href="#skills" className="text-earth-200 hover:text-white transition font-medium">
              Skills
            </Link>
            <Link href="#projects" className="text-earth-200 hover:text-white transition font-medium">
              Projects
            </Link>
            <Link href="#resume" className="text-earth-200 hover:text-white transition font-medium">
              Resume
            </Link>
            <Link href="#blog" className="text-earth-200 hover:text-white transition font-medium">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="#contact" className="hidden md:block bg-forest-600 hover:bg-forest-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-all">
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-earth-700">
            <Link href="#about" className="block text-earth-200 hover:text-white font-medium py-2 transition" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#skills" className="block text-earth-200 hover:text-white font-medium py-2 transition" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="#projects" className="block text-earth-200 hover:text-white font-medium py-2 transition" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#resume" className="block text-earth-200 hover:text-white font-medium py-2 transition" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
            <Link href="#blog" className="block text-earth-200 hover:text-white font-medium py-2 transition" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="#contact" className="block bg-forest-600 hover:bg-forest-500 text-white font-semibold px-4 py-3 rounded-lg transition text-center mt-4" onClick={() => setIsOpen(false)}>
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
