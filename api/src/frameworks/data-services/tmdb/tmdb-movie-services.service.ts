import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { Movie } from '@core/entities/movie.entity';
import { IMovieService } from '@core/abstracts/movie-repository.abstract';
import { GetListResponse } from '@core/entities/tmdb.entity';
import { MoviePresenter } from '@core/dtos/movie.dto';

@Injectable()
export class TmdbMovieService implements IMovieService {
  constructor(private readonly tmdbHttp: TmdbHttpService) {}

  private async fetchAndMap(
    endpoint: string,
  ): Promise<GetListResponse<MoviePresenter>> {
    const data = await this.tmdbHttp.fetch<GetListResponse<Movie>>(endpoint);
    return {
      page: data.page,
      results: data.results.map((movie) => new MoviePresenter(movie)),
      total_pages: data.total_pages,
      total_results: data.total_results,
    };
  }

  async getPopular() {
    return this.fetchAndMap('/movie/popular');
  }

  async getNowPlaying() {
    return this.fetchAndMap('/movie/now_playing');
  }

  async getTopRated() {
    return this.fetchAndMap('/movie/top_rated');
  }

  async getUpcoming() {
    return this.fetchAndMap('/movie/upcoming');
  }
}
