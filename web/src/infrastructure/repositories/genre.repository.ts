import { GenreRepository } from "@/application/repositories/genre.repository.interface";
import { Genre } from "@/entities/models/genre";

export class GenreApiRepository implements GenreRepository {
  private baseUrl = "http://localhost:8080/genres";

  async getGenreMovies(): Promise<Genre[]> {
    const res = await fetch(`${this.baseUrl}/movie`);
    const data = await res.json();
    return data;
  }

  async getGenreTvs(): Promise<Genre[]> {
    const res = await fetch(`${this.baseUrl}/tv`);
    const data = await res.json();
    return data;
  }
}
