import { getLatestPosts } from "@/lib/substack";
import { BlogList } from "./BlogList";
import { SubstackSubscribe } from "@/components/SubstackSubscribe";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getLatestPosts();

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology.
            <br />
            <span className="text-sm">Powered by Substack</span>
          </p>
        </div>

        <SubstackSubscribe />
        
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
