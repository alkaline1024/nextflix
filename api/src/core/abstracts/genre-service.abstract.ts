import { GenrePresenter } from '../dtos/genre.dto';

export abstract class IGenreRepository {
  abstract getMovieGenres(): Promise<GenrePresenter[]>;
  abstract getTvGenres(): Promise<GenrePresenter[]>;
}
