import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import Button from "../ui/Button";

const Testimonials = ({
  kicker = "Testimonials",
  title = "Reviews That\nSpeak Volumes",
  description = "Hear how our platform has helped families find their dream homes and investors grow their portfolios with confidence.",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      {/* Kicker (Top Container) */}
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
          {kicker}
        </span>
      </div>

      {/* Heading & Description (Split Container) */}
      <div className="mt-2 grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h2 className="whitespace-pre-line text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.18]">
            {title}
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} className="mt-6 overflow-hidden">
        <div className="flex touch-pan-y items-stretch py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 lg:basis-1/3"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} dari ${testimonials.length}`}
            >
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6">
                {/* Star Rating */}
                <div className="flex gap-1 text-amber-400" aria-label="5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      aria-hidden
                      className="fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <img
                    src={testimonial.avatar}
                    alt={`Foto ${testimonial.name}`}
                    loading="lazy"
                    className="h-9 w-9 shrink-0 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (Bottom Right) */}
      <div className="mt-6 flex justify-end gap-3">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Testimoni sebelumnya"
          onClick={scrollPrev}
          className="rounded-full border border-border bg-card p-2.5 text-foreground shadow-card hover:bg-background"
        >
          <ChevronLeft size={20} aria-hidden />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Testimoni berikutnya"
          onClick={scrollNext}
          className="rounded-full border border-border bg-card p-2.5 text-foreground shadow-card hover:bg-background"
        >
          <ChevronRight size={20} aria-hidden />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
