import { create } from "zustand";

export const useUiStore = create((set) => ({
  isSearchOverlayOpen: false,
  openSearch: () => set({ isSearchOverlayOpen: true }),
  closeSearch: () => set({ isSearchOverlayOpen: false }),
}));
