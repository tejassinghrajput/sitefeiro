
import type { Metadata } from 'next';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog | SiteFeiro - Web Design & SEO Insights',
  description: 'Explore the latest insights on web design, SEO, and digital marketing from the experts at SiteFeiro. Our blog provides valuable tips and strategies to help your business succeed online.',
  keywords: ['web design blog', 'SEO tips', 'digital marketing India', 'small business website advice', 'Next.js development blog'],
};

async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data }_matter(fileContents);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data,
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                {post.image && (
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
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
        </div>
      </section>
    </div>
  );
}
