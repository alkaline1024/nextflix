import { Movie } from "@/entities/models/movie";
import { MovieRepository } from "@/application/repositories/movie.repository.interface";

export class MovieApiRepository implements MovieRepository {
  private baseUrl = "http://localhost:8080/movies";

  async getPopular(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/popular`);
    const data = await res.json();
    return data.results;
  }

  async getNowPlaying(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/now_playing`);
    const data = await res.json();
    return data.results;
  }

  async getTopRated(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/top_rated`);
    const data = await res.json();
    return data.results;
  }

  async getUpcoming(): Promise<Movie[]> {
    const res = await fetch(`${this.baseUrl}/upcoming`);
    const data = await res.json();
    return data.results;
  }

  async getTrending(timeWindow: "day" | "week" = "day"): Promise<Movie[]> {
    const res = await fetch(
      `http://localhost:8080/trending/movie?time_window=${timeWindow}`,
    );
    const data = await res.json();
    return data.results;
  }
}
