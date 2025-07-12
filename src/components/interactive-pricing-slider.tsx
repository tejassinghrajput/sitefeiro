"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pageTiers = [
  { pages: 1, price: 4999 },
  { pages: 5, price: 7999 },
  { pages: 10, price: 14999 },
  { pages: 15, price: 21999 },
  { pages: 20, price: 27999 },
];

export function InteractivePricingSlider() {
  const [pages, setPages] = useState(5);

  const getPrice = (numPages: number) => {
    if (numPages <= 1) return 4999;
    if (numPages <= 5) return 7999;
    if (numPages <= 10) return 14999;
    if (numPages <= 15) return 21999;
    return 27999;
  };

  const price = getPrice(pages);

  return (
    <Card className="bg-white/60 dark:bg-black/60 backdrop-blur-lg border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center font-headline text-2xl">
          Estimate Your Website Cost
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="text-muted-foreground">Number of Pages:</span>
          <Badge variant="secondary" className="text-lg">{pages}</Badge>
        </div>
        <Slider
          defaultValue={[5]}
          max={20}
          min={1}
          step={1}
          onValueChange={(value) => setPages(value[0])}
        />
        <div className="text-center mt-6">
          <p className="text-muted-foreground">Estimated Price:</p>
          <p className="font-headline text-4xl font-bold">
            ₹{price.toLocaleString("en-IN")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
