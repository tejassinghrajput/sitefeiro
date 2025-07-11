import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, HeartHandshake, Zap, Compass, PencilRuler, Rocket, Briefcase, Star, IndianRupee, Globe } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FounderPortraitIcon } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WaveDivider } from '@/components/wave-divider';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Discover the story, mission, and values behind BuildNGo. Learn why we are passionate about building fast, high-quality websites that empower businesses and creators.',
};

const values = [
  {
    icon: <IndianRupee className="h-8 w-8 text-primary" />,
    title: '100% Indian Owned',
    description: "Proudly based in India, we're dedicated to helping local and global businesses thrive online.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: '5-Star Rated Feedback',
    description: "Our clients love our work. We're committed to excellence and it shows in our feedback.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Free Post-Launch Support',
    description: "We provide 7 days of free support to ensure your website runs smoothly after it goes live.",
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
  'PHP', 'CodeIgniter', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'Genkit AI', 'Vercel'
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
            We build websites that <span className="text-primary">work</span>.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:200ms]">
             BuildNGo was founded by Tejas Kumar Singh, a full-stack web developer passionate about helping Indian & global small businesses go online quickly, professionally, and affordably.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div className="order-2 md:order-1 animate-fade-in-up">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Our Journey</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We noticed a gap in the market: agencies were too expensive for small businesses, and freelancers were often inconsistent. So we stepped in with a simple promise: <br/> <strong className="text-foreground">"We deliver professional websites that work — in days, not weeks."</strong>
              </p>
              <p className="mt-4 text-muted-foreground">
                Founded in 2021, BuildNGo started with a mission to empower entrepreneurs. We've seen brilliant ideas held back by slow, expensive, and complicated web development. The traditional model felt broken, catering only to large corporations.
              </p>
              <p className="mt-4 text-muted-foreground">
                BuildNGo is our answer. We created it to be everything we wished for as a client: incredibly fast, transparently priced, and relentlessly focused on quality. By leveraging a modern tech stack and a streamlined process, we eliminate bottlenecks and deliver exceptional websites in a fraction of the time. Our goal isn't just to build sites; it's to help you make your mark on the world.
              </p>
              <Button asChild className="mt-6 transition-transform hover:scale-105" size="lg">
                <Link href="/contact">Let's Build Together</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center animate-fade-in-up [animation-delay:200ms]">
                <FounderPortraitIcon className="w-full max-w-md h-auto rounded-lg shadow-lg transition-transform hover:scale-105" data-ai-hint="developer portrait" />
            </div>
          </div>
        </div>
      </section>
      
      <WaveDivider />

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Core Philosophy</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              These are the principles that guide every project we undertake.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Card key={value.title} className="text-center p-8 transition-transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`}}>
                <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 rounded-lg">
                  {value.icon}
                </div>
                <h3 className="mt-6 font-headline text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Simple 3-Step Process</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        From idea to launch, we make it easy and transparent.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                    {processSteps.map((step, index) => (
                        <div key={step.title} className={`relative mb-12 flex items-center animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ animationDelay: `${index * 150}ms`}}>
                            <div className="hidden md:block w-1/2"></div>
                            <div className="hidden md:block">
                                <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10"></div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Card className="p-6 transition-transform hover:scale-105 hover:shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="flex justify-center items-center h-12 w-12 bg-primary/10 rounded-lg flex-shrink-0">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <p className="text-muted-foreground mt-1">{step.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      
       <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center animate-fade-in-up">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Experience & Technology</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Our experience and carefully selected tech stack are our secret sauce for delivering quality at speed.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                <Card className="text-center p-8 transition-transform hover:scale-105 animate-fade-in-up [animation-delay:100ms]">
                    <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 rounded-lg">
                        <Briefcase className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-bold">Developer since 2021</h3>
                    <p className="mt-2 text-muted-foreground">Delivered landing pages, admin panels, e-commerce MVPs, portfolio sites, and booking systems.</p>
                </Card>
                <Card className="text-center p-8 transition-transform hover:scale-105 animate-fade-in-up [animation-delay:200ms]">
                    <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 rounded-lg">
                        <Globe className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-bold">Global Clientele</h3>
                    <p className="mt-2 text-muted-foreground">Based in India with happy clients across the UK, and UAE.</p>
                </Card>
                <Card className="text-center p-8 transition-transform hover:scale-105 animate-fade-in-up [animation-delay:300ms]">
                    <div className="flex justify-center items-center h-16 w-16 mx-auto bg-primary/10 rounded-lg">
                        <Rocket className="h-8 w-8 text-primary"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-bold">Powerful Tech Stack</h3>
                     <p className="mt-2 text-muted-foreground">Using modern, reliable technologies to build high-performance websites.</p>
                </Card>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
                {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-base px-4 py-2 rounded-md transition-transform hover:scale-110">
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
