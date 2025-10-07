import { Search, X } from "lucide-react";
import { useSearchMovies } from "../lib/useSearchMovies";

const SearchBar = () => {
  const {
    searchTitle,
    showSearch,
    handleSearchQueryChange,
    clearSearch,
    setShowSearch,
  } = useSearchMovies();

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
        onClick={clearSearch}
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
