import { Tv } from "@/entities/models/tv";
import { TvRepository } from "@/application/repositories/tv.repository.interface";
import { fetchWithErrorHandling } from "@/utils/format";

export class TvApiRepository implements TvRepository {
  private baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

  async getPopular(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/tv/popular`,
    );
    return data.results;
  }

  async getAiringToday(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/tv/airing_today`,
    );
    return data.results;
  }

  async getOnTheAir(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/tv/on_the_air`,
    );
    return data.results;
  }

  async getTopRated(): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/tv/top_rated`,
    );
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Tv[]> {
    const data = await fetchWithErrorHandling<{ results: Tv[] }>(
      `${this.baseUrl}/trending/tv?time_window=${timeWindow}`,
    );
    return data.results;
  }
}
