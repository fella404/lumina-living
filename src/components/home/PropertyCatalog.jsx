import { useState } from "react";
import { properties } from "../../data/properties";
import FilterChips from "../shared/FilterChips";
import PropertyGrid from "../shared/PropertyGrid";
import Button from "../ui/Button";

const PAGE_SIZE = 8;

const typeLabels = {
  house: "House",
  apartment: "Apartment",
  villa: "Villa",
  townhouse: "Townhouse",
  studio: "Studio",
};

const filterOptions = [
  { value: "all", label: "All" },
  ...[...new Set(properties.map((property) => property.type))].map((type) => ({
    value: type,
    label: typeLabels[type],
  })),
];

const PropertyCatalog = () => {
  const [activeType, setActiveType] = useState("all");

  const filtered =
    activeType === "all"
      ? properties
      : properties.filter((property) => property.type === activeType);

  const visible = filtered.slice(0, PAGE_SIZE);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-foreground">
          Property Catalog
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <FilterChips
          options={filterOptions}
          selected={activeType}
          onChange={(value) => setActiveType(value)}
        />
      </div>

      <PropertyGrid key={activeType} properties={visible} />

      <div className="mt-8 flex justify-center">
        <Button variant="primary" size="lg" to="/properties">
          View More
        </Button>
      </div>
    </section>
  );
};

export default PropertyCatalog;
