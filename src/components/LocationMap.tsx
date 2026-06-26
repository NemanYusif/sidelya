import { useStore } from '../store';
import { translations } from '../translations';
import { MapPin, Clock, Phone, Send, Map } from 'lucide-react';

export default function LocationMap() {
  const language = useStore((state) => state.language);
  const t = translations[language];

  // Google Maps Directions link for 142 Nizami Street, Baku
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=142+Nizami+St+Baku";

  return (
    <section 
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 font-sans transition-colors duration-300"
      id="location-section"
    >
      <div 
        className="overflow-hidden rounded-xl border shadow-xs
          bg-white border-stone-200
          dark:bg-[#111827] dark:border-neutral-850"
        id="location-container"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12" id="location-grid">
          
          {/* Store Info Sidebar (5 cols) */}
          <div 
            className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between"
            id="store-info-pane"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-6
                bg-neutral-100 border-neutral-200 text-neutral-800
                dark:bg-neutral-800/50 dark:border-neutral-700 dark:text-neutral-200"
                id="info-badge"
              >
                <Map className="h-3.5 w-3.5" />
                {t.locationTitle}
              </div>

              <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-3" id="info-heading">
                {t.aboutShop}
              </h2>
              
              <p className="text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400 mb-8" id="info-description">
                {t.aboutShopDesc}
              </p>

              {/* Information Cards */}
              <div className="space-y-6" id="info-details-list">
                
                {/* Working Hours */}
                <div className="flex gap-4" id="info-item-hours">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-850 dark:bg-neutral-800 dark:text-neutral-200">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {t.workingHours}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {t.workingHoursVal}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4" id="info-item-address">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-850 dark:bg-neutral-800 dark:text-neutral-200">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {t.address}
                    </h4>
                    <p className="mt-1 text-sm font-light leading-relaxed text-neutral-850 dark:text-neutral-200">
                      {t.addressVal}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4" id="info-item-phone">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-850 dark:bg-neutral-800 dark:text-neutral-200">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {t.phone}
                    </h4>
                    <a 
                      href="tel:+994551234567"
                      className="mt-1 block text-sm font-medium text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white transition-colors underline decoration-dotted decoration-neutral-350"
                    >
                      {t.phoneVal}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4" id="info-item-whatsapp">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-850 dark:bg-neutral-800 dark:text-neutral-200">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      {t.whatsapp}
                    </h4>
                    <a 
                      href="https://wa.me/994551234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-neutral-800 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white transition-colors underline decoration-dotted decoration-neutral-350"
                    >
                      {t.whatsappVal}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Get Directions */}
            <div className="mt-10" id="info-directions-btn-wrap">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-[#3A3A3A] hover:bg-stone-800 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
                id="info-directions-btn"
              >
                <MapPin className="h-3.5 w-3.5" />
                {t.getDirections}
              </a>
            </div>

          </div>

          {/* Map Embed Panel (7 cols) */}
          <div 
            className="h-[380px] lg:h-auto lg:col-span-7 relative min-h-[400px] border-t lg:border-t-0 lg:border-l border-neutral-200/80 dark:border-neutral-800/80"
            id="map-embed-pane"
          >
            <iframe
              title="Artisan Sweet Shop Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4287049444105!2d49.8396593!3d40.377196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6092040001%3A0x9d11fb719a957d19!2sNizami%20St%2C%20Bak%C4%B1!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[15%] brightness-[0.96] dark:grayscale-[50%] dark:invert-[90%] dark:hue-rotate-[180deg] dark:brightness-[0.7] dark:contrast-[1.2]"
              id="google-maps-iframe"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
