import { motion } from "framer-motion";
import { properties } from "../../data/properties";
import FeaturedCard from "./FeaturedCard";

const featuredProperties = properties.filter((property) => property.featured);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FeaturedProperties = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={headerVariants}
      className="mb-8"
    >
      <h2 className="text-3xl font-semibold text-foreground">
        Featured Property
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Handpicked premier properties available for you.
      </p>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-4 md:grid-cols-[1.17fr_1fr] md:grid-rows-2"
    >
      {featuredProperties.map((property, index) => (
        <FeaturedCard
          key={property.id}
          property={property}
          className={
            index === 0
              ? "aspect-video md:aspect-auto md:row-span-2"
              : "aspect-video"
          }
        />
      ))}
    </motion.div>
  </section>
);

export default FeaturedProperties;
