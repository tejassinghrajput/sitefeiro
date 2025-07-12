"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Clock, Shield, Zap } from "lucide-react";

const faqData = [
  {
    question: "What is the turnaround time for a website?",
    answer: "Our standard delivery time is 3-5 business days for starter and business websites. The Launch Offer landing page is delivered in 48 hours. Custom projects may take longer depending on the complexity.",
    icon: <Clock className="h-5 w-5 text-primary" />,
  },
  {
    question: "Are there any hidden costs?",
    answer: "No, our pricing is transparent. The price you see is the price you pay. Any additional features or custom work will be quoted separately and agreed upon before we start.",
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
  {
    question: "What if I need more features later?",
    answer: "You can upgrade your plan at any time. We can also add custom features to your website as your business grows. Just reach out to us, and we'll provide a quote.",
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    question: "Do you provide support after the website is launched?",
    answer: "Yes, we provide free minor changes and bug fixes for 30 days after launch. We also offer ongoing maintenance plans for a small monthly fee.",
    icon: <HelpCircle className="h-5 w-5 text-primary" />,
  },
];

export function FaqAccordion() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                {faq.icon}
                <span className="text-lg font-semibold">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
