import { type MovieListProps } from "../type";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <>
      <div className="relative">
        <ul className="scrollbar-hide flex h-[20rem] space-x-6 overflow-x-scroll overflow-y-visible px-4 py-4 md:px-6">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;
