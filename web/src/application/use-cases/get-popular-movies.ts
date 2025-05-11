import { Movie } from "@/entities/models/movie";
import { MovieRepository } from "@/application/repositories/movie.repository.interface";

export class GetPopularMoviesUseCase {
  constructor(private movieRepo: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return this.movieRepo.getPopular();
  }
}
