"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center sm:text-left">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-snug"
        >
          Frontend Engineer building scalable, user-focused web applications
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
        >
          I design and build reliable interfaces with React, Next.js, and modern APIs,
          turning complex requirements into clean, maintainable experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/work"
            className="inline-flex items-center rounded-xl bg-gray-900 px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            View selected work
          </Link>
        </motion.div>
      </div>

      {/* Optional subtle background shape */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      />
    </section>
  );
}
