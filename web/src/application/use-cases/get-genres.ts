import { GenreRepository } from "@/application/repositories/genre.repository.interface";
import { Genre } from "@/entities/models/genre";

export class GetGenreMoviesUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(): Promise<Genre[]> {
    return this.genreRepository.getGenreMovies();
  }
}

export class GetGenreTvsUseCase {
  constructor(private readonly genreRepository: GenreRepository) {}

  async execute(): Promise<Genre[]> {
    return this.genreRepository.getGenreTvs();
  }
}
