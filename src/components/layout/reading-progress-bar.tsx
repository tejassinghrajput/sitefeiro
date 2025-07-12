
"use client";

import { useState, useEffect } from 'react';

export const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const el = document.documentElement;
    const scrollTop = el.scrollTop || document.body.scrollTop;
    const scrollHeight = el.scrollHeight || document.body.scrollHeight;
    const percent = (scrollTop / (scrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-1 bg-primary/20">
      <div className="h-1 bg-primary transition-all duration-75 ease-out" style={{ width: `${width}%` }}></div>
    </div>
  );
};

    