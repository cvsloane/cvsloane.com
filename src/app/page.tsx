"use client";

import { motion } from "framer-motion";


import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <div className="relative container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-12 overflow-hidden">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-linear-to-br from-blue-500/30 via-cyan-500/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-1/4 w-96 h-96 rounded-full bg-linear-to-bl from-blue-600/30 via-blue-400/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center space-y-8 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text animate-gradient font-extrabold">
            Chris Sloane
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I build marketing brands and AI-powered software. Founder of Heaviside Group, 
          combining a background in Computational Physics with modern digital strategy.
        </motion.p>
      </motion.div>

      {/* Bento Grid Section */}
      <div className="w-full max-w-6xl mx-auto mt-24 relative z-10">
        <BentoGrid />
      </div>
    </div>
  );
}
