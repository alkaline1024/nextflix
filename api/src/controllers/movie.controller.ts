import { Controller, Get } from '@nestjs/common';
import { MovieUseCase } from '../use-cases/movie/movie.use-case';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieUseCase: MovieUseCase) {}

  @Get('popular')
  async getPopularMovies() {
    return this.movieUseCase.getPopularMovies();
  }
}
