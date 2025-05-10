import { TvPresenter } from '@core/dtos/tv.dto';
import { GetListResponse } from '@core/entities/tmdb.entity';

export abstract class ITvService {
  abstract getPopular(): Promise<GetListResponse<TvPresenter>>;
  abstract getAiringToday(): Promise<GetListResponse<TvPresenter>>;
  abstract getOnTheAir(): Promise<GetListResponse<TvPresenter>>;
  abstract getTopRated(): Promise<GetListResponse<TvPresenter>>;
}
