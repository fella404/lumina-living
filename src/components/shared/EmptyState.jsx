import { RotateCcw } from "lucide-react";
import EmptyStateIllustration from "../../assets/empty-state.svg?react";
import Button from "../ui/Button";

const EmptyState = ({
  heading,
  description,
  canReset,
  onReset,
  resetLabel = "Reset All Filters",
}) => (
  <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-xl bg-card p-8 text-center">
    <EmptyStateIllustration
      aria-hidden="true"
      focusable="false"
      className="animate-empty-float h-44 w-auto sm:h-52 md:h-60"
    />

    <h2 className="animate-empty-fade-in mt-6 text-lg font-semibold text-foreground sm:text-xl">
      {heading}
    </h2>
    <p className="animate-empty-fade-in mt-2 max-w-md text-sm text-muted-foreground">
      {description}
    </p>

    {canReset && (
      <Button
        type="button"
        variant="primary"
        className="animate-empty-fade-in mt-6"
        onClick={onReset}
      >
        <RotateCcw size={16} aria-hidden />
        {resetLabel}
      </Button>
    )}
  </div>
);

export default EmptyState;
