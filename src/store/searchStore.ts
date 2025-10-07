import { create } from "zustand";
import type { Movie } from "../type";
import MOVIE_DATA from "@/data/mockdata.json";

type SearchState = {
  query: String;
  results: Movie[];
  setQuery: (q: string) => void;
  setResult: (r: Movie[]) => void;
  performSearch: (q: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  results: [] as Movie[],
  setQuery: (q: string) => set({ query: q }),
  setResult: (r: Movie[]) => set({ results: r }),
  performSearch: (q: string) => {
    set({ query: q });
    const qTrim = q.trim();

    if (qTrim === "") {
      set({ results: [] });
      return;
    }
    const results = (MOVIE_DATA?.results as Movie[])?.filter((movie: Movie) => {
      return movie.title.toLowerCase().includes(qTrim.toLowerCase());
    }) as Movie[];
    set({ results });
    console.log(results);
  },
}));
