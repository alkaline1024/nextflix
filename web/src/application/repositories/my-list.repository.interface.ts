import { Movie } from "@/entities/models/movie";
import { Tv } from "@/entities/models/tv";

export type MyListItem = Movie | Tv;

export interface MyListRepository {
  getList(): Promise<MyListItem[]>;
  addItem(item: MyListItem): Promise<void>;
  removeItem(id: number): Promise<void>;
  clear(): Promise<void>;
}
