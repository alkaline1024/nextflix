import { Movie } from "@/entities/models/movie";

export interface MovieRepository {
  getPopular(): Promise<Movie[]>;
  getNowPlaying(): Promise<Movie[]>;
  getTopRated(): Promise<Movie[]>;
  getUpcoming(): Promise<Movie[]>;
  getTrending(timeWindow?: "day" | "week"): Promise<Movie[]>;
}
