"use client";
import React from "react";
import {
  useAiringTodayTv,
  useOnTheAirTv,
  usePopularTv,
  useTopRatedTv,
} from "../../src/interface-adapters/controllers/tv/tv.controller";
import { useGenreTvs } from "@/interface-adapters/controllers/genres/genre.controller";
import { Carousel } from "../_components/Carousel";
import BillBoard from "../_components/BillBoard";

export default function TvPage() {
  const {
    tv: popularTv,
    loading: popularLoading,
    error: popularError,
  } = usePopularTv();
  const {
    tv: airingTodayTv,
    loading: airingTodayLoading,
    error: airingTodayError,
  } = useAiringTodayTv();
  const {
    tv: onTheAirTv,
    loading: onTheAirLoading,
    error: onTheAirError,
  } = useOnTheAirTv();
  const {
    tv: topRatedTv,
    loading: topRatedLoading,
    error: topRatedError,
  } = useTopRatedTv();

  const { genres } = useGenreTvs();

  return (
    <div className="mb-64 space-y-12">
      <BillBoard billboard={popularTv[0]} loading={popularLoading} />
      <div className="relative z-10 space-y-10 pt-16">
        <Carousel
          title="Popular TV Shows"
          genres={genres}
          items={popularTv}
          loading={popularLoading}
          error={popularError}
        />
        <Carousel
          title="Airing Today"
          genres={genres}
          items={airingTodayTv}
          loading={airingTodayLoading}
          error={airingTodayError}
        />
        <Carousel
          title="On The Air"
          genres={genres}
          items={onTheAirTv}
          loading={onTheAirLoading}
          error={onTheAirError}
        />
        <Carousel
          title="Top Rated"
          genres={genres}
          items={topRatedTv}
          loading={topRatedLoading}
          error={topRatedError}
        />
      </div>
    </div>
  );
}
