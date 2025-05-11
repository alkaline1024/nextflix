import { Controller, Get } from '@nestjs/common';
import { GenreUseCases } from '../use-cases/genre/genre-use-case.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { GenrePresenter } from '../core/dtos/genre.dto';

@ApiTags('genre')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreUseCase: GenreUseCases) {}

  @Get('movie')
  @ApiOperation({
    summary: 'Get movie genres',
    description: 'Returns a list of movie genres.',
  })
  @ApiOkResponse({ type: GenrePresenter, isArray: true })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getMovieGenres() {
    return this.genreUseCase.getMovieGenres();
  }

  @Get('tv')
  @ApiOperation({
    summary: 'Get TV genres',
    description: 'Returns a list of TV genres.',
  })
  @ApiOkResponse({ type: GenrePresenter, isArray: true })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getTvGenres() {
    return this.genreUseCase.getTvGenres();
  }
}
