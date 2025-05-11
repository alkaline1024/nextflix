import React from "react";
import { Movie } from "../../src/entities/models/movie";
import { Carousel } from "./Carousel";
import { Genre } from "@/entities/models/genre";

export function MovieList({ movies, genres }: { movies: Movie[]; genres: Genre[] }) {
  if (!movies.length) return <div>No movies found.</div>;
  return <Carousel items={movies} genres={genres} />;
}
