

import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, User, Tag, Home, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FRONTEND_URL } from '@/config/constants';
import { calculateReadingTime } from '@/lib/reading-time';
import { SharePost } from '@/components/share-post';
import { ReadingProgressBar } from '@/components/layout/reading-progress-bar';
import { Card } from '@/components/ui/card';
import { 
  SeoIllustration,
  WebSpeedIllustration,
  BusinessGrowthIllustration,
  OnlineWorldIllustration,
  NextJsIllustration,
} from '@/components/illustrations';
import { Button } from '@/components/ui/button';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');

// export async function generateStaticParams() {
//   try {
//     const filenames = await fs.readdir(postsDirectory);
//     return filenames
//       .filter((filename) => filename.endsWith('.mdx'))
//       .map((filename) => ({
//         slug: filename.replace(/\.mdx$/, ''),
//       }));
//   } catch (error) {
//     console.error("Could not read posts directory for generateStaticParams, returning empty array:", error);
//     return [];
//   }
// }

async function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const readingTime = calculateReadingTime(content);
    
    return {
      frontmatter: data,
      content,
      readingTime,
      slug,
    };
  } catch (error) {
    console.error(`Could not read post: ${slug}.mdx`, error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { frontmatter } = post;
  const postUrl = `${FRONTEND_URL}/blog/${params.slug}`;
  const imageUrl = frontmatter.image ? frontmatter.image.startsWith('http') ? frontmatter.image : `${FRONTEND_URL}${frontmatter.image}` : `${FRONTEND_URL}/og-image.png`;

  return {
    title: `${frontmatter.title} | SiteFeiro Blog`,
    description: frontmatter.excerpt,
    keywords: frontmatter.tags,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: postUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime, slug } = post;

  const components = {
    Button,
    Link,
    Card,
    Badge,
    TestimonialCarousel,
    SeoIllustration,
    WebSpeedIllustration,
    BusinessGrowthIllustration,
    OnlineWorldIllustration,
    NextJsIllustration,
  };

  const postUrl = `${FRONTEND_URL}/blog/${slug}`;

  return (
    <>
      <ReadingProgressBar />
      <div className="bg-background text-foreground">
        <header className="py-12 bg-card border-b">
          <div className="container mx-auto max-w-4xl px-4">
            <nav aria-label="breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-primary flex items-center gap-1"><Home className="h-4 w-4" /> Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="font-semibold text-foreground truncate max-w-xs sm:max-w-none">{frontmatter.title}</li>
              </ol>
            </nav>

            {frontmatter.image && (
              <div className="relative w-full h-auto aspect-video mb-8">
                <Image
                  src={frontmatter.image} 
                  alt={frontmatter.title} 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  data-ai-hint="blog post topic"
                />
              </div>
            )}

            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{frontmatter.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>By {frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-sm">
                <article className="prose">
                    <MDXRemote source={content} components={components} />
                </article>
            </div>

            <div className="mt-12 border-t pt-8">
               <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                      <span className="font-semibold">Tags:</span>
                      {frontmatter.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="transition-transform hover:scale-110">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                      </Badge>
                      ))}
                  </div>
                  <SharePost url={postUrl} title={frontmatter.title} />
               </div>
            </div>
        </div>
      </div>
    </>
  );
}
