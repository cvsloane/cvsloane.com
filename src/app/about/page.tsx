"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="container py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/chris-sloane.jpg"
                            alt="Chris Sloane"
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white">
                                <div className="font-semibold text-lg">Chris Sloane</div>
                                <div className="text-sm text-white/80">Founder, Heaviside Group</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-10 order-1 lg:order-2"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/60">
                            Building systems that scale.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            I&apos;m a developer and entrepreneur passionate about the intersection of marketing, technology, and artificial intelligence.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                Background
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                I founded Heaviside Group in 2011, turning a side project into a thriving agency. 
                                My journey began in academia, where I nearly completed a PhD in Computational Plasma Physics. 
                                That rigorous technical training now fuels my approach to business—bridging the gap between 
                                complex data systems and practical, revenue-generating solutions.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Today, I lead a portfolio of niche marketing brands and am obsessed with leveraging AI 
                                to revolutionize how we build software and deliver value.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Twitter className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Mail className="w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
