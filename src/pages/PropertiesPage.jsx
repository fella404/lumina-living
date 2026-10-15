import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { properties } from "../data/properties";
import {
  PAGE_SIZE,
  countActiveFilters,
  emptyFilters,
  filterProperties,
  filtersToSearchParams,
  parseFilters,
} from "../lib/propertyFilters";
import PropertyGrid from "../components/shared/PropertyGrid";
import Button from "../components/ui/Button";
import PropertiesToolbar from "../components/properties/PropertiesToolbar";
import PropertyFilterModal from "../components/properties/PropertyFilterModal";
import EmptyPropertyState from "../components/properties/EmptyPropertyState";

const PropertiesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);
  const filtered = useMemo(
    () => filterProperties(properties, filters),
    [filters],
  );

  const filterKey = searchParams.toString();

  // Pagination ikut ter-reset otomatis saat filter berubah: jumlah tampil
  // hanya dianggap valid untuk filterKey yang sama.
  const [pagination, setPagination] = useState({
    key: filterKey,
    count: PAGE_SIZE,
  });
  const visibleCount =
    pagination.key === filterKey ? pagination.count : PAGE_SIZE;

  const updateFilters = (next) => {
    setSearchParams(filtersToSearchParams(next), { replace: true });
  };

  const openFilters = () => setIsFilterOpen(true);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const activeFilterCount = countActiveFilters(filters);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Properties
        </h1>
        <p className="mt-2 text-muted-foreground">
          Discover properties for sale and rent throughout Indonesia.
        </p>
      </div>

      <PropertiesToolbar
        filters={filters}
        resultCount={filtered.length}
        activeFilterCount={activeFilterCount}
        onQueryChange={(query) => updateFilters({ ...filters, q: query })}
        onTypeChange={(type) =>
          updateFilters({
            ...filters,
            type: type === "all" ? null : type,
          })
        }
        onOpenFilters={openFilters}
      />

      <div className="mt-8">
        {visible.length > 0 ? (
          <PropertyGrid key={filterKey} properties={visible} />
        ) : (
          <EmptyPropertyState
            hasSearchQuery={filters.q.trim().length > 0}
            hasActiveFilters={activeFilterCount > 0}
            onReset={() => updateFilters(emptyFilters)}
          />
        )}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={() =>
              setPagination({
                key: filterKey,
                count: visibleCount + PAGE_SIZE,
              })
            }
          >
            View More
          </Button>
        </div>
      )}

      <PropertyFilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApply={updateFilters}
      />
    </main>
  );
};

export default PropertiesPage;
