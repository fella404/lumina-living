import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { aboutFeatures } from "../../data/about";

const AboutWhyChooseUs = () => {
  const [openId, setOpenId] = useState(aboutFeatures[0]?.id || "");

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Soft ambient background glow */}
      <div
        className="pointer-events-none absolute bottom-30 left-[5%] h-60 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Kolom Kiri: Visual Image Card */}
          <div className="flex justify-center lg:col-span-5 lg:justify-start">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-card">
              <div className="relative aspect-5/4 w-full overflow-hidden rounded-2xl">
                <img
                  src="/team.webp"
                  alt="Tim Lumina Living berkolaborasi melayani klien"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Header & Accordion List */}
          <div className="flex flex-col lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.18]">
              Built on Trust, Driven by Results
            </h2>

            {/* Accordion List */}
            <div className="mt-8 divide-y divide-border border-y border-border">
              {aboutFeatures.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-4 sm:py-5">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 text-left font-semibold text-foreground transition-colors hover:text-primary focus:outline-none"
                    >
                      <span className="text-base sm:text-lg">{item.title}</span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-foreground" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
