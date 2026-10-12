import { properties } from "../../data/properties";
import FeaturedCard from "./FeaturedCard";

const featuredProperties = properties.filter((property) => property.featured);

const FeaturedProperties = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-foreground">
        Featured Property
      </h2>
    </div>
    <div className="grid gap-4 md:grid-cols-[1.17fr_1fr] md:grid-rows-2">
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
    </div>
  </section>
);

export default FeaturedProperties;
