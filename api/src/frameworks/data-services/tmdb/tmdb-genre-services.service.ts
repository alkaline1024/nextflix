import { Injectable } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { IGenreRepository } from 'core/abstracts/genre-repository.abstract';
import { GenrePresenter } from 'core/dtos/genre.dto';

@Injectable()
export class TmdbGenreService implements IGenreRepository {
  constructor(private readonly tmdbHttp: TmdbHttpService) {}

  async getMovieGenres(): Promise<GenrePresenter[]> {
    const data = await this.tmdbHttp.fetch<{
      genres: { id: number; name: string }[];
    }>('/genre/movie/list');
    return data.genres.map((g) => new GenrePresenter(g));
  }

  async getTvGenres(): Promise<GenrePresenter[]> {
    const data = await this.tmdbHttp.fetch<{
      genres: { id: number; name: string }[];
    }>('/genre/tv/list');
    return data.genres.map((g) => new GenrePresenter(g));
  }
}
