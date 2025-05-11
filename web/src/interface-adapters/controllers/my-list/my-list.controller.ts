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

  useEffect(() => {
    repo.getList().then(setList);
  }, [repo]);

  async function add(item: MyListItem) {
    await new AddToMyListUseCase(repo).execute(item);
    setList(await repo.getList());
  }

  async function remove(id: number) {
    await new RemoveFromMyListUseCase(repo).execute(id);
    setList(await repo.getList());
  }

  async function clear() {
    await new ClearMyListUseCase(repo).execute();
    setList(await repo.getList());
  }

  return { list, add, remove, clear };
}
