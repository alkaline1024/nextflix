import { Movie } from '../entities/movie.entity';
import { GetListResponse } from '@core/entities/tmdb.entity';

export abstract class IMovieService {
  abstract getPopular(): Promise<GetListResponse<Movie[]>>;
  abstract getNowPlaying(): Promise<GetListResponse<Movie[]>>;
  abstract getTopRated(): Promise<GetListResponse<Movie[]>>;
  abstract getUpcoming(): Promise<GetListResponse<Movie[]>>;
}
