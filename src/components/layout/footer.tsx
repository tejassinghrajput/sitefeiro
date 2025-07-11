import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code, Mail, MapPin, ShieldCheck, Percent, RotateCw } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      text: "Pay only when satisfied (first-time clients)",
    },
    {
      icon: <Percent className="h-4 w-4" />,
      text: "50% upfront for large projects",
    },
    {
      icon: <RotateCw className="h-4 w-4" />,
      text: "Free fixes for 7 days post-delivery",
    },
];


const WHATSAPP_LINK = "https://wa.me/917042107933";
const EMAIL = "sittefeiro@gmail.com";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">SiteFeiro</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Fast, affordable, and SEO-ready websites delivered in days.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">Navigate</h3>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                </li>
                 <li>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>India (Remote)</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">Policies</h3>
               <ul className="mt-4 space-y-3">
                {policyLinks.map((link, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    {link.icon}
                    <span>{link.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline text-sm font-semibold tracking-wider text-foreground">Stay Updated</h3>
            <p className="mt-4 text-sm text-muted-foreground">No spam. Just updates on our latest offers and features.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SiteFeiro. All Rights Reserved. No hidden fees — ever.</p>
        </div>
      </div>
    </footer>
  );
}
