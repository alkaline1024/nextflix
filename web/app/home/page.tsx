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
      <div>
        <BillBoard
          billboard={billboard}
          loading={trendingTvLoading}
          genres={[...tvGenres, ...movieGenres]}
          tagLine="#1 in TV Shows Today"
        />
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
    </div>
  );
}
