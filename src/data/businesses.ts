export interface Business {
    name: string;
    description: string;
    year: string;
    website: string;
    tags: string[];
    logoUrl?: string; // Optional, falls back to initials/icon
    stats: { label: string; value: string }[];
    features: string[];
    color: string;
}

export const businesses: Business[] = [
    {
        name: "Heaviside Digital",
        description: "Cincinnati's trusted digital marketing agency. We build marketing brands that get results, delivering high-quality web, SEO, and digital marketing services since 2010.",
        year: "Founded 2010",
        website: "https://heaviside.digital",
        tags: ["Digital Marketing", "SEO", "Web Development"],
        logoUrl: "/images/logos/heaviside-digital.png",
        stats: [
            { label: "Reviews", value: "500+" },
            { label: "Experience", value: "14 Years" },
        ],
        features: [
            "Proven Marketing System",
            "Strategic PPC Campaigns",
            "Powerhouse Local SEO",
            "High Converting Landing Pages",
        ],
        color: "oklch(0.6 0.15 250)", // Blue
    },
    {
        name: "Paving Marketers",
        description: "The #1 digital marketing partner for paving companies. We've developed a process designed to catch new commercial and residential customers when they are looking for paving services.",
        year: "Launched 2020",
        website: "https://pavingmarketers.com",
        tags: ["Niche Marketing", "Paving Industry"],
        logoUrl: "/images/logos/paving-marketers.png",
        stats: [
            { label: "Clients", value: "1,000+" },
            { label: "Rating", value: "#1 Agency" },
        ],
        features: [
            "Specialized Industry Knowledge",
            "Lead Generation System",
            "Automated Estimates",
            "Commercial & Residential Focus",
        ],
        color: "oklch(0.65 0.2 40)", // Orange
    },
    {
        name: "Garage Door Marketers",
        description: "Premier digital marketing partner for garage door companies. Growing rapidly to become the go-to marketing solution for the garage door industry.",
        year: "Launched 2022",
        website: "https://garagedoormarketers.com",
        tags: ["Niche Marketing", "Garage Door Industry"],
        logoUrl: "/images/logos/garage-door-marketers.png",
        stats: [
            { label: "Growth", value: "Rapid" },
            { label: "Focus", value: "100% Niche" },
        ],
        features: [
            "Proven Marketing System",
            "Lead & Estimate Generation",
            "Market Domination Strategy",
            "Industry Specific Tools",
        ],
        color: "oklch(0.55 0.2 250)", // Blue/Indigo
    },
    {
        name: "Electrician Marketing Agency",
        description: "Helping electrical contractors attract more customers and grow their revenue through a proven digital marketing system specialized exclusively for the electrical industry.",
        year: "Launched 2023",
        website: "https://electricianmarketingagency.com",
        tags: ["Niche Marketing", "Electrician Industry"],
        logoUrl: "/images/logos/electrician-marketing-agency.png",
        stats: [
            { label: "Experience", value: "10+ Years" },
            { label: "Specialty", value: "Electrical" },
        ],
        features: [
            "Exclusive Industry Focus",
            "Revenue Growth System",
            "Customer Attraction",
            "Proven Track Record",
        ],
        color: "oklch(0.8 0.15 85)", // Yellow/Gold
    },
    {
        name: "Digital Agency Growth Academy",
        description: "Agency training platform delivering solutions to help digital marketing agencies scale and grow. Empowering agencies with the exact 9 steps used to add $1.3M ARR.",
        year: "Training Platform",
        website: "https://digitalagencygrowthacademy.com",
        tags: ["Education", "Agency Training"],
        logoUrl: "", // No logo file available yet
        stats: [
            { label: "Growth", value: "$1.3M ARR" },
            { label: "Steps", value: "9 Proven" },
        ],
        features: [
export interface Business {
        name: string;
        description: string;
        year: string;
        website: string;
        tags: string[];
        logoUrl?: string; // Optional, falls back to initials/icon
        stats: { label: string; value: string }[];
        features: string[];
        color: string;
    }

export const businesses: Business[] = [
    {
        name: "Heaviside Digital",
        description: "Cincinnati's trusted digital marketing agency. We build marketing brands that get results, delivering high-quality web, SEO, and digital marketing services since 2010.",
        year: "Founded 2010",
        website: "https://heaviside.digital",
        tags: ["Digital Marketing", "SEO", "Web Development"],
        logoUrl: "/images/logos/heaviside-digital.png",
        stats: [
            { label: "Reviews", value: "500+" },
            { label: "Experience", value: "14 Years" },
        ],
        features: [
            "Proven Marketing System",
            "Strategic PPC Campaigns",
            "Powerhouse Local SEO",
            "High Converting Landing Pages",
        ],
        color: "oklch(0.6 0.15 250)", // Blue
    },
    {
        name: "Paving Marketers",
        description: "The #1 digital marketing partner for paving companies. We've developed a process designed to catch new commercial and residential customers when they are looking for paving services.",
        year: "Launched 2020",
        website: "https://pavingmarketers.com",
        tags: ["Niche Marketing", "Paving Industry"],
        logoUrl: "/images/logos/paving-marketers.png",
        stats: [
            { label: "Clients", value: "1,000+" },
            { label: "Rating", value: "#1 Agency" },
        ],
        features: [
            "Specialized Industry Knowledge",
            "Lead Generation System",
            "Automated Estimates",
            "Commercial & Residential Focus",
        ],
        color: "oklch(0.65 0.2 40)", // Orange
    },
    {
        name: "Garage Door Marketers",
        description: "Premier digital marketing partner for garage door companies. Growing rapidly to become the go-to marketing solution for the garage door industry.",
        year: "Launched 2022",
        website: "https://garagedoormarketers.com",
        tags: ["Niche Marketing", "Garage Door Industry"],
        logoUrl: "/images/logos/garage-door-marketers.png",
        stats: [
            { label: "Growth", value: "Rapid" },
            { label: "Focus", value: "100% Niche" },
        ],
        features: [
            "Proven Marketing System",
            "Lead & Estimate Generation",
            "Market Domination Strategy",
            "Industry Specific Tools",
        ],
        color: "oklch(0.55 0.2 250)", // Blue/Indigo
    },
    {
        name: "Electrician Marketing Agency",
        description: "Helping electrical contractors attract more customers and grow their revenue through a proven digital marketing system specialized exclusively for the electrical industry.",
        year: "Launched 2023",
        website: "https://electricianmarketingagency.com",
        tags: ["Niche Marketing", "Electrician Industry"],
        logoUrl: "/images/logos/electrician-marketing-agency.png",
        stats: [
            { label: "Experience", value: "10+ Years" },
            { label: "Specialty", value: "Electrical" },
        ],
        features: [
            "Exclusive Industry Focus",
            "Revenue Growth System",
            "Customer Attraction",
            "Proven Track Record",
        ],
        color: "oklch(0.8 0.15 85)", // Yellow/Gold
    },
    {
        name: "Digital Agency Growth Academy",
        description: "Agency training platform delivering solutions to help digital marketing agencies scale and grow. Empowering agencies with the exact 9 steps used to add $1.3M ARR.",
        year: "Training Platform",
        website: "https://digitalagencygrowthacademy.com",
        tags: ["Education", "Agency Training"],
        logoUrl: "", // No logo file available yet
        stats: [
            { label: "Growth", value: "$1.3M ARR" },
            { label: "Steps", value: "9 Proven" },
        ],
        features: [
            "Scalable Lead Gen Systems",
            "Outbound Email Strategy",
            "Facebook Ads Mastery",
            "Sales Hiring Guide",
        ],
        color: "oklch(0.5 0.2 320)", // Purple/Pink
    },
    {
        name: "Revenue Commander",
        description: "The All-In-One Marketing & Sales Platform. Replace your disconnected tools with one powerful platform to capture leads, nurture relationships, and close more deals on autopilot.",
        year: "Launched 2024",
        website: "https://revenuecommander.com",
        tags: ["SaaS", "Marketing Automation", "CRM"],
        logoUrl: "/images/logos/revenue-commander.png",
        stats: [
            { label: "Savings", value: "$7k+/yr" },
            { label: "Tools", value: "All-in-One" },
        ],
        features: [
            "Unified CRM & Pipelines",
            "Automated Nurture Campaigns",
            "Unlimited Funnels & Forms",
            "Reputation Management",
        ],
        color: "oklch(0.5 0.2 20)", // Red/Crimson
    },
];
