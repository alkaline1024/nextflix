import { Movie } from '../entities/movie.entity';

export abstract class IMovieRepository {
  abstract getPopular(): Promise<Movie[]>;
}
