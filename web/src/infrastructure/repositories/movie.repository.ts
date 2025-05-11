import { Movie } from "@/entities/models/movie";
import { MovieRepository } from "@/application/repositories/movie.repository.interface";
import { fetchWithErrorHandling } from "@/utils/format";

export class MovieApiRepository implements MovieRepository {
  private baseUrl = "http://localhost:8080/movies";

  async getPopular(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/popular`,
    );
    return data.results;
  }

  async getNowPlaying(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/now_playing`,
    );
    return data.results;
  }

  async getTopRated(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/top_rated`,
    );
    return data.results;
  }

  async getUpcoming(): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `${this.baseUrl}/upcoming`,
    );
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Movie[]> {
    const data = await fetchWithErrorHandling<{ results: Movie[] }>(
      `http://localhost:8080/trending/movie?time_window=${timeWindow}`,
    );
    return data.results;
  }
}
