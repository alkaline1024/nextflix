import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Movie } from '@core/entities/movie.entity';
import { IMovieService } from '@core/abstracts/movie-repository.abstract';
import { GetListResponse } from '@core/entities/tmdb.entity';

@Injectable()
export class TmdbMovieService implements IMovieService {
  constructor(private readonly httpService: HttpService) {}

  async getPopular() {
    const response = await firstValueFrom(
      this.httpService.get(`/movie/popular`),
    );
    return response.data as GetListResponse<Movie[]>;
  }

  async getNowPlaying() {
    const response = await firstValueFrom(
      this.httpService.get(`/movie/now_playing`),
    );
    return response.data as GetListResponse<Movie[]>;
  }

  async getTopRated() {
    const response = await firstValueFrom(
      this.httpService.get(`/movie/top_rated`),
    );
    return response.data as GetListResponse<Movie[]>;
  }

  async getUpcoming() {
    const response = await firstValueFrom(
      this.httpService.get(`/movie/upcoming`),
    );
    return response.data as GetListResponse<Movie[]>;
  }
}
