"use client"

import React from 'react';
import Typewriter from 'typewriter-effect';

export const TypewriterHeadline: React.FC = () => {
  return (
    <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
      <Typewriter
        options={{
          strings: [
            'We Build Websites @ ₹1000',
            'Lightning Fast Websites',
            'MNC-Level Design Quality',
            'Websites That Rank on Google'
          ],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </h1>
  );
};
