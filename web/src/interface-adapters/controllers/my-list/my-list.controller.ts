"use client";
import { useEffect, useMemo, useState } from "react";
import { MyListLocalStorageRepository } from "@/infrastructure/repositories/my-list.repository";
import {
  AddToMyListUseCase,
  RemoveFromMyListUseCase,
  ClearMyListUseCase,
} from "@/application/use-cases/my-list";
import { MyListItem } from "@/application/repositories/my-list.repository.interface";

export function useMyList() {
  const repo = useMemo(() => new MyListLocalStorageRepository(), []);
  const [list, setList] = useState<MyListItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    repo
      .getList()
      .then(setList)
      .catch((e: unknown) =>
        setError(e instanceof Error ? e.message : String(e)),
      );
  }, [repo]);

  async function add(item: MyListItem) {
    try {
      await new AddToMyListUseCase(repo).execute(item);
      setList(await repo.getList());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function remove(id: number) {
    try {
      await new RemoveFromMyListUseCase(repo).execute(id);
      setList(await repo.getList());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function clear() {
    try {
      await new ClearMyListUseCase(repo).execute();
      setList(await repo.getList());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function refresh() {
    try {
      setList(await repo.getList());
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  return { list, add, remove, clear, refresh, error };
}
