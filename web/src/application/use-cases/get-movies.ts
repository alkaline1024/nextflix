import { Movie } from "@/entities/models/movie";
import { MovieRepository } from "@/application/repositories/movie.repository.interface";

export class GetPopularMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepo.getPopular();
  }
}

export class GetNowPlayingMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepo.getNowPlaying();
  }
}

export class GetTopRatedMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepo.getTopRated();
  }
}

export class GetUpcomingMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepo.getUpcoming();
  }
}

export class GetTrendingMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(timeWindow: "day" | "week" = "day"): Promise<Movie[]> {
    return this.movieRepo.getTrending(timeWindow);
  }
}
