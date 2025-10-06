import { Search, X } from "lucide-react";
import { useMemo, useState, type ChangeEvent } from "react";
import MOVIE_DATA from "@/data/mockdata.json";
import type { Movie } from "../type";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const searchQuery = (query: string) => {
    console.log("Searching:", query);
    const result = MOVIE_DATA?.results?.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()),
    );
    console.log(result);
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

  return (
    <div className="relative flex h-10 items-center gap-2">
      <input
        type="text"
        value={searchTitle}
        placeholder="search movies"
        className={`border border-gray-300 px-4 py-2 transition-all duration-300 focus:ring-2 focus:ring-red-600 focus:outline-none ${
          showSearch
            ? "w-60 opacity-100 md:w-80 lg:w-100"
            : "w-0 border-0 p-0 opacity-0"
        } `}
        onChange={handleSearchQueryChange}
      />

      <X
        className={`absolute right-15 cursor-pointer rounded-full p-1 transition-all duration-300 hover:bg-gray-600 ${showSearch ? "block" : "hidden"}`}
        size={25}
        onClick={() => {
          (setSearchTitle(""), searchQuery(""));
        }}
      />
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="cursor-pointer p-2 text-gray-300 transition-colors hover:text-red-600"
      >
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;
