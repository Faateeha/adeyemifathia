"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Let’s Build Something Great Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg sm:text-xl text-gray-300"
        >
          I’m open to full-time frontend roles or exciting projects. Let’s connect and
          create something impactful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <Link
            href="mailto:fathiaomolara02@gmail.com" // replace with your email
            className="inline-block rounded-xl bg-white text-gray-900 px-8 py-4 font-medium text-lg sm:text-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

