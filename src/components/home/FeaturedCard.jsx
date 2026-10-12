const FeaturedCard = ({ property, className = "" }) => (
  <article
    className={`group relative overflow-hidden rounded-xl border border-border shadow-card ${className}`}
  >
    <img
      src={property.image}
      alt={property.name}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
      <div className="rounded-lg bg-card/95 p-3 shadow-card">
        <h3 className="font-semibold text-card-foreground">{property.name}</h3>
        <p className="mt-0.5 text-sm capitalize text-muted-foreground">
          {property.type} · {property.city}
        </p>
      </div>
    </div>
  </article>
);

export default FeaturedCard;
