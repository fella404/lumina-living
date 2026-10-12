import { create } from "zustand";

export const useSearchStore = create((set) => ({
  status: null,
  type: null,
  query: "",
  setStatus: (status) => set({ status }),
  setType: (type) => set({ type }),
  setQuery: (query) => set({ query }),
  reset: () => set({ status: null, type: null, query: "" }),
}));
