"use client";

import { Carousel } from "../_components/Carousel";
import { useTrendingTv } from "@/interface-adapters/controllers/tv/tv.controller";
import { useTrendingMovies } from "@/interface-adapters/controllers/movies/movie.controller";
import {
  useGenreMovies,
  useGenreTvs,
} from "@/interface-adapters/controllers/genres/genre.controller";
import BillBoard from "../_components/BillBoard";

export default function Home() {
  const {
    movies: trendingMovies,
    loading: trendingMovieLoading,
    error: trendingMovieError,
  } = useTrendingMovies();

  const {
    tv: trendingTv,
    loading: trendingTvLoading,
    error: trendingTvError,
  } = useTrendingTv();

  const { genres: tvGenres } = useGenreTvs();
  const { genres: movieGenres } = useGenreMovies();

  const billboard = trendingTv[0];

  return (
    <div className="relative mb-64 space-y-12">
      {!trendingTvLoading ? (
        <div>
          <BillBoard billboard={billboard} loading={trendingTvLoading} />
          <div className="relative z-10 space-y-10 pt-16">
            <Carousel
              title="Trending Movies Today"
              genres={movieGenres}
              items={trendingMovies}
              loading={trendingMovieLoading}
              error={trendingMovieError}
            />
            <Carousel
              title="Trending TV Shows Today"
              genres={tvGenres}
              items={trendingTv}
              loading={trendingTvLoading}
              error={trendingTvError}
            />
          </div>
        </div>
      ) : (
        <div className="mt-16 flex p-16">
          <div
            className="aspect-[2/3] animate-pulse rounded-lg bg-white/10"
            style={{
              width: "10%",
            }}
          />
        </div>
      )}
    </div>
  );
}
