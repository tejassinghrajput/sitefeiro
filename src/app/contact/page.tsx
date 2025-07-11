import type { Metadata } from 'next';
import { Mail, MessageCircle, Phone } from 'lucide-react';

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
              <p className="text-muted-foreground">
                For a quick response, WhatsApp is the best way to reach us. You can also send us an email. We typically reply within a few hours.
              </p>
              
              <div className="space-y-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full justify-start h-auto p-4 text-left">
                    <MessageCircle className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">+91 70421 07933</p>
                    </div>
                  </Button>
                </a>

                <a href={`mailto:${EMAIL}`} className="block">
                  <Button variant="outline" className="w-full justify-start h-auto p-4 text-left">
                    <Mail className="h-8 w-8 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">{EMAIL}</p>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
