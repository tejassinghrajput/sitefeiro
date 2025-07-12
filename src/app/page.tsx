"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Gift, Compass, PencilRuler, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { WaveDivider } from "@/components/wave-divider";
import { HeroIllustration } from "@/components/illustrations";

const trustFeatures = [
  "Expert web design India-based team",
  "100% custom business websites, no templates",
  "Free consultation for your project",
  "Transparent and fair pricing",
  "Free minor changes post-launch",
  "Serving clients globally from India",
];

const processSteps = [
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "1. Discovery & SEO Strategy",
    description: "We start by understanding your business goals and target audience to create a clear roadmap for a high-ranking, custom business website.",
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-primary" />,
    title: "2. Custom Web Design & Development",
    description: "Our expert web design team in India crafts a fast-loading, responsive website with clean code and a modern, user-friendly interface.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "3. Review, SEO Optimization & Launch",
    description: "We present the finished website for your feedback, perform final SEO optimization, and handle the deployment for a successful launch.",
  }
];

export default function Home() {

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
               <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-in-up">
                Stunning Websites in 3 Days.
               </h1>
              <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:200ms]">
                🚀 Get a high-ranking, custom business website built by experts in India. Mobile-ready, SEO-friendly, and delivered fast — guaranteed. Starting at just <span className="font-semibold text-foreground">₹4,999*</span>.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up [animation-delay:400ms]">
                <Button asChild size="lg" className="transition-transform hover:scale-105 w-full sm:w-auto">
                  <Link href="/contact">Get Your Custom Website <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105 w-full sm:w-auto">
                  <Link href="/pricing">See Web Design Pricing</Link>
                </Button>
              </div>
            </div>
             <div className="hidden md:block animate-fade-in-up [animation-delay:600ms]">
              <HeroIllustration className="w-full h-auto" data-ai-hint="website development" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-background/80 backdrop-blur-lg border-primary/20 shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <CardHeader className="p-6 text-center bg-primary/10">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary">🔥 Trending</Badge>
                <Badge variant="secondary">⏱ 3-Day Delivery</Badge>
                <Badge variant="secondary">✅ No Template</Badge>
              </div>
              <CardTitle className="font-headline text-3xl animate-fade-in-up [animation-delay:100ms]">Get a Custom Business Website for ₹4,999*</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center animate-fade-in-up [animation-delay:200ms]">
                  <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                  <p className="font-semibold text-lg">1-Page Business Website</p>
                  <p className="text-sm text-muted-foreground">Perfect for showcasing your business online.</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up [animation-delay:400ms]">
                  <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                  <p className="font-semibold text-lg">WhatsApp & Contact Form</p>
                  <p className="text-sm text-muted-foreground">Easy for your customers to reach you.</p>
                </div>
                <div className="flex flex-col items-center animate-fade-in-up [animation-delay:600ms]">
                  <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                  <p className="font-semibold text-lg">Delivered in 48 Hours</p>
                  <p className="text-sm text-muted-foreground">Get your fast-loading website online quickly.</p>
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-8">*Valid for the first 5 customers every month. Offer applies to basic landing pages only. You can upgrade to a full business website later.</p>
            </CardContent>
            <CardFooter className="flex-col gap-4 pb-8">
              <p className="font-bold text-primary text-lg">👉 Limited slots — Book your custom website now!</p>
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/pricing">Claim This Web Design Deal</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <WaveDivider />

      <section id="trust" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose SiteFeiro for Your Website</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              💡 We are a top web design company in India, dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, i) => (
              <Card key={i} className="p-6 flex items-start gap-4 transition-transform hover:scale-105 animate-fade-in-up bg-background/80 backdrop-blur-lg" style={{ animationDelay: `${i * 100}ms` }}>
                <Check className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-lg">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16 animate-fade-in-up">
            <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
              <Link href="/about">Learn More About Our Web Design Company</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Simple 3-Step Web Design Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              From idea to a high-ranking website, we make it easy and transparent.
            </p>
          </div>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {processSteps.map((step, index) => (
              <AccordionItem value={`item-${index + 1}`} key={step.title} className="border-b-0 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="mb-4 bg-card backdrop-blur-lg transition-shadow hover:shadow-lg">
                  <AccordionTrigger className="text-lg font-semibold p-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex justify-center items-center h-12 w-12 bg-primary/10 rounded-lg flex-shrink-0">
                        {step.icon}
                      </div>
                      {step.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-muted-foreground">{step.description}</p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="social-proof" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Businesses in India and Beyond</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Real results from our web design clients.</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section id="discount-strip" className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-center text-center gap-4 md:justify-between">
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8" />
              <p className="font-bold text-lg md:text-xl">
                This Month Only: 20% Off Business Website (₹9,999 → ₹7,999)
              </p>
              <Badge variant="destructive" className="hidden md:inline-flex">Offer valid for a limited time</Badge>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="secondary" className="transition-transform hover:scale-105 text-primary">
                <Link href="/pricing">Book Your Custom Website Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-card text-center p-8 md:p-12 shadow-lg">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in-up">Ready to Get a High-Ranking Website?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up [animation-delay:200ms]">
              Let's build your online presence and grow your business together. Get started with the best web design company in India today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
              <Button asChild size="lg" className="transition-transform hover:scale-105 w-full sm:w-auto">
                <Link href="/contact">Get Your Custom Website <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105 w-full sm:w-auto">
                <Link href="/pricing">View Web Design Plans</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
