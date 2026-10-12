import { SlidersHorizontal } from "lucide-react";
import { typeLabels } from "../../lib/propertyFilters";
import FilterChips from "../shared/FilterChips";
import Button from "../ui/Button";

const typeOptions = [
  { value: "all", label: "All" },
  ...Object.entries(typeLabels).map(([value, label]) => ({ value, label })),
];

const PropertiesToolbar = ({
  filters,
  resultCount,
  activeFilterCount,
  onQueryChange,
  onTypeChange,
  onOpenFilters,
}) => (
  <div className="space-y-4">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        {resultCount} properti ditemukan
      </p>

      <div className="flex items-center gap-2">
        <input
          type="search"
          aria-label="Cari properti"
          placeholder="Cari lokasi atau nama properti"
          value={filters.q}
          onChange={(event) => onQueryChange(event.target.value)}
          className="min-w-0 flex-1 rounded-full border border-border bg-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring sm:w-64 sm:flex-none"
        />
        <Button
          type="button"
          variant="outline"
          onClick={onOpenFilters}
          aria-label="Buka filter lengkap"
        >
          <SlidersHorizontal size={16} aria-hidden />
          Filter
          {activeFilterCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>
    </div>

    <FilterChips
      options={typeOptions}
      selected={filters.type ?? "all"}
      onChange={onTypeChange}
    />
  </div>
);

export default PropertiesToolbar;
