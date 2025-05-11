import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { TvUseCases } from 'use-cases/tv/tv-use-case.service';
import { GetTvListResponsePresenter } from '@core/dtos/tmdb.dto';

@ApiTags('tv')
@Controller('tv')
export class TvController {
  constructor(private readonly tvUseCases: TvUseCases) {}

  @Get('popular')
  @ApiOperation({
    summary: 'Get popular TV shows',
    description: 'Returns a list of popular TV shows.',
  })
  @ApiOkResponse({ type: GetTvListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getPopularTv() {
    return this.tvUseCases.getPopularTvs();
  }

  @Get('airing_today')
  @ApiOperation({
    summary: 'Get TV shows airing today',
    description: 'Returns a list of TV shows airing today.',
  })
  @ApiOkResponse({ type: GetTvListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getAiringTodayTv() {
    return this.tvUseCases.getAiringTodayTvs();
  }

  @Get('on_the_air')
  @ApiOperation({
    summary: 'Get currently airing TV shows',
    description: 'Returns a list of TV shows currently on the air.',
  })
  @ApiOkResponse({ type: GetTvListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getOnTheAirTv() {
    return this.tvUseCases.getOnTheAirTvs();
  }

  @Get('top_rated')
  @ApiOperation({
    summary: 'Get top rated TV shows',
    description: 'Returns a list of top rated TV shows.',
  })
  @ApiOkResponse({ type: GetTvListResponsePresenter })
  @ApiBadRequestResponse({ description: 'Invalid request' })
  getTopRatedTv() {
    return this.tvUseCases.getTopRatedTvs();
  }
}
