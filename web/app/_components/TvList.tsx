import React from "react";
import { Tv } from "../../src/entities/models/tv";

export function TvList({ tv }: { tv: Tv[] }) {
  if (!tv.length) return <div>No TV shows found.</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tv.map((show) => (
        <div key={show.id} className="bg-gray-800 rounded p-2">
          <img
            src={show.posterPath}
            alt={show.name}
            className="w-full h-64 object-cover rounded"
          />
          <div className="mt-2 text-white font-bold">{show.name}</div>
          <div className="text-gray-400 text-sm">{show.firstAirDate}</div>
        </div>
      ))}
    </div>
  );
}
