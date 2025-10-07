import MovieCard from "@/components/MovieCard";
import { useSearchStore } from "@/store/searchStore";
import { useSearch } from "@tanstack/react-router";
import { searchRoute } from "./index";

export function SearchComponent() {
  const results = useSearchStore((state) => state.results);
  const { query } = useSearch({ from: searchRoute.id });
  console.log(query, results);
  return (
    <div className="p-4">
      <h2 className="mb-2 text-lg text-gray-300">
        Showing results for: <span className="text-white">{query}</span>
      </h2>
      {results && results.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-gray-400">No result found</div>
      )}
    </div>
  );
}
