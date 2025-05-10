import { Injectable } from '@nestjs/common';
import { TmdbMovieService } from 'frameworks/data-services/tmdb/tmdb-movie-services.service';

@Injectable()
export class MovieUseCases {
  constructor(private readonly movieRepository: TmdbMovieService) {}

  async getPopularMovies() {
    return this.movieRepository.getPopular();
  }

  async getNowPlayingMovies() {
    return this.movieRepository.getNowPlaying();
  }

  async getTopRatedMovies() {
    return this.movieRepository.getTopRated();
  }

  async getUpcomingMovies() {
    return this.movieRepository.getUpcoming();
  }
}
