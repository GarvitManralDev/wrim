"use client";

import { motion } from "framer-motion";
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
    <section className="py-24 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold"
      >
        How We Build Technology That Lasts Forever
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto md:text-lg"
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
                className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md"
              >
                <Icon size={30} className="text-black dark:text-white" />
              </motion.div>

              <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {step.desc}
              </p>

              {/* Connector line (only for desktop & except last item) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="hidden md:block h-px w-12 bg-neutral-300 dark:bg-neutral-700 mx-auto mt-6 origin-left"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
