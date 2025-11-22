"use client";

import { motion } from "framer-motion";
import { businesses } from "@/data/businesses";
import { FeatureSection } from "@/components/FeatureSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business",
};

export default function BusinessPage() {
    return (
        <div className="container py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-24 pb-24"
            >
                <div className="text-center space-y-4 py-12">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/50">
                        Business Portfolio
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A family of marketing brands serving specialized industries with proven strategies and exceptional results.
                    </p>
                </div>

                <div className="space-y-12">
                    {businesses.map((business, index) => (
                        <FeatureSection
                            key={business.name}
                            index={index}
                            title={business.name}
                            description={business.description}
                            logoUrl={business.logoUrl}
                            website={business.website}
                            stats={business.stats}
                            features={business.features}
                            color={business.color}
                            tags={business.tags}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
