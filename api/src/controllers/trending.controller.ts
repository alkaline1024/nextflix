import { Controller, Get, Query } from '@nestjs/common';
import { TrendingUseCases } from '../use-cases/trending/trending-use-case.service';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiQuery,
} from '@nestjs/swagger';
import {
  GetMovieListResponsePresenter,
  GetTvListResponsePresenter,
} from '@core/dtos/tmdb.dto';

@ApiTags('trending')
@Controller('trending')
export class TrendingController {
  constructor(private readonly trendingUseCase: TrendingUseCases) {}

  @Get('movie')
  @ApiOperation({
    summary: 'Get trending movies',
    description:
      'Returns a list of trending movies for a given time window (day or week).',
  })
  @ApiQuery({
    name: 'time_window',
    required: false,
    enum: ['day', 'week'],
    description: 'Time window for trending results',
  })
  @ApiOkResponse({ type: GetMovieListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getTrendingMovies(@Query('time_window') timeWindow?: 'day' | 'week') {
    return this.trendingUseCase.getTrendingMovies(timeWindow);
  }

  @Get('tv')
  @ApiOperation({
    summary: 'Get trending TV shows',
    description:
      'Returns a list of trending TV shows for a given time window (day or week).',
  })
  @ApiQuery({
    name: 'time_window',
    required: false,
    enum: ['day', 'week'],
    description: 'Time window for trending results',
  })
  @ApiOkResponse({ type: GetTvListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  async getTrendingTv(@Query('time_window') timeWindow?: 'day' | 'week') {
    return this.trendingUseCase.getTrendingTv(timeWindow);
  }
}
