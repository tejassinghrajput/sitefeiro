import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';

export const metadata: Metadata = {
  title: {
    default: 'BuildNGo: We build websites in 3 days — starting at ₹4,999',
    template: '%s | BuildNGo',
  },
  description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
  keywords: ['fast websites', 'affordable websites', 'website development', 'Next.js developer', 'React developer', 'web design India'],
  openGraph: {
    title: 'BuildNGo: We build websites in 3 days — starting at ₹4,999',
    description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
    url: 'https://buildngo-demo.com', // Replace with actual URL
    siteName: 'BuildNGo',
    images: [
      {
        url: 'https://placehold.co/1200x630/2563eb/ffffff.png?text=BuildNGo', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'BuildNGo - Fast Website Builder'
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildNGo: We build websites in 3 days — starting at ₹4,999',
    description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
    images: ['https://placehold.co/1200x630/2563eb/ffffff.png?text=BuildNGo'], // Replace with actual OG image
  },
  icons: {
    icon: '/favicon.ico', // Create a favicon and place it in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <FloatingWhatsApp />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
