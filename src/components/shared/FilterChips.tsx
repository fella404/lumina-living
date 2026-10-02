import Button from "../ui/Button";

interface FilterOption {
  value: string;
  label: string;
}

const FilterChips = ({
  options,
  selected,
  onChange,
  className = "",
}: {
  options: FilterOption[];
  selected: string;
  onChange: (value: string) => void;
  className?: string;
}) => (
  <div className={`flex flex-wrap items-center gap-2 ${className}`}>
    {options.map((option) => (
      <Button
        key={option.value}
        type="button"
        size="sm"
        variant={selected === option.value ? "primary" : "outline"}
        onClick={() => onChange(option.value)}
        aria-pressed={selected === option.value}
        className="text-sm"
      >
        {option.label}
      </Button>
    ))}
  </div>
);

export default FilterChips;
