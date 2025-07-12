
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/layout/floating-whatsapp';
import { ThemeProvider } from '@/components/theme-provider';
import Head from 'next/head';
import { FRONTEND_URL } from '@/config/constants';
import { BackToTop } from '@/components/layout/back-to-top';
import { FloatingOfferPanel } from '@/components/layout/floating-offer-panel';

export const metadata: Metadata = {
  title: {
    default: 'SiteFeiro: We build websites in 3 days — starting at ₹4,999',
    template: '%s | SiteFeiro',
  },
  description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
  keywords: ['fast websites', 'affordable websites', 'website development', 'Next.js developer', 'React developer', 'web design India'],
  openGraph: {
    title: 'SiteFeiro: We build websites in 3 days — starting at ₹4,999',
    description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
    url: FRONTEND_URL, 
    siteName: 'SiteFeiro',
    images: [
      {
        url: `${FRONTEND_URL}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: 'SiteFeiro - Fast Website Builder'
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteFeiro: We build websites in 3 days — starting at ₹4,999',
    description: 'Fast. Affordable. SEO-Ready. Get your professional website built by experts in just 3 days.',
    images: [`${FRONTEND_URL}/og-image.png`], 
  },
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': FRONTEND_URL,
    'name': 'SiteFeiro',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${FRONTEND_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <FloatingWhatsApp />
          <BackToTop />
          <FloatingOfferPanel />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
