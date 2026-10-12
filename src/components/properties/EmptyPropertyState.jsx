import { RotateCcw } from "lucide-react";
import EmptyStateIllustration from "../../assets/empty-state.svg?react";
import Button from "../ui/Button";

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
}) => {
  const canReset = hasSearchQuery || hasActiveFilters;

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl bg-card p-8 text-center">
      <EmptyStateIllustration
        aria-hidden="true"
        focusable="false"
        className="animate-empty-float h-44 w-auto sm:h-52 md:h-60"
      />

      <h2 className="animate-empty-fade-in mt-6 text-lg font-semibold text-foreground sm:text-xl">
        {emptyStateHeading(hasSearchQuery, hasActiveFilters)}
      </h2>
      <p className="animate-empty-fade-in mt-2 max-w-md text-sm text-muted-foreground">
        Try adjusting your search or filters to find more properties.
      </p>

      {canReset && (
        <Button
          type="button"
          variant="primary"
          className="animate-empty-fade-in mt-6"
          onClick={onReset}
        >
          <RotateCcw size={16} aria-hidden />
          Reset All Filters
        </Button>
      )}
    </div>
  );
};

export default EmptyPropertyState;
