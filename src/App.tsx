import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import Movies from "./components/TrendingNow";
import { useSearchStore } from "./store/searchStore";

function App() {
  const results = useSearchStore((state) => state.results);
  return (
    <>
      <Header />
      {results && (
        <div className="grid grid-cols-5 space-y-4">
          {results.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )}
      <Hero />
      <Movies />
    </>
  );
}

export default App;
