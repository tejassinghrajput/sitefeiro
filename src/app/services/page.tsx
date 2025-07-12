
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Briefcase, ShoppingCart, Tv, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SaasLandingPageIcon, CorporateWebsiteIcon, ECommerceIcon, PortfolioShowcaseIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Services | Custom Web Design & Development | SiteFeiro',
  description: 'Explore our web design services, including corporate websites, e-commerce stores, portfolio showcases, and SaaS landing pages. Get a fast, affordable, and high-performance website tailored to your needs.',
  keywords: ['web design services', 'e-commerce development', 'corporate website design', 'SaaS landing page', 'portfolio website India'],
};

const services = [
  {
    icon: <CorporateWebsiteIcon className="w-full h-auto" />,
    title: 'Corporate & Business Websites',
    description: 'Establish a strong online presence with a professional, custom-designed website that reflects your brand and engages your customers.',
    features: [
      'Custom Multi-Page Design',
      'CMS for Blog/News',
      'SEO & Performance Optimized',
      'Mobile-First Responsive Design',
    ],
    cta: 'Get a Business Site',
  },
  {
    icon: <ECommerceIcon className="w-full h-auto" />,
    title: 'E-commerce Solutions',
    description: 'Launch your online store with a powerful, secure, and user-friendly e-commerce platform designed to drive sales and growth.',
    features: [
      'Full Product Catalogs',
      'Secure Payment Gateway Integration',
      'Inventory Management',
      'Customer Account System',
    ],
    cta: 'Start Selling Online',
  },
  {
    icon: <PortfolioShowcaseIcon className="w-full h-auto" />,
    title: 'Portfolio & Creative Showcases',
    description: 'Showcase your work with a visually stunning and highly creative portfolio website that captures attention and highlights your talent.',
    features: [
      'Visually-Driven Layouts',
      'High-Resolution Galleries',
      'Fast-Loading Animations',
      'Easy Project Updates',
    ],
    cta: 'Showcase Your Work',
  },
  {
    icon: <SaasLandingPageIcon className="w-full h-auto" />,
    title: 'SaaS & App Landing Pages',
    description: 'Convert visitors into users with a compelling, high-converting landing page for your software, app, or digital product.',
    features: [
      'Conversion-Focused Design',
      'Clear Call-to-Actions (CTAs)',
      'Feature Highlights & Pricing Tables',
      'Integration with Marketing Tools',
    ],
    cta: 'Launch Your Product',
  },
];

const techUsed = [
    { icon: <Tv className="h-6 w-6 text-primary" />, name: 'Next.js & React' },
    { icon: <Code className="h-6 w-6 text-primary" />, name: 'TypeScript' },
    { icon: <Briefcase className="h-6 w-6 text-primary" />, name: 'Tailwind CSS' },
    { icon: <Bot className="h-6 w-6 text-primary" />, name: 'Genkit AI' },
]

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 bg-card border-b">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Websites That <span className="text-primary">Deliver Results</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            We don't just build websites; we craft digital experiences. From sleek corporate sites to robust e-commerce platforms, our solutions are designed to perform.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, i) => (
              <Card key={service.title} className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-card animate-fade-in-up" style={{ animationDelay: `${i * 150}ms`}}>
                <CardHeader>
                  <div className="mb-6 rounded-lg overflow-hidden border">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full" size="lg">
                    <Link href="/contact">{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Powered by Modern Technology</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We use a cutting-edge, reliable tech stack to ensure your website is fast, secure, and scalable.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {techUsed.map(tech => (
                    <div key={tech.name} className="flex flex-col items-center gap-3">
                        {tech.icon}
                        <p className="font-semibold text-muted-foreground">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Ready to Start Your Project?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Let's discuss your vision and how we can bring it to life. Get a free, no-obligation quote today.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/contact">Get Your Free Quote <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
