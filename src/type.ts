export type Movie = {
  id: number;
  title: string;
  poster_path?: string | null;
};
export type MovieListProps = {
  movies: Movie[];
};
