import { GenreRepository } from "@/application/repositories/genre.repository.interface";
import { Genre } from "@/entities/models/genre";
import { fetchWithErrorHandling } from "@/utils/format";

export class GenreApiRepository implements GenreRepository {
  private baseUrl = "http://localhost:8080/genres";

  async getGenreMovies(): Promise<Genre[]> {
    return await fetchWithErrorHandling<Genre[]>(`${this.baseUrl}/movie`);
  }

  async getGenreTvs(): Promise<Genre[]> {
    return await fetchWithErrorHandling<Genre[]>(`${this.baseUrl}/tv`);
  }
}
