import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/cvsloane" },
  { name: "Substack", href: "https://cvsloane.substack.com" },
  { name: "Twitter", href: "https://twitter.com/cvsloane" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-6 py-12 md:h-28 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} cvsloane. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:scale-110 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
