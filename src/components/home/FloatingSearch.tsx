import { useEffect } from "react";
import { Search, X } from "lucide-react";
import { useUiStore } from "../../store/uiStore";
import SearchBar from "../shared/SearchBar";
import Button from "../ui/Button";

const FloatingSearch = ({ visible }: { visible: boolean }) => {
  const isOpen = useUiStore((state) => state.isSearchOverlayOpen);
  const openSearch = useUiStore((state) => state.openSearch);
  const closeSearch = useUiStore((state) => state.closeSearch);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeSearch]);

  const showButton = visible && !isOpen;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian properti"
        aria-hidden={!isOpen}
        inert={!isOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeSearch();
        }}
        className={`fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 transition-opacity duration-300 ease-out ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`w-full max-w-3xl transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-6 scale-95 opacity-0"
          }`}
        >
          <div className="mb-3 flex justify-end">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label="Tutup pencarian"
              onClick={closeSearch}
              className="cursor-pointer p-2"
            >
              <X size={20} />
            </Button>
          </div>
          <SearchBar />
        </div>
      </div>

      <Button
        type="button"
        size="icon"
        onClick={openSearch}
        aria-label="Buka pencarian"
        aria-hidden={!showButton}
        tabIndex={showButton ? 0 : -1}
        className={`fixed bottom-6 right-6 z-40 shadow-card transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          showButton
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-50 opacity-0"
        }`}
      >
        <Search size={18} aria-hidden />
      </Button>
    </>
  );
};

export default FloatingSearch;
