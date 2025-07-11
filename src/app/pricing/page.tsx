import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent and affordable pricing plans for your next website. Choose from Starter, Business, or Pro packages.',
};

const packages = [
  {
    name: 'Starter Site',
    price: '₹4,999',
    description: 'Perfect for individuals and small projects.',
    features: [
      '3-Page Website (Home, About, Contact)',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
      '3-Day Delivery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business Site',
    price: '₹9,999',
    description: 'Ideal for growing businesses and startups.',
    features: [
      '5-Page Website',
      'Everything in Starter',
      'CMS Integration (for blogs, etc.)',
      'Advanced SEO Optimization',
      '5-Day Delivery',
    ],
    cta: 'Choose Business',
    popular: true,
  },
  {
    name: 'Pro Custom Site',
    price: '₹19,999+',
    description: 'For businesses needing custom solutions.',
    features: [
      'Unlimited Pages',
      'Everything in Business',
      'E-commerce Functionality',
      'Custom Backend Development',
      'Priority Support',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What does "hosting" mean and is it included?',
    answer: 'Hosting is where your website files live on the internet. We do not provide hosting, but we can deploy your website to your preferred hosting provider (like Vercel, Netlify, or a VPS) and guide you through the best options.',
  },
  {
    question: 'What is the turnaround time?',
    answer: 'Our standard delivery times are listed on each package (e.g., 3 days for Starter). This begins once we have all the necessary content and materials from you. Custom projects may have a different timeline, which we will discuss with you upfront.',
  },
  {
    question: 'How does the payment process work?',
    answer: 'We require a 50% upfront payment to begin work, with the remaining 50% due upon project completion and your approval, before we deploy the website to your hosting.',
  },
  {
    question: 'Do you offer website maintenance?',
    answer: 'Yes, we offer optional monthly maintenance packages to keep your website updated, secure, and running smoothly. Please contact us for more details on our maintenance plans.',
  },
  {
    question: 'Can I provide my own design?',
    answer: 'Absolutely! If you have a design from Figma or another tool, we can build it out for you. The Pro Custom Site package is perfect for this.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`flex flex-col ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="font-headline text-4xl font-bold">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                    <Link href="/contact">{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       <section id="cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Still have questions?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out and let's discuss your project.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
