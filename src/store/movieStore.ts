import { create } from "zustand";
import type { Movie } from "../type";

type BaseMovieState = {
  baseMovies: Movie[];
  setBaseMovies: (m: Movie[]) => void;
};

export const useBaseMovieStore = create<BaseMovieState>((set) => ({
  baseMovies: [] as Movie[],
  setBaseMovies: (m: Movie[]) => set({ baseMovies: m }),
}));

export default useBaseMovieStore;
