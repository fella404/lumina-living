const partners = [
  { name: "Sinarmas Land", logo: "/partners-logo/sinarmas-land.webp" },
  { name: "Ciputra Group", logo: "/partners-logo/ciputra.webp" },
  { name: "Agung Podomoro", logo: "/partners-logo/agung-podomoro.webp" },
  { name: "Summarecon", logo: "/partners-logo/summarecon.webp" },
  { name: "Pakuwon Group", logo: "/partners-logo/pakuwon.webp" },
];

const AboutPartners = () => {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-8 md:py-10 mt-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        {/* Label judul di kiri */}
        <p className="shrink-0 text-sm font-semibold text-foreground sm:text-lg">
          Our Trusted Partners
        </p>

        {/* Deretan Logo Partner */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              className="h-7 w-auto object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
