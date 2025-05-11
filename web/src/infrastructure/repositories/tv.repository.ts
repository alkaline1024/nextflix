import { Tv } from "@/entities/models/tv";
import { TvRepository } from "@/application/repositories/tv.repository.interface";
import { fetchWithErrorHandling } from "@/utils/format";

export class TvApiRepository implements TvRepository {
  private baseUrl = "http://localhost:8080/tv";

  async getPopular(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/popular`,
    );
    return data.results;
  }

  async getAiringToday(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/airing_today`,
    );
    return data.results;
  }

  async getOnTheAir(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/on_the_air`,
    );
    return data.results;
  }

  async getTopRated(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/top_rated`,
    );
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `http://localhost:8080/trending/tv?time_window=${timeWindow}`,
    );
    return data.results;
  }
}
