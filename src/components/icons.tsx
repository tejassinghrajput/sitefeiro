import React from 'react';

export const ECommerceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="ecomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
       <linearGradient id="ecomShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0"/>
        <stop offset="50%" stopColor="white" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    
    <rect width="100" height="75" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1"/>
    
    <path d="M15 20 H 85 V 65 H 15 Z" fill="hsl(var(--muted))" rx="4"/>
    <path d="M15 20 H 85 V 32 H 15 Z" fill="url(#ecomGradient)" rx="4"/>
    <circle cx="22" cy="26" r="2" fill="white" opacity="0.5"/>
    <rect x="30" y="24" width="20" height="4" rx="2" fill="white" opacity="0.7"/>

    <rect x="25" y="40" width="22" height="15" rx="2" fill="#34d399"/>
    <rect x="53" y="40" width="22" height="15" rx="2" fill="#60a5fa"/>
    
    <rect x="20" y="58" width="60" height="5" rx="2.5" fill="hsl(var(--primary))"/>
    <rect x="0" y="0" width="100" height="75" rx="8" fill="url(#ecomShine)" />
  </svg>
);


export const CorporateWebsiteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <linearGradient id="corpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8"/>
            <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
    </defs>
    <rect width="100" height="75" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1"/>
    
    <rect x="15" y="15" width="70" height="50" rx="4" fill="hsl(var(--muted))"/>
    
    <rect x="15" y="15" width="70" height="12" rx="4" fill="url(#corpGradient)"/>
    <circle cx="21" cy="21" r="2" fill="white" opacity="0.5"/>
    <circle cx="27" cy="21" r="2" fill="white" opacity="0.5"/>
    
    <rect x="25" y="35" width="25" height="20" rx="2" fill="#fb923c"/>
    <path d="M28,42 h19 m-19,5 h19 m-19,5 h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    
    <rect x="55" y="35" width="20" height="5" rx="2" fill="hsl(var(--primary))" opacity="0.7"/>
    <rect x="55" y="43" width="20" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5"/>
    <rect x="55" y="48" width="20" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5"/>
    <rect x="55" y="53" width="15" height="2" rx="1" fill="hsl(var(--muted-foreground))" opacity="0.5"/>
  </svg>
);


export const PortfolioShowcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047"/>
            <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2"/>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <rect width="100" height="75" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1"/>
    
    <rect x="12" y="12" width="40" height="25" rx="3" fill="#ec4899" transform="rotate(-5 32 24.5)"/>
    <rect x="48" y="22" width="40" height="25" rx="3" fill="#6d28d9" transform="rotate(5 68 34.5)"/>
    <rect x="30" y="40" width="40" height="25" rx="3" fill="#10b981" transform="rotate(2 50 52.5)"/>

    <circle cx="50" cy="38" r="12" fill="url(#portfolioGradient)" filter="url(#dropShadow)"/>
    <path d="M46 35 l8 4 l-8 4 Z" fill="white"/>
  </svg>
);


export const SaasLandingPageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 75" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="75" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1"/>
    
    <rect x="10" y="10" width="80" height="55" rx="4" fill="hsl(var(--background))" />
    <rect x="10" y="10" width="80" height="15" rx="4" fill="hsl(var(--muted))" />

    <rect x="20" y="32" width="25" height="25" rx="3" fill="hsl(var(--primary))"/>
    <rect x="24" y="36" width="17" height="3" fill="white" opacity="0.8" rx="1.5"/>
    <rect x="24" y="42" width="10" height="3" fill="white" opacity="0.8" rx="1.5"/>

    <rect x="55" y="32" width="25" height="5" rx="2.5" fill="#22c55e"/>
    <rect x="55" y="42" width="25" height="5" rx="2.5" fill="#f97316"/>
    <rect x="55" y="52" width="18" height="5" rx="2.5" fill="#eab308"/>
    
    <rect x="70" y="14" width="15" height="7" rx="3.5" fill="hsl(var(--primary))"/>
  </svg>
);


export const FounderPortraitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <linearGradient id="founderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
        <clipPath id="hexagon">
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" />
        </clipPath>
    </defs>
    <rect width="100" height="100" fill="transparent"/>
    <g clipPath="url(#hexagon)">
        <rect width="100" height="100" fill="url(#founderGradient)"/>
        <circle cx="50" cy="45" r="18" fill="rgba(255,255,255,0.2)"/>
        <path d="M 30 110 C 30 80, 70 80, 70 110 Z" fill="rgba(255,255,255,0.2)"/>
    </g>
  </svg>
);


export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.429-9.889 9.891.001 2.245.832 4.387 2.407 6.046l-1.532 5.585 5.63-1.538z"
    />
    <path
      d="M18.384 14.471c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.373.038-.281-.019-.393c-.057-.112-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383-.13-.006-.28-.008-.429-.008s-.377.056-.582.28c-.205.224-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.368 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263z"
    />
  </svg>
);
