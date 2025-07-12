"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-20 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity hover:bg-primary/90",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Go to top</span>
    </Button>
  );
}
