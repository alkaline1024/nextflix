"use client";
import React from "react";
import { usePopularTv } from "../../src/interface-adapters/controllers/tv/tv.controller";
import { TvList } from "../_components/TvList";

export default function TvPage() {
  const { tv, loading, error } = usePopularTv();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular TV Shows</h1>
      <TvList tv={tv} />
    </div>
  );
}
