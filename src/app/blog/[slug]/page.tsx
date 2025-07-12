
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, Tag, User } from 'lucide-react';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import { FRONTEND_URL } from '@/config/constants';

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');

export async function generateStaticParams() {
  const filenames = await fs.readdir(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

async function getPost(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const postUrl = `${FRONTEND_URL}/blog/${params.slug}`;
  const imageUrl = post.image ? `${FRONTEND_URL}${post.image}` : `${FRONTEND_URL}/og-image.png`;

  return {
    title: `${post.title} | SiteFeiro Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      <article className="container mx-auto max-w-4xl py-20 px-4">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>By {post.author}</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        
        {post.image && (
          <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg shadow-lg mb-12" />
        )}

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
