import type { Property } from "../../types/property";
import PropertyCard from "./PropertyCard";

const PropertyGrid = ({
  properties,
  className = "",
}: {
  properties: Property[];
  className?: string;
}) => (
  <div
    className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
  >
    {properties.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </div>
);

export default PropertyGrid;
