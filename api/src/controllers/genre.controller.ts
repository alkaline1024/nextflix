import { Controller, Get } from '@nestjs/common';
import { GenreUseCases } from '../use-cases/genre/genre-use-case.service';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreUseCase: GenreUseCases) {}

  @Get('movie')
  getMovieGenres() {
    return this.genreUseCase.getMovieGenres();
  }

  @Get('tv')
  getTvGenres() {
    return this.genreUseCase.getTvGenres();
  }
}
