import Button from "../ui/Button";
import { aboutStats } from "../../data/about";

const AboutMissionStats = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Soft ambient background glow */}
      <div
        className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[2%] bottom-5 h-50 w-100 rounded-full bg-primary/10 blur-3xl md:bottom-16"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Bagian Atas: Split Content & Visual Image */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Kolom Kiri: Narasi & CTA */}
          <div className="flex flex-col lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
              About Us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.18]">
              Driven by Trust. Powered by Expertise.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Built on years of experience in the leading real estate industry,
              we are here to guide you through every step of finding the best
              living space, maximizing investment value, and ensuring all
              transactions are secure, transparent, and efficient.
            </p>

            <div className="mt-8">
              <Button
                to="/properties"
                variant="primary"
                size="md"
                className="rounded-full px-7 shadow-card"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Kolom Kanan: Visual Card Portrait Bersih */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-primary/10 shadow-card">
                <img
                  src="/team/owner.png"
                  alt="Senior Property Specialist Lumina Living"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Stat Counters */}
        <div className="mt-16 border-t border-border pt-12 md:mt-24 md:pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-start px-2 md:px-8 ${
                  index !== aboutStats.length - 1
                    ? "md:border-r md:border-border"
                    : ""
                }`}
              >
                <span className="text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm text-muted-foreground sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionStats;
