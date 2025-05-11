"use client";
import React from "react";
import { usePopularMovies } from "../../src/interface-adapters/controllers/movies/movie.controller";
import { MovieList } from "../_components/MovieList";
import { useGenreMovies } from "@/interface-adapters/controllers/genres/genre.controller";

export default function MoviesPage() {
  const { movies, loading, error } = usePopularMovies();
  const { genres } = useGenreMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mb-64">
      <div className="flex h-[70vh] items-center justify-center bg-gray-700">
        Movie
      </div>
      <h1 className="mb-4 text-2xl font-bold">Popular Movies</h1>
      <MovieList movies={movies} genres={genres} />
    </div>
  );
}
