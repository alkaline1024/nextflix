import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '../entities/movie.entity';

export class MoviePresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  originalTitle: string;
  @ApiProperty()
  originalLanguage: string;
  @ApiProperty()
  overview: string;
  @ApiProperty()
  releaseDate: string;
  @ApiProperty()
  genreIds: number[];
  @ApiProperty()
  adult: boolean;
  @ApiProperty()
  video: boolean;
  @ApiProperty()
  popularity: number;
  @ApiProperty()
  voteAverage: number;
  @ApiProperty()
  voteCount: number;
  @ApiProperty()
  backdropPath: string;
  @ApiProperty()
  posterPath: string;

  constructor(movie: Movie) {
    this.id = movie.id;
    this.title = movie.title;
    this.originalTitle = movie.original_title;
    this.originalLanguage = movie.original_language;
    this.overview = movie.overview;
    this.releaseDate = movie.release_date;
    this.genreIds = movie.genre_ids;
    this.adult = movie.adult;
    this.video = movie.video;
    this.popularity = movie.popularity;
    this.voteAverage = movie.vote_average;
    this.voteCount = movie.vote_count;
    this.backdropPath = movie.backdrop_path;
    this.posterPath = movie.poster_path;
  }
}
