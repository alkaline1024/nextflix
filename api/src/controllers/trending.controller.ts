import { Controller, Get, Query } from '@nestjs/common';
import { TrendingUseCases } from '../use-cases/trending/trending-use-case.service';

@Controller('trending')
export class TrendingController {
  constructor(private readonly trendingUseCase: TrendingUseCases) {}

  @Get('movie')
  getTrendingMovies(@Query('time_window') timeWindow?: 'day' | 'week') {
    return this.trendingUseCase.getTrendingMovies(timeWindow);
  }

  @Get('tv')
  getTrendingTv(@Query('time_window') timeWindow?: 'day' | 'week') {
    return this.trendingUseCase.getTrendingTv(timeWindow);
  }
}
