import { create } from "zustand";

interface UiState {
  isSearchOverlayOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useUiStore = create<UiState>()((set) => ({
  isSearchOverlayOpen: false,
  openSearch: () => set({ isSearchOverlayOpen: true }),
  closeSearch: () => set({ isSearchOverlayOpen: false }),
}));
