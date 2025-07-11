import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Handshake, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent and affordable pricing plans for your next website. Choose from Starter, Business, or Pro packages.',
};

const packages = [
  {
    name: 'Launch Offer',
    price: '₹1,000*',
    description: 'First 5 clients per month. Basic static landing page.',
    features: [
      '1 Page Static Landing Page',
      'Contact / WhatsApp Button',
      'Basic Info Section',
      '48-Hour Delivery',
    ],
    cta: 'Claim Offer',
    popular: false,
    badgeText: '🔥 Limited Time',
    originalPrice: null
  },
  {
    name: 'Starter Site',
    price: '₹4,999',
    description: 'Perfect for individuals and small projects.',
    features: [
      '1-Page Website (e.g. Home)',
      'Responsive Design',
      'Contact Form or WhatsApp',
      'Basic SEO Setup',
      '3-Day Delivery',
    ],
    cta: 'Get Started',
    popular: false,
    badgeText: null,
    originalPrice: null
  },
  {
    name: 'Business Site',
    price: '₹7,999',
    originalPrice: '₹9,999',
    description: 'Ideal for growing businesses and startups.',
    features: [
      'Up to 5 Pages',
      'Includes Gallery & Map',
      'CMS Integration (for blogs)',
      'Advanced SEO Optimization',
      '5-Day Delivery',
    ],
    cta: 'Choose Business',
    popular: true,
    badgeText: '🎉 20% OFF'
  },
  {
    name: 'Premium Custom',
    price: '₹19,999+',
    description: 'For businesses needing custom solutions.',
    features: [
      'Login/Dashboard/Admin',
      'User Authentication',
      'E-commerce, Bookings etc.',
      'Custom Backend Development',
      'Priority Support',
    ],
    cta: 'Contact Us',
    popular: false,
    badgeText: null,
    originalPrice: null
  },
];

const notes = [
    {
        icon: <Handshake className="h-5 w-5 text-primary flex-shrink-0" />,
        text: 'All packages are negotiable based on your specific needs.'
    },
    {
        icon: <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />,
        text: 'Upgrade anytime without losing your data or progress.'
    },
    {
        icon: <ChevronRight className="h-5 w-5 text-primary flex-shrink-0" />,
        text: 'Payment accepted via UPI, Razorpay, or Bank Transfer.'
    }
]

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {packages.map((pkg) => (
              <Card key={pkg.name} className={`flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${pkg.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {(pkg.popular || pkg.badgeText) && (
                  <div className={`text-center py-2 text-sm font-semibold rounded-t-lg ${pkg.popular ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {pkg.badgeText || 'Most Popular'}
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="font-headline text-4xl font-bold">{pkg.price}</span>
                    {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through ml-2">{pkg.originalPrice}</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-primary to-orange-500 text-white' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                    <Link href="/contact">{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="mt-12 bg-card border rounded-lg p-6">
             <ul className="space-y-4">
                {notes.map((note, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {note.icon}
                        <span className="text-muted-foreground">{note.text}</span>
                    </li>
                ))}
             </ul>
           </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure which plan fits your business?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tell us your goal & we’ll send you a custom quote within 2 hours.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-orange-500 text-white transition-transform hover:scale-105">
                    <Link href="/contact">Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </section>

       <section id="cta" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Still have questions?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out and let's discuss your project.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
