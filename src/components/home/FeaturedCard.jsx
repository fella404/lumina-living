import { motion } from "framer-motion";
import { Link } from "react-router";
import { MapPin } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

const FeaturedCard = ({ property, className = "" }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{
      scale: 1.015,
      boxShadow: "0px 12px 32px -6px rgba(17, 24, 39, 0.18)",
      transition: { type: "spring", stiffness: 300, damping: 22 },
    }}
    className={`group relative overflow-hidden rounded-2xl border border-border shadow-card ${className}`}
  >
    <Link to={`/properties/${property.slug}`} className="block h-full w-full">
      <img
        src={property.image}
        alt={property.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Subtle bottom gradient to enhance card text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

      {/* Floating Info Pill / Card */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-x-0 bottom-0 p-3 sm:p-4 pointer-events-none"
      >
        <div className="rounded-xl border border-border/60 bg-card/95 p-3.5 shadow-card backdrop-blur-md transition-colors group-hover:border-primary/40">
          <h3 className="line-clamp-1 font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {property.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs capitalize text-muted-foreground sm:text-sm">
            <MapPin size={13} className="shrink-0 text-muted-foreground" aria-hidden />
            <span>
              {property.type} &bull; {property.city}
            </span>
          </p>
        </div>
      </motion.div>
    </Link>
  </motion.article>
);

export default FeaturedCard;
