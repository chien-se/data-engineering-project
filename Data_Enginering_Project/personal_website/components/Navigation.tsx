"use client";

import { useState } from "react";
import Link from "next/link";
import { personalInfo } from "@/lib/config";

const brandFirst = personalInfo.name.split(" ")[0];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-max px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-spirit-900">
            {brandFirst}
            <span className="accent-text">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-spirit-700 hover:accent-text transition">
              About
            </Link>
            <Link href="#skills" className="text-spirit-700 hover:accent-text transition">
              Skills
            </Link>
            <Link href="#projects" className="text-spirit-700 hover:accent-text transition">
              Projects
            </Link>
            <Link href="#resume" className="text-spirit-700 hover:accent-text transition">
              Resume
            </Link>
            <Link href="#blog" className="text-spirit-700 hover:accent-text transition">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="#contact" className="hidden md:block btn-primary">
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-spirit-900"
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
          <div className="md:hidden pb-4 space-y-3 border-t border-spirit-100">
            <Link
              href="#about"
              className="block text-spirit-700 hover:accent-text py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block text-spirit-700 hover:accent-text py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="block text-spirit-700 hover:accent-text py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#resume"
              className="block text-spirit-700 hover:accent-text py-2"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
            <Link
              href="#blog"
              className="block text-spirit-700 hover:accent-text py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
