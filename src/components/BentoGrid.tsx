"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Code2, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BentoGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full p-4"
    >
      {/* Featured Project - Large Card */}
      <motion.div
        variants={item}
        className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-linear-to-br from-blue-600/10 to-cyan-500/10 border border-white/10 p-8 flex flex-col justify-between min-h-[300px]"
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Code2 className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Featured Project</span>
          </div>
          <h3 className="text-3xl font-bold mb-2">Agency Commander</h3>
          <p className="text-muted-foreground max-w-md">
            The financial command center for digital agencies. Complete visibility into sales, revenue, and profitability.
          </p>
        </div>
        <div className="relative z-10 mt-8">
          <Button asChild className="rounded-full group-hover:translate-x-1 transition-transform">
            <Link href="/projects">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Businesses - Tall Card */}
      <motion.div
        variants={item}
        className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-3xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-white/10 p-8 flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 mb-2">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Businesses</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Heaviside Group</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Heaviside Digital</li>
            <li>• Paving Marketers</li>
            <li>• Garage Marketers</li>
            <li>• Electrician Marketers</li>
          </ul>
        </div>
        <div className="relative z-10 mt-8">
          <Button asChild variant="outline" className="w-full rounded-full">
            <Link href="/business">View Portfolio</Link>
          </Button>
        </div>
      </motion.div>

      {/* About - Wide Card */}
      <motion.div
        variants={item}
        className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-secondary/30 border border-white/10 p-8 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">About Me</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Building systems that scale.</h3>
          <p className="text-muted-foreground">
            Founder, developer, and entrepreneur combining computational physics with digital strategy.
          </p>
        </div>
        <div className="relative z-10">
          <Button asChild variant="secondary" className="rounded-full">
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </motion.div>

      {/* Contact - Small Card */}
      <motion.div
        variants={item}
        className="md:col-span-1 relative group overflow-hidden rounded-3xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-white/10 p-8 flex flex-col justify-center items-center text-center hover:border-blue-500/50 transition-colors cursor-pointer"
      >
        <Link href="/contact" className="absolute inset-0 z-20" />
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Mail className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-bold">Get in Touch</h3>
      </motion.div>
    </motion.div>
  );
}
