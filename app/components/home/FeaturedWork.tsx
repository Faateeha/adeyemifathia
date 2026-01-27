"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

export default function FeaturedWork() {
  const projects = [
    {
      title: "FlowPay",
      description:
        "Fintech app enabling secure bank-to-bank transfers and transaction monitoring. Built robust frontend handling complex API flows and production edge cases.",
      href: "/work/flowpay",
    },
    {
      title: "MedLink",
      description:
        "Health platform connecting patients to providers. Focused on usability, accessibility, and scalable frontend architecture.",
      href: "/work/medlink",
    },
    {
      title: "CareFinder",
      description:
        "Patient-focused app to find healthcare providers and services efficiently. Emphasis on clean UI and intuitive user flows.",
      href: "/work/carefinder",
    },
    {
      title: "Figma → React",
      description:
        "Design-to-code project showcasing ability to convert Figma designs into responsive, accessible React components.",
      href: "/work/figma-react",
    },
  ];

  // Animation variants for staggered card fade/slide
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
        >
          Selected Work
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              className="p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <Link
                href={project.href}
                className="mt-4 inline-block text-blue-600 hover:underline font-medium"
              >
                View case study
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
