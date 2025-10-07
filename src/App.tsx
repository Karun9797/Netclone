import Hero from "./components/Hero";
import Movies from "./components/TrendingNow";
import { usePopularMovies } from "./lib/usePopularMovies";

function App() {
  const { movies, loading } = usePopularMovies();
  {
    loading && <div>Movies are loading...</div>;
  }
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default App;
