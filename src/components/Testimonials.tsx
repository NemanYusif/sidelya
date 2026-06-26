import { useStore } from '../store';
import { reviews } from '../data';
import { translations } from '../translations';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const language = useStore((state) => state.language);
  const t = translations[language];

  return (
    <section 
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 font-sans transition-colors duration-300"
      id="testimonials-section"
    >
      <div className="text-center max-w-3xl mx-auto mb-12" id="testimonials-heading-group">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50" id="testimonials-title">
          {t.testimonialsTitle}
        </h2>
        <div className="h-0.5 w-12 bg-neutral-900 dark:bg-neutral-50 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="testimonials-grid">
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="flex flex-col justify-between p-6 rounded-xl border transition-all duration-300
              bg-white border-stone-200 shadow-xs
              dark:bg-[#111827] dark:border-neutral-850"
            id={`testimonial-card-${review.id}`}
          >
            <div>
              {/* Stars */}
              <div className="flex gap-1.5 mb-4" id={`testimonial-stars-${review.id}`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400" 
                    aria-hidden="true" 
                  />
                ))}
              </div>

              {/* Comment text */}
              <p 
                className="text-sm font-light leading-relaxed text-stone-600 dark:text-stone-300 italic"
                id={`testimonial-comment-${review.id}`}
              >
                " {review.comment[language]} "
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 pt-4 border-t border-stone-100 dark:border-stone-900" id={`testimonial-author-${review.id}`}>
              <h4 className="text-sm font-bold tracking-wide text-stone-900 dark:text-stone-100 uppercase">
                {review.name}
              </h4>
              <span className="text-[9px] text-stone-400 uppercase tracking-widest font-sans mt-0.5 block">
                Verified Customer
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
