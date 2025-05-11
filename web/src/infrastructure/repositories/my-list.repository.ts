import {
  MyListRepository,
  MyListItem,
} from "@/application/repositories/my-list.repository.interface";

const STORAGE_KEY = "my-list";

export class MyListLocalStorageRepository implements MyListRepository {
  async getList(): Promise<MyListItem[]> {
    if (typeof window === "undefined") return [];
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return [];
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }
  async addItem(item: MyListItem): Promise<void> {
    const list = await this.getList();
    if (!list.find((i) => i.id === item.id)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...list, item]));
    }
  }
  async removeItem(id: number): Promise<void> {
    const list = await this.getList();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list.filter((i) => i.id !== id)),
    );
  }
  async clear(): Promise<void> {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}
