import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { ITvService } from '@core/abstracts/tv-repository.abstract';
import { TvPresenter } from '@core/dtos/tv.dto';
import { GetListResponse } from '@core/entities/tmdb.entity';

@Injectable()
export class TmdbTvService implements ITvService {
  constructor(private readonly tmdbHttp: TmdbHttpService) {}

  async getPopular(): Promise<GetListResponse<TvPresenter>> {
    return this.tmdbHttp.fetchListAndMap<TvPresenter>('/tv/popular');
  }

  async getAiringToday(): Promise<GetListResponse<TvPresenter>> {
    return this.tmdbHttp.fetchListAndMap<TvPresenter>('/tv/airing_today');
  }

  async getOnTheAir(): Promise<GetListResponse<TvPresenter>> {
    return this.tmdbHttp.fetchListAndMap<TvPresenter>('/tv/on_the_air');
  }

  async getTopRated(): Promise<GetListResponse<TvPresenter>> {
    return this.tmdbHttp.fetchListAndMap<TvPresenter>('/tv/top_rated');
  }
}
