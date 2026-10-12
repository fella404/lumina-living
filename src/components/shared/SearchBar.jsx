import { useNavigate } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import { useSearchStore } from "../../store/searchStore";
import Button from "../ui/Button";

const statusOptions = [
  { value: "sell", label: "For Sale" },
  { value: "rent", label: "For Rent" },
];

const typeOptions = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "townhouse", label: "Townhouse" },
  { value: "studio", label: "Studio" },
];

const SearchBar = () => {
  const navigate = useNavigate();
  const { status, type, query, setStatus, setType, setQuery } =
    useSearchStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    if (type) params.set("type", type);
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    navigate(qs ? `/properties?${qs}` : "/properties");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-lg md:rounded-full border border-border bg-card p-3 shadow-card sm:flex-row sm:items-center sm:gap-0"
    >
      <div className="relative inline-block w-full sm:w-auto">
        <select
          aria-label="Status properti"
          value={status ?? ""}
          onChange={(event) =>
            setStatus(event.target.value || null)
          }
          className="appearance-none bg-transparent pl-3 pr-10 py-1.5 text-sm text-foreground sm:border-e sm:border-primary w-full focus:outline-none"
        >
          <option value="">Any Status</option>
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Ikon dari Lucide React */}
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      <div className="relative inline-block w-full sm:w-auto">
        <select
          aria-label="Tipe properti"
          value={type ?? ""}
          onChange={(event) =>
            setType(event.target.value || null)
          }
          className="appearance-none bg-transparent pl-4 pr-10 py-1.5 text-sm text-foreground sm:border-e sm:border-primary w-full focus:outline-none"
        >
          <option value="">Any Type</option>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      <input
        type="search"
        aria-label="Cari lokasi atau nama proyek"
        placeholder="Search location or property name"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />

      <Button type="submit" size="md">
        <Search size={16} aria-hidden />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
