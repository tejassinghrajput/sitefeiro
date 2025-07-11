import React from 'react';

export const ECommerceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="75" rx="4" fill="hsl(var(--card))" />
    <rect x="10" y="10" width="80" height="12" fill="hsl(var(--muted))" />
    <rect x="10" y="30" width="50" height="35" fill="hsl(var(--primary))" />
    <rect x="65" y="30" width="25" height="15" fill="hsl(var(--secondary))" />
    <rect x="65" y="50" width="25" height="15" fill="hsl(var(--secondary))" />
  </svg>
);

export const CorporateWebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="75" rx="4" fill="hsl(var(--card))" />
    <rect x="10" y="10" width="80" height="12" fill="hsl(var(--muted))" />
    <rect x="10" y="30" width="25" height="35" fill="hsl(var(--secondary))" />
    <rect x="40" y="30" width="50" height="8" fill="hsl(var(--primary))" />
    <rect x="40" y="42" width="50" height="4" fill="hsl(var(--muted))" />
    <rect x="40" y="50" width="50" height="4" fill="hsl(var(--muted))" />
    <rect x="40" y="58" width="30" height="4" fill="hsl(var(--muted))" />
  </svg>
);

export const PortfolioShowcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="75" rx="4" fill="hsl(var(--card))" />
    <circle cx="50" cy="38" r="18" fill="hsl(var(--primary))" />
    <rect x="20" y="60" width="60" height="5" fill="hsl(var(--muted))" />
  </svg>
);

export const SaasLandingPageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="75" rx="4" fill="hsl(var(--card))" />
    <rect x="10" y="10" width="80" height="55" rx="2" fill="hsl(var(--muted))" />
    <rect x="15" y="15" width="70" height="45" rx="1" fill="hsl(var(--background))" />
    <rect x="25" y="25" width="20" height="20" fill="hsl(var(--primary))" />
    <rect x="55" y="25" width="25" height="5" fill="hsl(var(--secondary))" />
    <rect x="55" y="35" width="25" height="5" fill="hsl(var(--secondary))" />
    <rect x="55" y="45" width="15" height="5" fill="hsl(var(--secondary))" />
  </svg>
);

export const FounderPortraitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" rx="8" fill="hsl(var(--secondary))" />
    <circle cx="50" cy="40" r="15" fill="hsl(var(--muted))" />
    <path d="M 30 90 C 30 70, 70 70, 70 90 Z" fill="hsl(var(--muted))" />
  </svg>
);
