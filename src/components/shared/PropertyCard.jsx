import { motion } from "framer-motion";
import { Link } from "react-router";
import { Bath, Bed, Maximize2 } from "lucide-react";
import { formatRupiah } from "../../lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const PropertyCard = ({ property }) => (
  <motion.article
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className="h-full"
  >
    <Link
      to={`/properties/${property.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium capitalize text-primary-foreground">
            {property.type}
          </span>
          <span className="rounded-full bg-card/95 px-2.5 py-1 text-xs font-medium text-card-foreground">
            {property.status === "sell" ? "For Sale" : "For Rent"}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 pt-8 text-sm font-medium text-white">
          {property.city}, {property.region}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-foreground">{property.name}</h3>
        <p className="mt-1 text-sm font-medium text-foreground">
          {formatRupiah(property.price)}
          {property.status === "rent" && (
            <span className="text-muted-foreground"> / tahun</span>
          )}
        </p>

        <div className="mt-auto flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Bed size={16} aria-hidden />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} aria-hidden />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={16} aria-hidden />
            {property.area} m²
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

export default PropertyCard;
