import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, HeartHandshake, Zap, Compass, PencilRuler, Rocket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FounderPortraitIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the story, mission, and values behind BuildNGo. Learn why we are passionate about building fast, high-quality websites that empower businesses and creators.',
};

const values = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Radical Speed',
    description: "We've engineered a development process that's built for velocity. By cutting out the fluff and focusing on what matters, we get your premium website live in days, not months.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Uncompromising Quality',
    description: "Speed is nothing without excellence. We use a best-in-class tech stack and adhere to the highest standards to build websites that are not just beautiful, but also robust and secure.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'True Partnership',
    description: "We see ourselves as an extension of your team. That means transparent communication, a collaborative spirit, and a genuine commitment to your success.",
  },
];

const processSteps = [
    {
        icon: <Compass className="h-10 w-10 text-primary" />,
        title: "1. Discovery & Strategy",
        description: "We start by diving deep into your vision, goals, and audience. We'll define the project scope and create a clear roadmap for success.",
    },
    {
        icon: <PencilRuler className="h-10 w-10 text-primary" />,
        title: "2. Design & Development",
        description: "This is where the magic happens. Our team gets to work, building your website with clean code, modern design, and a sharp eye for detail.",
    },
    {
        icon: <Rocket className="h-10 w-10 text-primary" />,
        title: "3. Review & Launch",
        description: "We'll present the finished website for your feedback. After final approvals, we handle the deployment and celebrate your successful launch!",
    }
];


const techStack = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Genkit AI', 'Vercel', 'Figma'
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            We're a new breed of <span className="text-primary">web agency</span>.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            At BuildNGo, we're on a mission to dismantle the old, slow, and expensive way of building websites. We combine technical expertise with a passion for efficiency to help visionaries, founders, and businesses get online, faster than ever.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Our Origin Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hello, I'm the founder of BuildNGo. With a background in Computer Science and years of professional experience building complex applications with PHP, React, and Node.js, I've seen the good, the bad, and the ugly of the web development industry.
              </p>
              <p className="mt-4 text-muted-foreground">
                Too often, I saw talented entrepreneurs and small businesses with brilliant ideas held back by the same frustrating hurdles: web development that was painfully slow, prohibitively expensive, and needlessly complicated. The traditional agency model felt broken, designed for large corporations, not for the agile and ambitious.
              </p>
              <p className="mt-4 text-muted-foreground">
                BuildNGo is my answer to that problem. I created it to be everything I wished for as a client: a service that is incredibly fast, transparently priced, and relentlessly focused on quality. By leveraging a modern, standardized tech stack and a streamlined process, we eliminate the bottlenecks and deliver exceptional websites in a fraction of the time. Our goal isn't just to build sites; it's to empower you to make your mark on the world.
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
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Core Philosophy</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              These are the principles that guide every project we undertake.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Streamlined Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We've perfected a simple, transparent process to take your idea from concept to launch with speed and precision.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {processSteps.map((step) => (
                  <Card key={step.title} className="text-center p-6">
                      <CardHeader className="items-center">
                          {step.icon}
                          <CardTitle className="mt-4 font-headline text-xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Technology Stack</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We don't just use modern tools; we've carefully selected a powerful, integrated stack that enables us to build high-performance, scalable, and secure websites efficiently. This isn't just a list of logos—it's our secret sauce for delivering quality at speed.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-lg px-4 py-2 rounded-md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
