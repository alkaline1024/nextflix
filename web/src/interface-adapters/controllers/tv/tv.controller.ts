"use client";
import { useEffect, useState } from "react";
import { Tv } from "@/entities/models/tv";
import { TvApiRepository } from "@/infrastructure/repositories/tv.repository";
import {
  GetAiringTodayTvUseCase,
  GetOnTheAirTvUseCase,
  GetPopularTvUseCase,
  GetTopRatedTvUseCase,
  GetTrendingTvUseCase,
} from "@/application/use-cases/get-tv";

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

export function usePopularTv() {
  const {
    data: tv,
    loading,
    error,
  } = useFetchList<Tv, []>(
    () => new GetPopularTvUseCase(new TvApiRepository()),
    [],
  );
  return { tv, loading, error };
}

export function useAiringTodayTv() {
  const {
    data: tv,
    loading,
    error,
  } = useFetchList<Tv, []>(
    () => new GetAiringTodayTvUseCase(new TvApiRepository()),
    [],
  );
  return { tv, loading, error };
}

export function useOnTheAirTv() {
  const {
    data: tv,
    loading,
    error,
  } = useFetchList<Tv, []>(
    () => new GetOnTheAirTvUseCase(new TvApiRepository()),
    [],
  );
  return { tv, loading, error };
}

export function useTopRatedTv() {
  const {
    data: tv,
    loading,
    error,
  } = useFetchList<Tv, []>(
    () => new GetTopRatedTvUseCase(new TvApiRepository()),
    [],
  );
  return { tv, loading, error };
}

export function useTrendingTv(timeWindow: "day" | "week" = "day") {
  const {
    data: tv,
    loading,
    error,
  } = useFetchList<Tv, ["day" | "week"]>(
    () => new GetTrendingTvUseCase(new TvApiRepository()),
    [timeWindow],
    timeWindow,
  );
  return { tv, loading, error };
}
