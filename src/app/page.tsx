import Link from "next/link";
import { ArrowRight, CheckCircle, Quote, Star, Zap, Code, Rocket, Check, Gift, MessageCircle, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const trustFeatures = [
  "Worked with 10+ real businesses",
  "100% custom-built designs, no templates",
  "Free consultation before payment",
  "Transparent process, always",
  "Free minor changes post-launch",
  "Based in India, serving worldwide",
];

const testimonials = [
  {
    quote: "I didn’t expect a full-feature site for this price!",
    name: "Ashish",
    title: "Financial Advisor",
    avatar: "A",
  },
  {
    quote: "I got clients from the same week I launched my website.",
    name: "Dr. Ritu",
    title: "Dermatologist",
    avatar: "R",
  },
  {
    quote: "Felt like working with an agency — but way faster & better.",
    name: "Yash",
    title: "Founder, YSmart Ads",
    avatar: "Y",
  },
];


export default function Home() {
  const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Build Stunning Websites in <span className="text-primary">Just 3 Days</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:200ms]">
            🚀 Mobile-Ready, SEO-Friendly, Fast Delivery — Guaranteed. Starting at just <span className="font-semibold text-foreground">₹1,000*</span>.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <Button asChild size="lg">
              <Link href="/contact">Get Your Website Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-card shadow-lg border-primary">
            <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                    <Badge variant="secondary" className="text-base bg-primary text-primary-foreground">🎉 Launch Offer</Badge>
                </div>
              <CardTitle className="font-headline text-3xl">Get Your Website Now @ ₹1,000*</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <p className="font-semibold">1-Page Business Site</p>
                  <p className="text-sm text-muted-foreground">Perfect for showcasing your business.</p>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <p className="font-semibold">WhatsApp & Contact</p>
                  <p className="text-sm text-muted-foreground">Easy for customers to reach you.</p>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <p className="font-semibold">Delivered in 48 Hours</p>
                  <p className="text-sm text-muted-foreground">Get online faster than ever.</p>
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground mt-6">*Valid for the first 5 customers every month. Offer applies to basic landing pages only. You can upgrade later anytime.</p>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <p className="font-bold text-primary">👉 Limited slots — Book yours now!</p>
              <Button asChild size="lg">
                <Link href="/pricing">Claim This Deal</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      
      <section id="trust" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why People Choose BuildNGo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              💡 We’re not just another freelance dev — we’re your web partner.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {trustFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="social-proof" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Startups, Coaches, Clinics & Creators</h2>
          </div>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             {testimonials.map((testimonial, i) => (
               <Card key={i} className="flex flex-col">
                 <CardContent className="pt-6">
                   <Quote className="h-8 w-8 text-primary/50 mb-4" />
                   <p className="text-lg font-medium text-foreground">"{testimonial.quote}"</p>
                 </CardContent>
                 <CardFooter className="mt-auto flex items-center gap-4">
                   <Avatar>
                     <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                   </Avatar>
                   <div>
                     <p className="font-semibold">{testimonial.name}</p>
                     <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                   </div>
                 </CardFooter>
               </Card>
             ))}
           </div>
        </div>
      </section>

      <section id="discount-strip" className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap items-center justify-center text-center gap-4 md:justify-between">
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8"/>
              <p className="font-bold text-lg md:text-xl">
                This Month Only: 20% Off Business Website (₹9,999 → ₹7,999)
              </p>
              <Badge variant="destructive" className="hidden md:inline-flex">Offer valid till {endOfMonth}</Badge>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="secondary">
                  <Link href="/pricing">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Launch Your Website?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's build your online presence, together. Get started today.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">Get Your Site Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
