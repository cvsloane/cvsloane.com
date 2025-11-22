export interface Project {
  title: string;
  description: string;
  specs: string[];
  logoUrl?: string;
  website?: string;
  stats?: { label: string; value: string }[];
  features?: string[];
  color?: string;
  status?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // --- Featured Platforms (SaaS & Major Systems) ---
  {
    title: "Agency Commander",
    description:
      "The financial command center for digital agencies. Gives complete visibility into sales, revenue, and profitability. Replaces spreadsheets with a real-time financial engine.",
    specs: ["SaaS", "Financial Tech", "Dashboard"],
    logoUrl: "/images/logos/agency-commander.png",
    website: "https://agencycommander.co",
    stats: [
      { label: "Focus", value: "Profitability" },
      { label: "Type", value: "SaaS" },
    ],
    features: [
      "Complete Sales Visibility",
      "Real-time Profitability Tracking",
      "Actionable Financial Reports",
      "Sales Forecasting",
    ],
    color: "oklch(0.45 0.15 240)", // Navy Blue
    status: "Live",
    featured: true,
  },
  {
    title: "HG Content",
    description:
      "AI-powered content generation platform designed for modern businesses. Create, manage, and optimize content across multiple clients and campaigns with advanced AI assistance.",
    specs: ["AI", "Content Ops", "SaaS"],
    logoUrl: "/images/logos/hg-content.png",
    website: "https://hgcontent.com",
    stats: [
      { label: "Tech", value: "Advanced AI" },
      { label: "Scale", value: "Enterprise" },
    ],
    features: [
      "Multi-Client Management",
      "SEO Optimization Built-in",
      "Strategy & Tone Management",
      "Real-time Processing",
    ],
    color: "oklch(0.6 0.2 300)", // Purple
    status: "Live",
    featured: true,
  },
  {
    title: "HG SEO Commander",
    description:
      "Comprehensive SEO management platform for businesses of all sizes. Boost online presence and drive growth through data-driven insights and automated reporting.",
    specs: ["SEO", "Automation", "Analytics"],
    logoUrl: "/images/logos/hg-seo-commander.png",
    website: "https://hgseocommander.com",
    stats: [
      { label: "Data", value: "Reliable" },
      { label: "Security", value: "Enterprise" },
    ],
    features: [
      "Comprehensive Reports",
      "Industry-Specific Insights",
      "User-Friendly Dashboard",
      "Automated Analysis",
    ],
    color: "oklch(0.55 0.18 150)", // Green
    status: "Live",
    featured: true,
  },
  {
    title: "Heaviside Platform",
    description:
      "Multi-tenant website platform for managing 50-100+ WordPress sites with modern technology, enterprise-grade security, and complete multi-tenant isolation.",
    specs: ["Next.js 15", "Supabase", "Multi-tenancy"],
    logoUrl: "/images/logos/heaviside-platform.png",
    stats: [
      { label: "Scale", value: "100+ Sites" },
      { label: "Tech", value: "Modern Stack" },
    ],
    features: [
      "Complete Isolation",
      "Enterprise Security",
      "Centralized Management",
    ],
    color: "oklch(0.3 0.1 260)",
    status: "Internal Platform",
    featured: true,
  },
  {
    title: "FreightRail Pulse",
    description:
      "Real-time freight rail monitoring and visualization platform for the United States. Processes high-volume data streams to visualize network status.",
    specs: ["Real-time", "Geospatial", "WebSocket"],
    logoUrl: "/images/logos/freightrail-pulse.png",
    stats: [
      { label: "Data", value: "High-Volume" },
      { label: "Type", value: "Real-time" },
    ],
    features: [
      "Network Visualization",
      "Live Data Streams",
      "Geospatial Analysis",
    ],
    color: "oklch(0.4 0.15 200)",
    status: "Project",
    featured: true,
  },
  {
    title: "Site2Next",
    description:
      "CLI tool to convert any public website to a Next.js application with preserved SEO and functional forms.",
    specs: ["CLI", "Node.js", "AST Manipulation", "Migration Tool"],
    featured: false,
  },
  {
    title: "HG Market Report",
    description:
      "Automated market analysis tool that aggregates data to generate comprehensive reports for agency clients and internal strategy.",
    specs: ["Data Aggregation", "Reporting", "Automation"],
    featured: false,
  },
  {
    title: "Agency Financials",
    description:
      "Internal financial tracking and reporting system designed for digital agency operations and forecasting.",
    specs: ["Finance", "Reporting", "Internal Tool"],
    featured: false,
  },
  {
    title: "Revenue Commander",
    description:
      "Revenue tracking and forecasting tool that integrates with CRM and accounting data to provide real-time business health metrics.",
    specs: ["Python", "Data Pipelines", "Forecasting"],
    featured: false,
  },
  {
    title: "HG Leads Commander",
    description:
      "Lead generation automation tool that identifies and qualifies prospects across various channels.",
    specs: ["Lead Gen", "Automation", "Scraping"],
    featured: false,
  },
  {
    title: "Heaviside Prospector",
    description:
      "Automated prospecting tool for identifying potential clients in specific niche markets.",
    specs: ["Prospecting", "Data Mining", "Automation"],
    featured: false,
  },
  {
    title: "Outscraper GHL",
    description:
      "GoHighLevel Contact Sync Tool - Companion tool for Outscraper Tools pipeline that syncs business data to GoHighLevel CRM.",
    specs: ["CRM Integration", "GoHighLevel", "Data Sync"],
    featured: false,
  },
  {
    title: "Outscraper Tools",
    description:
      "Utilities for processing and cleaning data scraped from various sources for marketing campaigns.",
    specs: ["Data Processing", "ETL", "Python"],
    featured: false,
  },
  {
    title: "Paving Plugin",
    description:
      "Industry-specific WordPress plugin designed for paving company websites, providing specialized functionality and schema.",
    specs: ["WordPress", "PHP", "Plugin Dev"],
    featured: false,
  },
  {
    title: "Heaviside GBP",
    description:
      "Google Business Profile management tool for automating updates, posts, and review management across multiple locations.",
    specs: ["Google API", "Automation", "Local SEO"],
    featured: false,
  },
  {
    title: "Heaviside SEO",
    description:
      "Core SEO utility library used across Heaviside Group projects for consistent meta tag generation and schema markup.",
    specs: ["SEO", "Library", "TypeScript"],
    featured: false,
  },
  {
    title: "BWS Init",
    description:
      "CLI tool for initializing Bitwarden Secrets Manager in any project, streamlining secure environment variable management.",
    specs: ["CLI", "Security", "Bitwarden"],
    featured: false,
  },
  {
    title: "Family Devotion",
    description:
      "Application for managing family spiritual activities and devotionals.",
    specs: ["Personal", "React", "Mobile-First"],
    featured: false,
  },
];
