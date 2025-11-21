export interface Project {
  title: string;
  description: string;
  specs: string[];
}

export const projects: Project[] = [
  {
    title: "Enterprise Multi-Tenant CMS",
    description:
      "A scalable platform managing 50-100+ isolated sites with shared architecture but distinct content and branding. Designed to streamline agency operations by centralizing code maintenance while allowing individual site customization.",
    specs: [
      "Next.js 15",
      "Supabase",
      "TypeScript",
      "Row Level Security",
      "Edge Functions",
    ],
  },
  {
    title: "Real-Time Logistics Intelligence",
    description:
      "A monitoring system for the US freight rail network, providing real-time visibility and analytics. Processes high-volume data streams to visualize network status and identify logistical bottlenecks.",
    specs: [
      "Real-time Data Streaming",
      "Geospatial Visualization",
      "High-Performance Rendering",
      "WebSocket API",
    ],
  },
  {
    title: "AI-Driven Task Management",
    description:
      "An intelligent task manager that uses AI to categorize, prioritize, and assist with daily workflows. Built with a local-first architecture to ensure instant responsiveness and offline capability.",
    specs: [
      "Progressive Web App (PWA)",
      "Local-First Architecture",
      "LLM Integration",
      "Offline Support",
    ],
  },
  {
    title: "Agency Operations Automation Suite",
    description:
      "A suite of internal tools automating SEO analysis, revenue tracking, and lead generation. Integrates disparate data sources to provide a unified view of agency health and automate repetitive administrative tasks.",
    specs: [
      "Python",
      "API Integrations",
      "Scheduled Jobs",
      "Data Pipelines",
      "Automated Reporting",
    ],
  },
];
