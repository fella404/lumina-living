import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import Button from "./Button";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-8 transition-opacity duration-300 ease-out sm:items-center ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`w-full max-w-lg rounded-2xl border border-border bg-card shadow-card outline-none transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Tutup"
            onClick={onClose}
            className="cursor-pointer p-2"
          >
            <X size={18} />
          </Button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-4">{children}</div>

        {footer && <div className="border-t border-border p-4">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
