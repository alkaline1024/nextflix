import { GenreRepository } from "@/application/repositories/genre.repository.interface";
import { Genre } from "@/entities/models/genre";
import { fetchWithErrorHandling } from "@/utils/format";

export class GenreApiRepository implements GenreRepository {
  private baseUrl = process.env.API_BASE_URL || "http://localhost:8080";

  async getGenreMovies(): Promise<Genre[]> {
    return await fetchWithErrorHandling<Genre[]>(
      `${this.baseUrl}/genres/movie`,
    );
  }

  async getGenreTvs(): Promise<Genre[]> {
    return await fetchWithErrorHandling<Genre[]>(`${this.baseUrl}/genres/tv`);
  }
}
