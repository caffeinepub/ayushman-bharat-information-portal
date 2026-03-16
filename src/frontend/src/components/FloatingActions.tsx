import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingActions() {
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [helpHover, setHelpHover] = useState(false);

  const waMessage = encodeURIComponent(
    "Check out the Ayushman Bharat PM-JAY Information Portal - Free health coverage up to ₹5 lakh for your family! https://pmjay.gov.in",
  );

  return (
    <div
      className="fixed bottom-6 right-5 z-50 flex flex-col gap-3"
      data-ocid="floating.panel"
    >
      {/* WhatsApp Share Button */}
      <div className="relative flex items-center justify-end gap-2">
        {whatsappHover && (
          <div className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/10 bg-card px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Share on WhatsApp
          </div>
        )}
        <a
          href={`https://wa.me/?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          onMouseEnter={() => setWhatsappHover(true)}
          onMouseLeave={() => setWhatsappHover(false)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] active:scale-95"
          data-ocid="floating.primary_button"
        >
          <MessageCircle className="h-6 w-6 fill-white" />
        </a>
      </div>

      {/* Helpline Button */}
      <div className="relative flex items-center justify-end gap-2">
        {helpHover && (
          <div className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/10 bg-card px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            PM-JAY Helpline: 14555
          </div>
        )}
        <a
          href="tel:14555"
          aria-label="Call PM-JAY helpline 14555"
          onMouseEnter={() => setHelpHover(true)}
          onMouseLeave={() => setHelpHover(false)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron text-white shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,160,50,0.5)] active:scale-95"
          data-ocid="floating.secondary_button"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
