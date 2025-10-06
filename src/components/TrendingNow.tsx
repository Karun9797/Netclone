import MovieList from "./MovieList";
import MOVIE_DATA from "@/data/mockdata.json";

const Movies = () => {
  return (
    <div className="mt-6 px-6">
      <h3>Trending Now</h3>
      <div>
        {MOVIE_DATA?.results?.length > 0 ? (
          <MovieList movies={MOVIE_DATA?.results} />
        ) : (
          <div>No trending movies were found!!!</div>
        )}
      </div>
    </div>
  );
};

export default Movies;
