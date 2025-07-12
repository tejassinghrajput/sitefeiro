import type { Metadata } from 'next';
import Link from 'next/link';
import { Inbox, Rss } from 'lucide-react';

import { getAllPosts } from '@/lib/posts';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog | SiteFeiro - Web Design & SEO Insights',
  description: 'Explore the latest insights on web design, SEO, and digital marketing from the experts at SiteFeiro. Our blog provides valuable tips and strategies to help your business succeed online.',
  keywords: ['web design blog', 'SEO tips', 'digital marketing India', 'small business website advice', 'Next.js development blog'],
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="flex justify-center items-center gap-4">
            <Rss className="h-10 w-10 text-primary" />
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              SiteFeiro <span className="text-primary">Blog</span>
            </h1>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your source for expert insights on web design, SEO, and growing your business online.
          </p>
        </div>
      </section>

      <main className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-lg shadow-sm border border-dashed">
              <Inbox className="mx-auto h-16 w-16 text-muted-foreground" />
              <h2 className="mt-6 text-2xl font-bold font-headline">No Posts Yet</h2>
              <p className="mt-2 text-muted-foreground">
                We're busy writing new content. Check back soon for fresh insights!
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
