import { Movie } from "@/entities/models/movie";
import { MovieRepository } from "@/application/repositories/movie.repository.interface";
import { fetchWithErrorHandling } from "@/utils/format";

export class MovieApiRepository implements MovieRepository {
  private baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

  async getPopular(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/movies/popular`,
    );
    return data.results;
  }

  async getNowPlaying(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/movies/now_playing`,
    );
    return data.results;
  }

  async getTopRated(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/movies/top_rated`,
    );
    return data.results;
  }

  async getUpcoming(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/movies/upcoming`,
    );
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/trending/movie?time_window=${timeWindow}`,
    );
    return data.results;
  }
}
