"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Logo({ className = "", width = 40, height = 40 }: { className?: string; width?: number; height?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width, height }} className={className} />;
  }

  const src =
    resolvedTheme === "dark"
      ? "/images/signatures/Christopher-Sloane-Initials_white_high-res.png"
      : "/images/signatures/Christopher-Sloane-Initials_black_high-res.png";

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src={src}
        alt="CS Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
