import React from "react";
import { Tv } from "@/entities/models/tv";
import { Movie } from "@/entities/models/movie";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

export function Carousel({ items }: { items: Movie[] | Tv[] }) {
  if (!items.length) return <div>No items found.</div>;
  return (
    <div className="flex overflow-x-auto gap-4 py-2 scrollbar-thin">
      {items.map((item) => {
        const name = "title" in item ? item.title : item.name;
        const releaseDate =
          "release_date" in item ? item.release_date : item.first_air_date;
        return (
          <div
            key={item.id}
            className="min-w-[180px] max-w-[220px] flex-shrink-0 bg-gray-800 rounded p-2"
          >
            <img
              src={`${baseImgUrl}${item.poster_path}`}
              alt={name}
              className="w-full h-64 object-cover rounded"
              loading="lazy"
              style={{ background: "#222" }}
            />
            <div className="mt-2 text-white font-bold">{name}</div>
            <div className="text-gray-400 text-sm">{releaseDate}</div>
          </div>
        );
      })}
    </div>
  );
}
