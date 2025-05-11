import React from "react";
import { Movie } from "../../src/entities/models/movie";
import { Carousel } from "./Carousel";

export function MovieList({ movies }: { movies: Movie[] }) {
  if (!movies.length) return <div>No movies found.</div>;
  return <Carousel items={movies} />;
}
