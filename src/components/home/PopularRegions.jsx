import { motion } from "framer-motion";
import { Link } from "react-router";
import { Compass, ArrowRight } from "lucide-react";
import { regions } from "../../data/regions";
import RegionCard from "../shared/RegionCard";

const POPULAR_REGIONS = regions.slice(0, 5);

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

const PopularRegions = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-foreground">
        Popular Regions
      </h2>
    </div>

    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {POPULAR_REGIONS.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}

      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Link
          to="/regions"
          className="group flex h-full aspect-[16/9] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-card transition-colors hover:border-primary/40"
          aria-label="Lihat semua wilayah"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card">
            <Compass size={22} aria-hidden />
          </span>
          <span className="font-semibold text-card-foreground">
            Explore All Regions
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-primary">
            Lihat semua kota
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PopularRegions;
