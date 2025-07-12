
"use client";

import { Twitter, Facebook, Linkedin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { WhatsAppIcon } from './icons';

interface SharePostProps {
  url: string;
  title: string;
}

export function SharePost({ url, title }: SharePostProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Copied!",
      description: "Link copied to clipboard.",
    });
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
     {
      name: 'WhatsApp',
      icon: <WhatsAppIcon className="h-5 w-5" />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
    }
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Share:</span>
      {shareLinks.map((link) => (
        <Button key={link.name} variant="outline" size="icon" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
            {link.icon}
          </a>
        </Button>
      ))}
      <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link">
        <Copy className="h-5 w-5" />
      </Button>
    </div>
  );
}

    