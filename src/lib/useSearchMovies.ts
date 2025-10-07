import { useMemo, useState, type ChangeEvent } from "react";
import { useSearchStore } from "../store/searchStore";
import { router } from "../routes";
import useBaseMovieStore from "../store/movieStore";
import performSearch from "../lib/performSearch";

export const useSearchMovies = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const setResults = useSearchStore((state) => state.setResult);
  const baseMovies = useBaseMovieStore((state) => state.baseMovies);

  const searchQuery = (query: string) => {
    const matchingTitles = performSearch(query, baseMovies);
    setResults(matchingTitles.data);
    router.navigate({
      to: "/search",
      search: { query },
    });
  };

  const debounce = (func: (...args: any[]) => void, delay = 1000) => {
    let timeOutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedSearch = useMemo(() => {
    return debounce(searchQuery);
  }, []);

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    debouncedSearch(query);
    setSearchTitle(query);
  };

  const clearSearch = () => {
    (setSearchTitle(""),
      searchQuery(""),
      router.navigate({
        to: "/",
      }),
      setShowSearch(false));
  };
  return {
    showSearch,
    searchTitle,
    handleSearchQueryChange,
    clearSearch,
    setShowSearch,
  };
};
