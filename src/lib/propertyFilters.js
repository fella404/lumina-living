// Khusus halaman Properties: 16 item awal, dan +16 tiap "View More".
export const PAGE_SIZE = 16;

export const typeLabels = {
  house: "House",
  apartment: "Apartment",
  villa: "Villa",
  townhouse: "Townhouse",
  studio: "Studio",
};

export const statusLabels = {
  sell: "For Sale",
  rent: "For Rent",
};

export const priceRanges = [
  { value: "lt500m", label: "Di bawah Rp 500 Juta", max: 500_000_000 },
  {
    value: "500m-1b",
    label: "Rp 500 Juta – 1 Miliar",
    min: 500_000_000,
    max: 1_000_000_000,
  },
  {
    value: "1b-3b",
    label: "Rp 1 – 3 Miliar",
    min: 1_000_000_000,
    max: 3_000_000_000,
  },
  {
    value: "3b-5b",
    label: "Rp 3 – 5 Miliar",
    min: 3_000_000_000,
    max: 5_000_000_000,
  },
  {
    value: "5b-10b",
    label: "Rp 5 – 10 Miliar",
    min: 5_000_000_000,
    max: 10_000_000_000,
  },
  { value: "gt10b", label: "Di atas Rp 10 Miliar", min: 10_000_000_000 },
];

const PRICE_RANGE_VALUES = priceRanges.map((range) => range.value);

export const emptyFilters = {
  q: "",
  status: null,
  type: null,
  regions: [],
  price: null,
};

const VALID_TYPES = Object.keys(typeLabels);
const VALID_STATUSES = ["sell", "rent"];

export function parseFilters(params) {
  const statusParam = params.get("status");
  const typeParam = params.get("type");
  const regionParam = params.get("region");
  const priceParam = params.get("price");

  return {
    q: params.get("q") ?? "",
    status: VALID_STATUSES.includes(statusParam) ? statusParam : null,
    type: VALID_TYPES.includes(typeParam) ? typeParam : null,
    regions: regionParam
      ? regionParam
          .split(",")
          .map((region) => region.trim())
          .filter(Boolean)
      : [],
    price: PRICE_RANGE_VALUES.includes(priceParam) ? priceParam : null,
  };
}

export function filtersToSearchParams(filters) {
  const params = new URLSearchParams();
  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.status) params.set("status", filters.status);
  if (filters.type) params.set("type", filters.type);
  if (filters.regions.length) params.set("region", filters.regions.join(","));
  if (filters.price) params.set("price", filters.price);
  return params;
}

export function filterProperties(properties, filters) {
  const query = filters.q.trim().toLowerCase();
  const priceRange = priceRanges.find((range) => range.value === filters.price);

  return properties.filter((property) => {
    if (filters.status && property.status !== filters.status) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.regions.length && !filters.regions.includes(property.region))
      return false;
    if (priceRange) {
      if (priceRange.min !== undefined && property.price < priceRange.min)
        return false;
      if (priceRange.max !== undefined && property.price >= priceRange.max)
        return false;
    }
    if (query) {
      const haystack =
        `${property.name} ${property.city} ${property.region}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

export function countActiveFilters(filters) {
  let count = 0;
  if (filters.status) count += 1;
  if (filters.type) count += 1;
  if (filters.regions.length) count += 1;
  if (filters.price) count += 1;
  return count;
}
