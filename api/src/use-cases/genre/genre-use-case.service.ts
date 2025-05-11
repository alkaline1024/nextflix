import { Injectable } from '@nestjs/common';
import { TmdbGenreService } from 'frameworks/data-services/tmdb/tmdb-genre-services.service';

@Injectable()
export class GenreUseCases {
  constructor(private readonly genreRepository: TmdbGenreService) {}

  getMovieGenres() {
    return this.genreRepository.getMovieGenres();
  }

  getTvGenres() {
    return this.genreRepository.getTvGenres();
  }
}
