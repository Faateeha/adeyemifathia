"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "State & APIs",
      skills: ["TanStack Query", "REST & GraphQL APIs", "Appwrite", "Async Patterns"],
    },
    {
      category: "UI & UX",
      skills: ["Responsive Design", "Accessibility", "Component Architecture", "Design Handoff"],
    },
    {
      category: "Engineering",
      skills: ["Performance Optimization", "Code Quality", "Scalable Frontend Architecture", "Team Collaboration"],
    },
  ];

  // Staggered animation container
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={card}
              className="p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{group.category}</h3>
              <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
