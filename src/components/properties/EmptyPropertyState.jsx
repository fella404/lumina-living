import EmptyState from "../shared/EmptyState";

const emptyStateHeading = (hasSearchQuery, hasActiveFilters) => {
  if (hasSearchQuery && hasActiveFilters)
    return "No properties match your search and filters";
  if (hasSearchQuery) return "No properties match your search";
  if (hasActiveFilters) return "No properties match your filters";
  return "No properties available right now";
};

const EmptyPropertyState = ({
  hasSearchQuery,
  hasActiveFilters,
  onReset,
}) => (
  <EmptyState
    heading={emptyStateHeading(hasSearchQuery, hasActiveFilters)}
    description="Try adjusting your search or filters to find more properties."
    canReset={hasSearchQuery || hasActiveFilters}
    onReset={onReset}
  />
);

export default EmptyPropertyState;
