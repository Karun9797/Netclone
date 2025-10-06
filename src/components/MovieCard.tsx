import { Card } from "@/components/ui/card";
import type { Movie } from "../type";

const TMDB_IMAGES_ASSETS_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie, index }: { movie: Movie; index: number }) => {
  return (
    <Card
      style={{ "--index": `"${index}"` } as React.CSSProperties} // 👈 inject the index as CSS variable
      className="group relative h-[10rem] w-[7rem] cursor-pointer rounded-sm border-0 p-0 outline-blue-200 transition-all duration-200 before:absolute before:right-2 before:bottom-2 before:text-4xl before:font-bold before:text-white before:content-[var(--index)] hover:scale-103 hover:shadow-xl"
    >
      <img
        src={
          movie?.poster_path ? TMDB_IMAGES_ASSETS_URL + movie?.poster_path : ""
        }
        alt={movie?.title}
        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
      />
    </Card>
  );
};

export default MovieCard;
