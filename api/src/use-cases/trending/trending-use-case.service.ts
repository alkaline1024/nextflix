import { Injectable } from '@nestjs/common';
import { MoviePresenter } from 'core/dtos/movie.dto';
import { TvPresenter } from 'core/dtos/tv.dto';
import { GetListResponse } from '@core/entities/tmdb.entity';
import { TmdbTrendingService } from 'frameworks/data-services/tmdb/tmdb-trending-services.service';

@Injectable()
export class TrendingUseCases {
  constructor(private readonly trendingRepo: TmdbTrendingService) {}

  getTrendingMovies(
    timeWindow?: 'day' | 'week',
  ): Promise<GetListResponse<MoviePresenter>> {
    return this.trendingRepo.getTrendingMovies(timeWindow);
  }

  getTrendingTv(
    timeWindow?: 'day' | 'week',
  ): Promise<GetListResponse<TvPresenter>> {
    return this.trendingRepo.getTrendingTv(timeWindow);
  }
}
