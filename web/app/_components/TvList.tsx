import React from "react";
import { Tv } from "../../src/entities/models/tv";
import { Carousel } from "./Carousel";

export function TvList({ tv }: { tv: Tv[] }) {
  if (!tv.length) return <div>No TV shows found.</div>;
  return <Carousel items={tv} />;
}
