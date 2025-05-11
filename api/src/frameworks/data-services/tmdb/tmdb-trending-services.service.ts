import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { ITrendingService } from '@core/abstracts/trending-service.abstract';
import { MoviePresenter } from '@core/dtos/movie.dto';
import { TvPresenter } from '@core/dtos/tv.dto';
import { GetListResponse } from '@core/entities/tmdb.entity';
import { ExceptionsService } from 'frameworks/exceptions/exceptions.service';

@Injectable()
export class TmdbTrendingService implements ITrendingService {
  constructor(
    private readonly tmdbHttp: TmdbHttpService,
    private readonly exceptionService: ExceptionsService,
  ) {}

  validateTimeWindow(
    timeWindow: string | undefined,
  ): asserts timeWindow is 'day' | 'week' {
    if (
      timeWindow !== undefined &&
      timeWindow !== 'day' &&
      timeWindow !== 'week'
    ) {
      this.exceptionService.throwBadRequestException({
        message: 'timeWindow must be either "day" or "week"',
      });
    }
  }

  async getTrendingMovies(
    timeWindow: 'day' | 'week' = 'day',
  ): Promise<GetListResponse<MoviePresenter>> {
    this.validateTimeWindow(timeWindow);
    return this.tmdbHttp.fetch<GetListResponse<MoviePresenter>>(
      `/trending/movie/${timeWindow}`,
    );
  }

  async getTrendingTv(
    timeWindow: 'day' | 'week' = 'day',
  ): Promise<GetListResponse<TvPresenter>> {
    this.validateTimeWindow(timeWindow);
    return this.tmdbHttp.fetch<GetListResponse<TvPresenter>>(
      `/trending/tv/${timeWindow}`,
    );
  }
}
