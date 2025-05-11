import { Tv } from "@/entities/models/tv";

export interface TvRepository {
  getPopular(): Promise<Tv[]>;
  getAiringToday(): Promise<Tv[]>;
  getOnTheAir(): Promise<Tv[]>;
  getTopRated(): Promise<Tv[]>;
}
