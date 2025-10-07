import { create } from "zustand";
import type { Movie } from "../type";

type SearchState = {
  query: string;
  results: Movie[];
  setQuery: (q: string) => void;
  setResult: (r: Movie[]) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [] as Movie[],
  setQuery: (q: string) => set({ query: q }),
  setResult: (r: Movie[]) => set({ results: r }),
}));
