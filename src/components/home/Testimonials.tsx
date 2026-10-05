import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import Button from "../ui/Button";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16 md:px-12 lg:px-6">
      <div className="mb-16 flex items-center justify-center gap-4">
        <h2 className="text-3xl font-semibold text-foreground">
          What people said about us
        </h2>
      </div>

      <div className="relative">
        {/* Tombol Prev di sisi kiri */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Testimoni sebelumnya"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 rounded-full border border-border bg-card p-2.5 text-foreground shadow-card hover:bg-background cursor-pointer"
        >
          <ChevronLeft size={20} aria-hidden />
        </Button>

        {/* Viewport Embla */}
        <div ref={emblaRef} className="-mx-2 overflow-hidden pb-3">
          <div className="flex touch-pan-y">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="min-w-0 shrink-0 grow-0 basis-full px-2"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} dari ${testimonials.length}`}
              >
                <article className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card md:flex-row md:items-center md:gap-8 md:p-10 lg:p-12">
                  {/* Kolom foto: di dalam card dengan frame/backdrop halus */}
                  <div className="flex shrink-0 items-center justify-center">
                    <div className="relative flex h-48 w-40 items-end justify-center overflow-hidden rounded-2xl sm:h-56 sm:w-48 md:h-64 md:w-52 lg:h-72 lg:w-60">
                      <img
                        src={testimonial.avatar}
                        alt={`Foto ${testimonial.name}`}
                        loading="lazy"
                        className="h-full w-full object-contain object-bottom grayscale transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Kolom teks: kutipan, nama, role */}
                  <div className="flex flex-1 flex-col justify-center gap-4 text-center md:text-left">
                    <Quote
                      size={36}
                      aria-hidden
                      className="mx-auto shrink-0 rotate-180 text-primary/30 md:mx-0"
                    />
                    <p className="text-base leading-relaxed text-foreground/90 sm:text-lg md:text-xl lg:text-2xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="pt-2">
                      <p className="text-base font-semibold text-foreground md:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Next di sisi kanan */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label="Testimoni berikutnya"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-2 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 rounded-full border border-border bg-card p-2.5 text-foreground shadow-card hover:bg-background cursor-pointer"
        >
          <ChevronRight size={20} aria-hidden />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
