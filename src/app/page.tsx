import Link from "next/link";
import { ArrowRight, CheckCircle, Quote, Star, Zap, Code, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ECommerceIcon, CorporateWebsiteIcon, PortfolioShowcaseIcon, SaasLandingPageIcon } from "@/components/icons";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "3-Day Delivery",
    description: "Your fully functional, professionally designed website will be live in just 3 days. No more waiting weeks or months.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-accent" />,
    title: "SEO-Ready",
    description: "We build with search engines in mind, ensuring your site is optimized for visibility from day one.",
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Modern Tech",
    description: "Leveraging the power of Next.js and Tailwind CSS for a fast, responsive, and future-proof website.",
  },
];

const services = [
  {
    title: "Starter Websites",
    description: "Perfect for personal portfolios, blogs, or small projects. A professional online presence, fast.",
    price: "₹4,999",
  },
  {
    title: "Business Websites",
    description: "Ideal for small businesses and startups needing a comprehensive site with multiple pages and features.",
    price: "₹9,999",
  },
  {
    title: "Pro Custom Sites",
    description: "For businesses requiring custom functionalities, e-commerce, or unique design solutions.",
    price: "₹19,999+",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            We build websites in <span className="text-primary">3 days</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:200ms]">
            Fast. Affordable. SEO-Ready. Starting at just <span className="font-semibold text-foreground">₹4,999</span>.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <Button asChild size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact on WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                {feature.icon}
                <h3 className="mt-4 font-headline text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Choose the perfect package to launch your online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <Card key={service.title} className="flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-3xl font-bold font-headline">{service.price}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/pricing">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Launch Your Website?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Let's build your online presence, together. Get started today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
              <Link href="/contact">Get Your Site Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
