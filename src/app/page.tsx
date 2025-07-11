import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Quote, Star, Zap, Code, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const portfolio = [
  {
    title: "E-commerce Store",
    image: "https://placehold.co/600x400.png",
    hint: "online shop",
  },
  {
    title: "Corporate Website",
    image: "https://placehold.co/600x400.png",
    hint: "business site",
  },
  {
    title: "Portfolio Showcase",
    image: "https://placehold.co/600x400.png",
    hint: "creative portfolio",
  },
  {
    title: "SaaS Landing Page",
    image: "https://placehold.co/600x400.png",
    hint: "software startup",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, TechSolutions",
    quote: "Incredible speed and quality! BuildNGo delivered our new website in just three days, and it exceeded all our expectations. The process was seamless and highly professional.",
    avatar: "https://placehold.co/40x40.png",
    hint: "man portrait"
  },
  {
    name: "Priya Singh",
    role: "Marketing Head, Creative Co.",
    quote: "The team's attention to detail and understanding of our brand was impressive. Our new site is not only beautiful but also incredibly fast. Highly recommended!",
    avatar: "https://placehold.co/40x40.png",
    hint: "woman portrait"
  },
  {
    name: "Rohan Verma",
    role: "CEO, Innovate Startups",
    quote: "I was skeptical about the 3-day promise, but they delivered. The pricing is unbeatable for the quality you get. A game-changer for startups on a budget.",
    avatar: "https://placehold.co/40x40.png",
    hint: "man smiling"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            We build websites in <span className="text-primary">3 days</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Fast. Affordable. SEO-Ready. Starting at just <span className="font-semibold text-foreground">₹4,999</span>.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
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
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
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

      <section id="portfolio" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Work</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into the quality and style we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((item) => (
              <Card key={item.title} className="overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image src={item.image} alt={item.title} width={600} height={400} data-ai-hint={item.hint} className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're trusted by founders and businesses across India.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow">
                        <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">{testimonial.quote}</p>
                      </CardContent>
                      <CardFooter className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex"/>
          </Carousel>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Launch Your Website?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Let's build your online presence, together. Get started today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Your Site Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
