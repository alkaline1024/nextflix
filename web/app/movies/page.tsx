"use client";
import React from "react";
import { usePopularMovies } from "../../src/interface-adapters/controllers/movies/movie.controller";
import { MovieList } from "../_components/MovieList";

export default function MoviesPage() {
  const { movies, loading, error } = usePopularMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
