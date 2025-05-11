"use client";
import React from "react";
import { usePopularMovies } from "../../src/interface-adapters/controllers/movies/movie.controller";
import { useGenreMovies } from "@/interface-adapters/controllers/genres/genre.controller";
import { Carousel } from "../_components/Carousel";

export default function MoviesPage() {
  const { movies, loading, error } = usePopularMovies();
  const { genres } = useGenreMovies();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mb-64 space-y-12">
      <div className="flex h-[60vh] items-center justify-center bg-gray-700">
        Movie
      </div>
      <Carousel title="Popular Movies" items={movies} genres={genres} />
    </div>
  );
}
