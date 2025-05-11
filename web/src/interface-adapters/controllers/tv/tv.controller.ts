"use client";
import { useEffect, useState } from "react";
import { Tv } from "@/entities/models/tv";
import { TvApiRepository } from "@/infrastructure/repositories/tv.repository";
import { GetPopularTvUseCase } from "@/application/use-cases/get-popular-tv";

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
