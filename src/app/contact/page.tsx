import type { Metadata } from 'next';
import { Mail, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BuildNGo. Contact us via WhatsApp, email, or our contact form to start your website project today.',
};

const WHATSAPP_LINK = "https://wa.me/917042107933";
const EMAIL = "sittefeiro@gmail.com";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Let's <span className="text-primary">Build</span> Something Great
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="font-headline text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
              <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="font-headline text-lg font-semibold flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    We Respect Your Time
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    No spam. No pressure. When you contact us, we’ll ask about your needs, goals, and budget — that’s it.
                  </p>
              </div>
              
              <div className="space-y-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full justify-start h-auto p-4 text-left">
                    <MessageCircle className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">Ping us and we’ll call you back. </p>
                    </div>
                  </Button>
                </a>

                <a href={`mailto:${EMAIL}`} className="block">
                  <Button variant="outline" className="w-full justify-start h-auto p-4 text-left">
                    <Mail className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">{EMAIL}</p>
                    </div>
                  </Button>
                </a>
                 <Button variant="outline" className="w-full justify-start h-auto p-4 text-left pointer-events-none">
                    <Clock className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Typical Reply Time</p>
                      <p className="text-muted-foreground">&lt;1 hour (9 AM to 10 PM IST)</p>
                    </div>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
