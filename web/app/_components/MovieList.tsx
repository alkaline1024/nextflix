import React from "react";
import { Movie } from "../../src/entities/models/movie";

export function MovieList({ movies }: { movies: Movie[] }) {
  if (!movies.length) return <div>No movies found.</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 rounded p-2">
          <img
            src={movie.posterPath}
            alt={movie.title}
            className="w-full h-64 object-cover rounded"
          />
          <div className="mt-2 text-white font-bold">{movie.title}</div>
          <div className="text-gray-400 text-sm">{movie.releaseDate}</div>
        </div>
      ))}
    </div>
  );
}
