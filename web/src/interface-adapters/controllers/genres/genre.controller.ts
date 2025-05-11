"use client";
import { useEffect, useState } from "react";
import { Genre } from "@/entities/models/genre";
import { GenreApiRepository } from "@/infrastructure/repositories/genre.repository";
import {
  GetGenreMoviesUseCase,
  GetGenreTvsUseCase,
} from "@/application/use-cases/get-genres";

export function useGenreMovies() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new GenreApiRepository();
    const useCase = new GetGenreMoviesUseCase(repo);
    useCase
      .execute()
      .then(setGenres)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading, error };
}

export function useGenreTvs() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new GenreApiRepository();
    const useCase = new GetGenreTvsUseCase(repo);
    useCase
      .execute()
      .then(setGenres)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { genres, loading, error };
}
