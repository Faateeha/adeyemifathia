"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-5xl px-6 flex flex-col-reverse sm:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="sm:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            About Me
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            I’m a Frontend Engineer with a background in Biochemistry, building user-focused
            web applications that solve real problems. I specialize in React, Next.js, and
            modern APIs, focusing on maintainable, scalable code and smooth user experiences.
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            I enjoy turning complex requirements into clean, intuitive interfaces, collaborating
            closely with product and backend teams, and continuously learning to improve both
            UX and frontend architecture.
          </p>
        </motion.div>

        {/* Optional Photo */}
        <motion.div
          className="sm:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg" // Replace with your photo path
              alt="Profile photo"
                width={224} // sm:w-56 → 14rem = 224px
              height={224}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

