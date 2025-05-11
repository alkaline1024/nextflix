import { Genre } from "@/entities/models/genre";

export interface GenreRepository {
  getGenreMovies(): Promise<Genre[]>;
  getGenreTvs(): Promise<Genre[]>;
}
