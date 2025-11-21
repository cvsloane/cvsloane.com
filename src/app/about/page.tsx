"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            Hello! I&apos;m Chris Sloane, the founder of Heaviside Group and a developer passionate about building
            scalable systems and exploring the intersection of marketing and artificial intelligence.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Background</h2>
          <p className="text-muted-foreground">
            I founded Heaviside Group in 2011, initially as a side project during my sales career. 
            Before venturing into business, I was deeply immersed in academia, completing all but my PhD in 
            Computational Plasma Physics. This technical foundation has shaped my approach to marketing and development, 
            allowing me to bridge the gap between complex data systems and practical business solutions.
          </p>
          <p className="text-muted-foreground mt-4">
            Today, I lead a portfolio of niche marketing brands including Paving Marketers, Garage Door Marketers, 
            and Electrician Marketers. My current focus is on leveraging AI to revolutionize how we deliver 
            marketing results and build software.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              "Next.js", 
              "TypeScript", 
              "Supabase", 
              "AI Integration", 
              "SEO Strategy", 
              "System Architecture"
            ].map(
              (skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-md text-center"
                >
                  {skill}
                </div>
              )
            )}
          </div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Interests</h2>
          <p className="text-muted-foreground">
            Outside of work, I am a devoted Christian and cherish time with my wife and many children. 
            Although we now call the Cincinnati area home, I remain a loyal Wisconsin sports fan. 
            Technically, I am currently obsessed with the impact of AI on marketing and how to implement 
            agentic workflows for real-world business applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
