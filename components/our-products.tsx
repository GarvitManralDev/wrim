"use client";

import { motion } from "motion/react";
import { 
  Rocket, 
  Code2, 
  Cloud, 
  Shield, 
  Zap, 
  Globe,
  Sparkles
} from "lucide-react";
import { BentoGridSecondDemo } from "./bento-grid-demo-2";

export default function OurProducts() {
  return (
    <section className="relative py-12 md:py-16 px-4 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-orange-50/10 dark:from-slate-900 dark:via-blue-950/10 dark:to-orange-950/5">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 dark:bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-950/50 dark:to-orange-950/50 rounded-full border border-blue-200/50 dark:border-blue-800/50"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Product Portfolio
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="block mb-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
              Immortal Technology
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Built to Last Forever
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our suite of products designed for longevity, scalability, and future-proof innovation.
          </p>
        </motion.div>

        <BentoGridSecondDemo/>
      </div>
    </section>
  );
}

