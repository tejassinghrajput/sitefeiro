"use client"

import * as React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I didn’t expect a full-feature site for this price!",
    name: "Ashish",
    title: "Financial Advisor",
    avatar: "A",
  },
  {
    quote: "I got clients from the same week I launched my website.",
    name: "Dr. Ritu",
    title: "Dermatologist",
    avatar: "R",
  },
  {
    quote: "Felt like working with an agency — but way faster & better.",
    name: "Yash",
    title: "Founder, YSmart Ads",
    avatar: "Y",
  },
  {
    quote: "The quality of the code and the final product exceeded my expectations. Highly recommended!",
    name: "Priya",
    title: "Startup Founder",
    avatar: "P",
  },
  {
    quote: "Working with them was a breeze. They understood our needs perfectly and delivered on time.",
    name: "Mark",
    title: "E-commerce Manager",
    avatar: "M",
  },
]

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
               <Card className="flex h-full flex-col transition-transform hover:scale-105 hover:shadow-xl bg-background">
                 <CardContent className="pt-6 flex-grow">
                   <Quote className="h-8 w-8 text-primary/50 mb-4" />
                   <p className="text-lg font-medium text-foreground">"{testimonial.quote}"</p>
                 </CardContent>
                 <CardFooter className="mt-auto flex items-center gap-4 bg-muted/50 p-4">
                   <Avatar>
                     <AvatarFallback className="bg-primary text-primary-foreground font-bold">{testimonial.avatar}</AvatarFallback>
                   </Avatar>
                   <div>
                     <p className="font-semibold">{testimonial.name}</p>
                     <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                   </div>
                 </CardFooter>
               </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  )
}
