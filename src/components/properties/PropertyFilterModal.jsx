import { useState } from "react";
import { regions } from "../../data/regions";
import {
  emptyFilters,
  priceRanges,
  statusLabels,
  typeLabels,
} from "../../lib/propertyFilters";
import FilterChips from "../shared/FilterChips";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const typeOptions = [
  { value: "all", label: "Semua" },
  ...Object.entries(typeLabels).map(([value, label]) => ({ value, label })),
];

const statusOptions = [
  { value: "all", label: "Semua" },
  ...Object.entries(statusLabels).map(([value, label]) => ({ value, label })),
];

const priceOptions = [
  { value: "all", label: "Semua Harga" },
  ...priceRanges.map((range) => ({ value: range.value, label: range.label })),
];

const PropertyFilterModal = ({
  isOpen,
  onClose,
  filters,
  onApply,
}) => {
  // Reset draft ke filter terkini tiap modal dibuka, memakai pola render-phase
  // (bukan useEffect) agar transisi buka/tutup modal tetap beranimasi.
  const [prevOpen, setPrevOpen] = useState(isOpen);
  const [draft, setDraft] = useState(filters);

  if (isOpen !== prevOpen) {
    setPrevOpen(isOpen);
    if (isOpen) setDraft(filters);
  }

  const toggleRegion = (region) => {
    setDraft((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((item) => item !== region)
        : [...prev.regions, region],
    }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Filter Properti"
      footer={
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setDraft(emptyFilters)}
          >
            Reset
          </Button>
          <Button
            type="button"
            onClick={() => {
              onApply(draft);
              onClose();
            }}
          >
            Terapkan
          </Button>
        </div>
      }
    >
      <div className="space-y-6">
        <section>
          <h3 className="mb-2 text-sm font-medium text-foreground">Status</h3>
          <FilterChips
            options={statusOptions}
            selected={draft.status ?? "all"}
            onChange={(value) =>
              setDraft((prev) => ({
                ...prev,
                status: value === "all" ? null : value,
              }))
            }
          />
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-foreground">
            Tipe Properti
          </h3>
          <FilterChips
            options={typeOptions}
            selected={draft.type ?? "all"}
            onChange={(value) =>
              setDraft((prev) => ({
                ...prev,
                type: value === "all" ? null : value,
              }))
            }
          />
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-foreground">
            Range Harga
          </h3>
          <FilterChips
            options={priceOptions}
            selected={draft.price ?? "all"}
            onChange={(value) =>
              setDraft((prev) => ({
                ...prev,
                price: value === "all" ? null : value,
              }))
            }
          />
        </section>

        <section>
          <h3 className="mb-2 text-sm font-medium text-foreground">Region</h3>
          <div className="grid grid-cols-2 gap-2">
            {regions.map((region) => (
              <label
                key={region.id}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/40"
              >
                <input
                  type="checkbox"
                  checked={draft.regions.includes(region.name)}
                  onChange={() => toggleRegion(region.name)}
                  className="h-4 w-4 accent-primary"
                />
                <span>{region.name}</span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default PropertyFilterModal;
