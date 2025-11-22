"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { GitHubGraph } from "@/components/GitHubGraph";
import { FeatureSection } from "@/components/FeatureSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-24 pb-24"
      >
        <GitHubGraph />

        {/* Featured Projects */}
        <div className="space-y-12">
          <div className="text-center space-y-4 py-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50">
              Technical Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of recent engineering challenges, SaaS platforms, and systems I&apos;ve architected.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <FeatureSection
                key={project.title}
                index={index}
                title={project.title}
                description={project.description}
                logoUrl={project.logoUrl}
                website={project.website}
                stats={project.stats}
                features={project.features}
                color={project.color}
                tags={project.specs}
              />
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Other Technical Work</h2>
            <p className="text-muted-foreground">
              Additional tools, plugins, and internal systems.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col hover:border-primary/50 transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.specs.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
