import { create } from "zustand";
import type { PropertyStatus, PropertyType } from "../types/property";

interface SearchState {
  status: PropertyStatus | null;
  type: PropertyType | null;
  query: string;
  setStatus: (status: PropertyStatus | null) => void;
  setType: (type: PropertyType | null) => void;
  setQuery: (query: string) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchState>()((set) => ({
  status: null,
  type: null,
  query: "",
  setStatus: (status) => set({ status }),
  setType: (type) => set({ type }),
  setQuery: (query) => set({ query }),
  reset: () => set({ status: null, type: null, query: "" }),
}));
