"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const headlines = [
  "Build Stunning Websites",
  "Launch Your Online Store",
  "Create Your Digital Presence",
];

export const TypewriterHeadline: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (subIndex === headlines[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % headlines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, isClient]);
  
  if (!isClient) {
    return (
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Build Stunning Websites in <span className="text-primary">Just 3 Days</span>
        </h1>
    );
  }

  return (
    <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
      {`${headlines[index].substring(0, subIndex)}`}
      <span className="text-primary">
        in Just 3 Days
      </span>
      <span className={cn("inline-block w-1 h-10 md:h-16 bg-foreground ml-2 animate-pulse", { "hidden": reverse })} />
    </h1>
  );
};
