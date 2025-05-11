"use client";
import React from "react";
import { usePopularTv } from "../../src/interface-adapters/controllers/tv/tv.controller";
import { TvList } from "../_components/TvList";
import { useGenreTvs } from "@/interface-adapters/controllers/genres/genre.controller";

export default function TvPage() {
  const { tv, loading, error } = usePopularTv();
  const { genres } = useGenreTvs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mb-64">
      <div className="flex h-[70vh] items-center justify-center bg-gray-700">
        Tv
      </div>
      <h1 className="mb-4 text-2xl font-bold">Popular TV Shows</h1>
      <TvList tv={tv} genres={genres} />
    </div>
  );
}
