import { Injectable } from '@nestjs/common';
import { IMovieRepository } from '../../core/abstracts/movie-repository.abstract';
import { Movie } from '../../core/entities/movie.entity';

@Injectable()
export class MovieUseCase {
  constructor(private readonly movieRepository: IMovieRepository) {}

  async getPopularMovies(): Promise<Movie[]> {
    return this.movieRepository.getPopular();
  }
}
