import Button from "../ui/Button";

const RegionCard = ({ region }) => (
  <article className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-border shadow-card">
    <img
      src={region.image}
      alt={region.name}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
    <div className="relative flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
      <h3 className="text-2xl font-semibold text-white">{region.name}</h3>
      <Button
        to={`/regions/${region.slug}`}
        variant="outline"
        size="sm"
        className="border-white/50 text-white hover:border-white/80"
        aria-label={`Lihat properti di ${region.name}`}
      >
        View more
      </Button>
    </div>
  </article>
);

export default RegionCard;
