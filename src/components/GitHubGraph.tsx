"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

interface GitHubGraphProps {
    username?: string;
}

export function GitHubGraph({ username = "cvsloane" }: GitHubGraphProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Wait until mounted to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-pulse text-muted-foreground">
                    Loading GitHub activity...
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center gap-4 py-8">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">GitHub Activity</h3>
                <p className="text-sm text-muted-foreground">
                    My contribution history over the past year
                </p>
            </div>
            <div className="w-full overflow-x-auto px-4">
                <div className="min-w-[700px]">
                    <GitHubCalendar
                        username={username}
                        colorScheme={theme === "dark" ? "dark" : "light"}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        theme={{
                            light: [
                                "oklch(0.96 0.01 270)",
                                "oklch(0.7 0.15 270)",
                                "oklch(0.6 0.2 270)",
                                "oklch(0.55 0.22 270)",
                                "oklch(0.5 0.24 270)",
                            ],
                            dark: [
                                "oklch(0.22 0.03 270)",
                                "oklch(0.5 0.15 280)",
                                "oklch(0.6 0.18 280)",
                                "oklch(0.7 0.2 280)",
                                "oklch(0.75 0.22 280)",
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
