import { Tv } from "@/entities/models/tv";
import { TvRepository } from "@/application/repositories/tv.repository.interface";

export class TvApiRepository implements TvRepository {
  private baseUrl = "http://localhost:8080/tv";

  async getPopular(): Promise<Tv[]> {
    const res = await fetch(`${this.baseUrl}/popular`);
    const data = await res.json();
    return data.results;
  }

  async getAiringToday(): Promise<Tv[]> {
    const res = await fetch(`${this.baseUrl}/airing_today`);
    const data = await res.json();
    return data.results;
  }

  async getOnTheAir(): Promise<Tv[]> {
    const res = await fetch(`${this.baseUrl}/on_the_air`);
    const data = await res.json();
    return data.results;
  }

  async getTopRated(): Promise<Tv[]> {
    const res = await fetch(`${this.baseUrl}/top_rated`);
    const data = await res.json();
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Tv[]> {
    const res = await fetch(
      `http://localhost:8080/trending/tv?time_window=${timeWindow}`,
    );
    const data = await res.json();
    return data.results;
  }
}
