"use client";
import { useEffect, useState } from "react";
import { Movie } from "@/entities/models/movie";
import { MovieApiRepository } from "@/infrastructure/repositories/movie.repository";
import {
  GetNowPlayingMoviesUseCase,
  GetPopularMoviesUseCase,
  GetTopRatedMoviesUseCase,
  GetUpcomingMoviesUseCase,
  GetTrendingMoviesUseCase,
} from "@/application/use-cases/get-movies";

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

export function useNowPlayingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new MovieApiRepository();
    const useCase = new GetNowPlayingMoviesUseCase(repo);
    useCase
      .execute()
      .then(setMovies)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}

export function useTopRatedMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new MovieApiRepository();
    const useCase = new GetTopRatedMoviesUseCase(repo);
    useCase
      .execute()
      .then(setMovies)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}

export function useUpcomingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new MovieApiRepository();
    const useCase = new GetUpcomingMoviesUseCase(repo);
    useCase
      .execute()
      .then(setMovies)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading, error };
}

export function useTrendingMovies(timeWindow: "day" | "week" = "day") {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new MovieApiRepository();
    const useCase = new GetTrendingMoviesUseCase(repo);
    useCase
      .execute(timeWindow)
      .then(setMovies)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [timeWindow]);

  return { movies, loading, error };
}
