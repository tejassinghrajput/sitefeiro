import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons';

const WHATSAPP_LINK = "https://wa.me/917042107933?text=Hi!%20I'm%20interested%20in%20getting%20a%20website%20built.";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button asChild size="icon" className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-transform hover:scale-110">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </Button>
    </div>
  );
}
