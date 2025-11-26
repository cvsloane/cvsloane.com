"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubstackPost } from "@/lib/substack";
import { useMemo, useState } from "react";

interface BlogListProps {
  posts: SubstackPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const pageSize = 4;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const pagePosts = useMemo(
    () => posts.slice((page - 1) * pageSize, page * pageSize),
    [page, posts],
  );

  const goToPage = (next: number) => {
    const target = Math.min(Math.max(next, 1), totalPages);
    setPage(target);
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts found yet. Subscribe below to get notified!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2">
        {pagePosts.map((post, index) => (
          <motion.div
            key={post.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Link href={post.link} target="_blank" rel="noopener noreferrer">
              <Card className="h-full overflow-hidden bg-card/70 hover:bg-muted/60 transition-colors">
                <div className="relative aspect-[16/9] w-full bg-muted">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl leading-tight line-clamp-2">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-3">{post.contentSnippet}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between border border-border/60 rounded-lg px-4 py-3 bg-card/60">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="text-sm font-medium px-3 py-2 rounded-md border border-border/60 disabled:opacity-40 hover:bg-muted/60 transition"
        >
          Previous
        </button>
        <div className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </div>
        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="text-sm font-medium px-3 py-2 rounded-md border border-border/60 disabled:opacity-40 hover:bg-muted/60 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
