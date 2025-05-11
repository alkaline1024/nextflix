"use client";
import React from "react";
import { usePopularMovies } from "../../src/interface-adapters/controllers/movies/movie.controller";
import { MovieList } from "../_components/MovieList";

export default function MoviesPage() {
  const { movies, loading, error } = usePopularMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
