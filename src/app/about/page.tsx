import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, HeartHandshake, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FounderPortraitIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, mission, and values behind BuildNGo. Discover why we are passionate about building fast, high-quality websites.',
};

const values = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Speed & Efficiency',
    description: "We've optimized our process to deliver high-quality websites in record time, so you can launch faster.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Uncompromising Quality',
    description: "Fast doesn't mean cutting corners. We use modern technologies to build robust, scalable, and beautiful websites.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Transparent Communication',
    description: "We believe in clear, honest communication. You'll be kept in the loop throughout the entire process.",
  },
];

const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP', 'Firebase', 'GCP', 'Vercel', 'Figma'
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Driven by Passion, Defined by <span className="text-primary">Quality</span>.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            BuildNGo was born from a simple idea: professional web design should be fast, affordable, and accessible to everyone. We're here to turn your vision into a digital reality, without the usual hassle.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                As a Computer Science graduate with years of hands-on experience in PHP, React, and Node.js, I noticed a common problem: businesses and individuals struggled with slow, expensive, and complicated website development processes.
              </p>
              <p className="mt-4 text-muted-foreground">
                I founded BuildNGo to solve this. By standardizing the development process and using a modern, efficient tech stack, we can build and launch stunning, high-performance websites in just a few days. Our goal is to empower creators and entrepreneurs by giving them the high-quality online presence they deserve, quickly and affordably.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Let's Build Together</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
                <FounderPortraitIcon className="w-full h-auto rounded-lg shadow-lg" data-ai-hint="developer portrait" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose BuildNGo?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're more than just developers. We're your partners in digital growth.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 rounded-lg">
                  {value.icon}
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Technology Stack</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We use the best tools in the industry to build your website.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-lg px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
