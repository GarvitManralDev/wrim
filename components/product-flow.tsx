"use client";

import { motion } from "motion/react";
import {
  IconBrain,
  IconPencil,
  IconCode,
  IconTestPipe,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";

const steps = [
  {
    icon: IconBrain,
    title: "Research & Strategy",
    desc: "Understanding the problem, market, and user needs.",
  },
  {
    icon: IconPencil,
    title: "Design & Architecture",
    desc: "Blueprinting the experience and system foundation.",
  },
  {
    icon: IconCode,
    title: "Development",
    desc: "Engineering scalable, future-ready digital products.",
  },
  {
    icon: IconTestPipe,
    title: "Testing & QA",
    desc: "Ensuring performance, security, and reliability.",
  },
  {
    icon: IconRocket,
    title: "Launch",
    desc: "Deploying with stability and confidence.",
  },
  {
    icon: IconHeadset,
    title: "Support & Evolution",
    desc: "Continuous improvement and feature growth.",
  },
];

export default function ProductFlowAnimated() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto text-center bg-white dark:bg-slate-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent"
      >
        How We Build Technology That Lasts Forever
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:text-lg"
      >
        A future-proof lifecycle designed for innovation that adapts, grows, and
        stands the test of time — truly immortal.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-10 relative">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                <Icon size={30} className="text-blue-600 dark:text-blue-400" />
              </motion.div>

              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {step.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {step.desc}
              </p>

              {/* Connector line (only for desktop & except last item) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto mt-6 origin-left rounded-full"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
