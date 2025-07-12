
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArrowRight, Calendar, Tag, Inbox } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image?: string;
}

export const metadata: Metadata = {
  title: 'Blog | SiteFeiro - Web Design & SEO Insights',
  description: 'Explore the latest insights on web design, SEO, and digital marketing from the experts at SiteFeiro. Our blog provides valuable tips and strategies to help your business succeed online.',
  keywords: ['web design blog', 'SEO tips', 'digital marketing India', 'small business website advice', 'Next.js development blog'],
};

async function getBlogPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  try {
    const filenames = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
      filenames
        .filter((filename) => filename.endsWith('.mdx'))
        .map(async (filename) => {
          const filePath = path.join(postsDirectory, filename);
          const fileContents = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContents);
          return {
            slug: filename.replace(/\.mdx$/, ''),
            ...(data as Omit<Post, 'slug'>),
          };
        })
    );

    return (posts.filter(Boolean) as Post[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Could not read posts directory for getBlogPosts, returning empty array:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts: Post[] = await getBlogPosts();

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            SiteFeiro <span className="text-primary">Blog</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your source for expert insights on web design, SEO, and growing your business online.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                  {post.image && (
                    <Link href={`/blog/${post.slug}`} className="block aspect-video relative">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        data-ai-hint="blog post topic"
                      />
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex-col items-start gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="mt-4">
                      <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Inbox className="mx-auto h-16 w-16 text-muted-foreground" />
              <h2 className="mt-4 text-2xl font-bold">No Posts Yet</h2>
              <p className="mt-2 text-muted-foreground">
                We're busy writing new content. Check back soon for fresh insights!
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
