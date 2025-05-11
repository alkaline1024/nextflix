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

type UseCase<T, Args extends unknown[]> = {
  execute: (...args: Args) => Promise<T[]>;
};

function useFetchList<T, Args extends unknown[]>(
  getUseCase: () => UseCase<T, Args>,
  deps: React.DependencyList = [],
  ...args: Args
): { data: T[]; loading: boolean; error: string | null } {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const useCase = getUseCase();
    useCase
      .execute(...args)
      .then(setData)
      .catch((e: unknown) =>
        setError(e instanceof Error ? e.message : String(e)),
      )
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading, error };
}

export function usePopularMovies() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchList<Movie, []>(
    () => new GetPopularMoviesUseCase(new MovieApiRepository()),
    [],
  );
  return { movies, loading, error };
}

export function useNowPlayingMovies() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchList<Movie, []>(
    () => new GetNowPlayingMoviesUseCase(new MovieApiRepository()),
    [],
  );
  return { movies, loading, error };
}

export function useTopRatedMovies() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchList<Movie, []>(
    () => new GetTopRatedMoviesUseCase(new MovieApiRepository()),
    [],
  );
  return { movies, loading, error };
}

export function useUpcomingMovies() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchList<Movie, []>(
    () => new GetUpcomingMoviesUseCase(new MovieApiRepository()),
    [],
  );
  return { movies, loading, error };
}

export function useTrendingMovies(timeWindow: "day" | "week" = "day") {
  const {
    data: movies,
    loading,
    error,
  } = useFetchList<Movie, ["day" | "week"]>(
    () => new GetTrendingMoviesUseCase(new MovieApiRepository()),
    [timeWindow],
    timeWindow,
  );
  return { movies, loading, error };
}
