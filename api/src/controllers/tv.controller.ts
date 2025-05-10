import { Controller, Get } from '@nestjs/common';
import { TvUseCases } from 'use-cases/tv/tv-use-case.service';

@Controller('tv')
export class TvController {
  constructor(private readonly tvUseCases: TvUseCases) {}

  @Get('popular')
  async getPopularTvs() {
    return this.tvUseCases.getPopularTvs();
  }

  @Get('airing_today')
  async getAiringTodayTvs() {
    return this.tvUseCases.getAiringTodayTvs();
  }

  @Get('on_the_air')
  async getOnTheAirTvs() {
    return this.tvUseCases.getOnTheAirTvs();
  }

  @Get('top_rated')
  async getTopRatedTvs() {
    return this.tvUseCases.getTopRatedTvs();
  }
}
