"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSectionOne() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 dark:from-slate-900 dark:via-blue-950/20 dark:to-orange-950/10">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Logo-inspired badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-blue-800 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              WE ARE IMMORTALS
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block mb-2 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 bg-clip-text text-transparent">
              Technology That Lives
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Beyond Time
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
          >
            Our mission at WRIM is to create solutions that adapt, grow, and remain impactful — 
            <span className="font-semibold text-gray-800 dark:text-gray-200"> truly immortal</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold text-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors shadow-md hover:shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Bottom accent line (like logo) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto mt-16 h-1 w-32 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

