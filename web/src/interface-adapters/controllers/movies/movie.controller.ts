"use client";
import { useEffect, useState } from "react";
import { Movie } from "@/entities/models/movie";
import { MovieApiRepository } from "@/infrastructure/repositories/movie.repository";
import { GetPopularMoviesUseCase } from "@/application/use-cases/get-popular-movies";

export function usePopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new MovieApiRepository();
    const useCase = new GetPopularMoviesUseCase(repo);
    useCase
      .execute()
      .then(setMovies)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}
