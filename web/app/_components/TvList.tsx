import React from "react";
import { Tv } from "../../src/entities/models/tv";
import { Carousel } from "./Carousel";
import { Genre } from "@/entities/models/genre";

export function TvList({ tv, genres }: { tv: Tv[]; genres: Genre[] }) {
  if (!tv.length) return <div>No TV shows found.</div>;
  return <Carousel items={tv} genres={genres} />;
}
