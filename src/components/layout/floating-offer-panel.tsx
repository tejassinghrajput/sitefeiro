"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function FloatingOfferPanel() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/90 text-primary-foreground backdrop-blur-sm p-4 shadow-lg animate-fade-in-up">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gift className="h-6 w-6" />
          <p className="font-semibold">
            <span className="hidden sm:inline">⚡ Get Your Website for </span>₹1,000 →
          </p>
        </div>
        <Button asChild variant="secondary" size="sm" className="text-primary">
          <Link href="/pricing">Book Now</Link>
        </Button>
      </div>
    </div>
  );
}
