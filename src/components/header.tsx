"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Business", href: "/business" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

import { Logo } from "./Logo";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60"
      suppressHydrationWarning
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo width={50} height={50} />
        </Link>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-110 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </motion.header>
  );
}
