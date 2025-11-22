"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium"
          >
            <Sparkles size={18} />
            <span>Join 10,000+ teams today</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Start your free trial today. No credit card required.
            Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-lg flex items-center gap-2 shadow-2xl hover:shadow-3xl transition-all hover:bg-orange-50 group"
            >
              Start Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Book Demo
            </motion.button>
          </div>

          <p className="mt-8 text-blue-100 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
