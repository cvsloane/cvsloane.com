import Parser from "rss-parser";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  image?: string;
}

const FEED_URL = "https://cvsloane.substack.com/feed";

export async function getLatestPosts(): Promise<SubstackPost[]> {
  const parser = new Parser();
  try {
    // Fetch with no caching so the blog page always reflects the newest posts.
    const response = await fetch(FEED_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Feed request failed: ${response.status} ${response.statusText}`);
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return (feed.items ?? []).map((item) => ({
      title: item.title || "Untitled",
      link: item.link || "",
      pubDate: item.pubDate || "",
      contentSnippet: item.contentSnippet || "",
      image:
        (item.enclosure as { url?: string } | undefined)?.url ||
        extractFirstImage(item["content:encoded"] || item.content || ""),
    }));
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    return [];
  }
}

function extractFirstImage(html: string): string | undefined {
  const match = html.match(/<img[^>]+src="([^">]+)"/i);
  return match?.[1];
}
