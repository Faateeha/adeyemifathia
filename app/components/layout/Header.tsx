"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <nav className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold hover:text-[#819096] transition">
          Portfolio.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="p-4 hover:text-[#819096] transition">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen((prev) => !prev)}
          className="block md:hidden"
          aria-label="Toggle navigation"
        >
          {navOpen ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </nav>

      {/* Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={closeNav}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[65%] bg-[#000300] border-r border-gray-800 transform transition-transform duration-300 ease-in-out md:hidden
        ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-8">Portfolio.</h2>

          <ul className="uppercase space-y-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="border-b border-gray-700 pb-2 hover:text-[#819096] transition"
              >
                <Link href={link.href} onClick={closeNav}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </header>
  );
}
