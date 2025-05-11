import { GetListResponse } from '@core/entities/tmdb.entity';
import { MoviePresenter } from '../dtos/movie.dto';
import { TvPresenter } from '../dtos/tv.dto';

export abstract class ITrendingService {
  abstract getTrendingMovies(
    timeWindow?: 'day' | 'week',
  ): Promise<GetListResponse<MoviePresenter>>;
  abstract getTrendingTv(
    timeWindow?: 'day' | 'week',
  ): Promise<GetListResponse<TvPresenter>>;
}
