"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24"
    >
      <div className="max-w-[1240px] w-full px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="text-sm md:text-lg text-gray-400">
            Hi, I am
          </p>

          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white">
            Adeyemi Fathia
          </h1>

          <TypeAnimation
            sequence={["Frontend Engineer", 1500, "Frontend Developer", 1500]}
            wrapper="p"
            repeat={Infinity}
            className="mt-4 text-base md:text-xl text-gray-300"
          />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/portfolio-img.jpg"
              alt="Adeyemi Fathia portrait"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
