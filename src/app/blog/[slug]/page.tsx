import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Clock, User, Tag, Home, ChevronRight } from 'lucide-react';

import { getPostBySlug, getPostSlugs, PostWithContent } from '@/lib/posts';
import { FRONTEND_URL } from '@/config/constants';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SharePost } from '@/components/share-post';
import { ReadingProgressBar } from '@/components/layout/reading-progress-bar';
import { 
  SeoIllustration,
  WebSpeedIllustration,
  BusinessGrowthIllustration,
  OnlineWorldIllustration,
  NextJsIllustration,
} from '@/components/illustrations';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();
    return slugs;
  } catch (error) {
    console.error("Could not generate static params for blog posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { title, excerpt, tags, image } = post;
  const postUrl = `${FRONTEND_URL}/blog/${params.slug}`;
  const imageUrl = image ? (image.startsWith('http') ? image : `${FRONTEND_URL}${image}`) : `${FRONTEND_URL}/og-image.png`;

  return {
    title: `${title} | SiteFeiro Blog`,
    description: excerpt,
    keywords: tags,
    openGraph: {
      title,
      description: excerpt,
      url: postUrl,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, excerpt, date, author, tags, content, readingTime, image, slug } = post;
  const postUrl = `${FRONTEND_URL}/blog/${slug}`;

  const mdxComponents = {
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

  return (
    <>
      <ReadingProgressBar />
      <div className="bg-background text-foreground">
        <header className="pt-12 bg-card border-b">
          <div className="container mx-auto max-w-4xl px-4">
            <nav aria-label="breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex items-center gap-2 flex-wrap">
                <li><Link href="/" className="hover:text-primary flex items-center gap-1"><Home className="h-4 w-4" /> Home</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="font-semibold text-foreground truncate" style={{ maxWidth: '250px' }}>{title}</li>
              </ol>
            </nav>
            
            {image && (
              <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 928px"
                  priority
                  data-ai-hint="blog post topic"
                />
              </div>
            )}

            <div className="pb-12">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{excerpt}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>By {author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="bg-card p-4 sm:p-8 rounded-lg shadow-sm">
            <article className="prose">
              <MDXRemote source={content} components={mdxComponents} />
            </article>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">Tags:</span>
                  {tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="transition-transform hover:scale-110">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              <SharePost url={postUrl} title={title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
