import { Controller, Get } from '@nestjs/common';
import { MovieUseCases } from 'use-cases/movie/movie-use-case.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { GetMovieListResponsePresenter } from '@core/dtos/tmdb.dto';

@ApiTags('movie')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieUseCases: MovieUseCases) {}

  @Get('popular')
  @ApiOperation({
    summary: 'Get popular movies',
    description: 'Returns a list of popular movies.',
  })
  @ApiOkResponse({
    type: GetMovieListResponsePresenter,
  })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getPopularMovies() {
    return this.movieUseCases.getPopularMovies();
  }

  @Get('now_playing')
  @ApiOperation({
    summary: 'Get now playing movies',
    description: 'Returns a list of now playing movies.',
  })
  @ApiOkResponse({
    type: GetMovieListResponsePresenter,
  })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getNowPlayingMovies() {
    return this.movieUseCases.getNowPlayingMovies();
  }

  @Get('top_rated')
  @ApiOperation({
    summary: 'Get top rated movies',
    description: 'Returns a list of top rated movies.',
  })
  @ApiOkResponse({
    type: GetMovieListResponsePresenter,
  })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getTopRatedMovies() {
    return this.movieUseCases.getTopRatedMovies();
  }

  @Get('upcoming')
  @ApiOperation({
    summary: 'Get upcoming movies',
    description: 'Returns a list of upcoming movies.',
  })
  @ApiOkResponse({
    type: GetMovieListResponsePresenter,
  })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getUpcomingMovies() {
    return this.movieUseCases.getUpcomingMovies();
  }
}
