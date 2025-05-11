"use client";
import React from "react";
import {
  usePopularMovies,
  useNowPlayingMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../../src/interface-adapters/controllers/movies/movie.controller";
import { useGenreMovies } from "@/interface-adapters/controllers/genres/genre.controller";
import { Carousel } from "../_components/Carousel";
import BillBoard from "../_components/BillBoard";

export default function MoviesPage() {
  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
  } = usePopularMovies();
  const {
    movies: nowPlayingMovies,
    loading: nowPlayingLoading,
    error: nowPlayingError,
  } = useNowPlayingMovies();
  const {
    movies: topRatedMovies,
    loading: topRatedLoading,
    error: topRatedError,
  } = useTopRatedMovies();
  const {
    movies: upcomingMovies,
    loading: upcomingLoading,
    error: upcomingError,
  } = useUpcomingMovies();

  const { genres } = useGenreMovies();

  return (
    <div className="mb-64 space-y-12">
      <BillBoard billboard={popularMovies[0]} loading={popularLoading} />
      <div className="relative z-10 space-y-10 pt-16">
        <Carousel
          title="Popular Movies"
          genres={genres}
          items={popularMovies}
          loading={popularLoading}
          error={popularError}
        />
        <Carousel
          title="Now Playing"
          genres={genres}
          items={nowPlayingMovies}
          loading={nowPlayingLoading}
          error={nowPlayingError}
        />
        <Carousel
          title="Top Rated"
          genres={genres}
          items={topRatedMovies}
          loading={topRatedLoading}
          error={topRatedError}
        />
        <Carousel
          title="Upcoming"
          genres={genres}
          items={upcomingMovies}
          loading={upcomingLoading}
          error={upcomingError}
        />
      </div>
    </div>
  );
}
