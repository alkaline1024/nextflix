import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IMovieRepository } from '@core/abstracts/movie-repository.abstract';
import { Movie } from '@core/entities/movie.entity';
import { TMDB_CONFIGURATION } from 'configuration';
import { abstract } from "api/src/core/abstracts/generic-repository.abstract";

@Injectable()
export class TmdbMovieRepository implements IMovieRepository {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = TMDB_CONFIGURATION.apiUrl;
    this.apiKey = TMDB_CONFIGURATION.apiKey;
  }

  async getPopular(): Promise<Movie[]> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/movie/popular`, {
        params: { api_key: this.apiKey },
      }),
    );
    return (response.data.results as any[]).map((item) => ({
      id: item.id,
      title: item.title,
      overview: item.overview,
      posterPath: item.poster_path,
      releaseDate: item.release_date,
      voteAverage: item.vote_average,
    }));
  }
}
