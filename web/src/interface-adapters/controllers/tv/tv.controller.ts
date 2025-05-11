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

export function usePopularTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new TvApiRepository();
    const useCase = new GetPopularTvUseCase(repo);
    useCase
      .execute()
      .then(setTv)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { tv, loading, error };
}

export function useAiringTodayTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new TvApiRepository();
    const useCase = new GetAiringTodayTvUseCase(repo);
    useCase
      .execute()
      .then(setTv)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { tv, loading, error };
}

export function useOnTheAirTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new TvApiRepository();
    const useCase = new GetOnTheAirTvUseCase(repo);
    useCase
      .execute()
      .then(setTv)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { tv, loading, error };
}

export function useTopRatedTv() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new TvApiRepository();
    const useCase = new GetTopRatedTvUseCase(repo);
    useCase
      .execute()
      .then(setTv)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { tv, loading, error };
}

export function useTrendingTv(timeWindow: "day" | "week" = "day") {
  const [tv, setTv] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new TvApiRepository();
    const useCase = new GetTrendingTvUseCase(repo);
    useCase
      .execute(timeWindow)
      .then(setTv)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [timeWindow]);

  return { tv, loading, error };
}
