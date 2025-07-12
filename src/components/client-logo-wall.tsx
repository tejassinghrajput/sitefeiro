"use client";

import Image from 'next/image';

const logos = [
  { src: '/clients/logo1.svg', alt: 'Client 1' },
  { src: '/clients/logo2.svg', alt: 'Client 2' },
  { src: '/clients/logo3.svg', alt: 'Client 3' },
  { src: '/clients/logo4.svg', alt: 'Client 4' },
  { src: '/clients/logo5.svg', alt: 'Client 5' },
  { src: '/clients/logo6.svg', alt: 'Client 6' },
];

export function ClientLogoWall() {
  return (
    <div className="bg-background py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Businesses Like Yours
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all">
              <Image src={logo.src} alt={logo.alt} width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
