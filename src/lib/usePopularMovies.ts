import { useEffect, useState } from "react";
import type { Movie } from "../type";
import useBaseMovieStore from "../store/movieStore";

const token = import.meta.env.VITE_TMDB_AUTH_TOKEN;
const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const usePopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const setBaseMovies = useBaseMovieStore((state) => state.setBaseMovies);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
        setBaseMovies(data.results);
        setLoading(false);
        console.log("Trending movies data: ", data);
      } catch (error) {
        console.log("Error fetching trending movies: ", error);
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return { movies, loading };
};
