import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Movie } from '@core/entities/movie.entity';
import { IMovieService } from '@core/abstracts/movie-repository.abstract';
import { GetListResponse } from '@core/entities/tmdb.entity';
import { MoviePresenter } from '@core/dtos/movie.dto';

@Injectable()
export class TmdbMovieService implements IMovieService {
  constructor(private readonly httpService: HttpService) {}

  private async fetchMovieList(
    type: 'popular' | 'now_playing' | 'top_rated' | 'upcoming',
  ): Promise<GetListResponse<MoviePresenter>> {
    const response = await firstValueFrom(
      this.httpService.get<GetListResponse<Movie>>(`/movie/${type}`),
    );
    const page = response.data.page ?? 1;
    const results = response.data.results ?? [];
    const total_pages = response.data.total_pages ?? 1;
    const total_results = response.data.total_results ?? results.length;

    return {
      page,
      results: results.map((data: Movie) => new MoviePresenter(data)),
      total_pages,
      total_results,
    };
  }

  async getPopular() {
    return this.fetchMovieList('popular');
  }

  async getNowPlaying() {
    return this.fetchMovieList('now_playing');
  }

  async getTopRated() {
    return this.fetchMovieList('top_rated');
  }

  async getUpcoming() {
    return this.fetchMovieList('upcoming');
  }
}
