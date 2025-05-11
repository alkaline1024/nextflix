"use client";
import React from "react";
import { usePopularTv } from "../../src/interface-adapters/controllers/tv/tv.controller";
import { useGenreTvs } from "@/interface-adapters/controllers/genres/genre.controller";
import { Carousel } from "../_components/Carousel";

export default function TvPage() {
  const { tv, loading, error } = usePopularTv();
  const { genres } = useGenreTvs();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mb-64 space-y-12">
      <div className="flex h-[60vh] items-center justify-center bg-gray-700">
        Tv
      </div>
      <Carousel title="Popular TV Shows" items={tv} genres={genres} />
    </div>
  );
}
