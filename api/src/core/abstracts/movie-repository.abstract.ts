import { MoviePresenter } from '@core/dtos/movie.dto';
import { GetListResponse } from '@core/entities/tmdb.entity';

export abstract class IMovieService {
  abstract getPopular(): Promise<GetListResponse<MoviePresenter>>;
  abstract getNowPlaying(): Promise<GetListResponse<MoviePresenter>>;
  abstract getTopRated(): Promise<GetListResponse<MoviePresenter>>;
  abstract getUpcoming(): Promise<GetListResponse<MoviePresenter>>;
}
