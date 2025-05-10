import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { IMovieService } from '@core/abstracts/movie-repository.abstract';
import { MoviePresenter } from '@core/dtos/movie.dto';

@Injectable()
export class TmdbMovieService implements IMovieService {
  constructor(private readonly tmdbHttp: TmdbHttpService) {}

  async getPopular() {
    return this.tmdbHttp.fetchListAndMap<MoviePresenter>('/movie/popular');
  }

  async getNowPlaying() {
    return this.tmdbHttp.fetchListAndMap<MoviePresenter>('/movie/now_playing');
  }

  async getTopRated() {
    return this.tmdbHttp.fetchListAndMap<MoviePresenter>('/movie/top_rated');
  }

  async getUpcoming() {
    return this.tmdbHttp.fetchListAndMap<MoviePresenter>('/movie/upcoming');
  }
}
