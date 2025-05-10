import { Controller, Get } from '@nestjs/common';
import { MovieUseCases } from 'use-cases/movie/movie-use-case.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieUseCases: MovieUseCases) {}

  @Get('popular')
  async getPopularMovies() {
    return this.movieUseCases.getPopularMovies();
  }

  @Get('now_playing')
  async getNowPlayingMovies() {
    return this.movieUseCases.getNowPlayingMovies();
  }

  @Get('top_rated')
  async getTopRatedMovies() {
    return this.movieUseCases.getTopRatedMovies();
  }

  @Get('upcoming')
  async getUpcomingMovies() {
    return this.movieUseCases.getUpcomingMovies();
  }
}
