import { ApiProperty } from '@nestjs/swagger';
import { Tv } from '../entities/tv.entity';

export class TvPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  originalName: string;
  @ApiProperty()
  originalLanguage: string;
  @ApiProperty()
  overview: string;
  @ApiProperty()
  firstAirDate: string;
  @ApiProperty()
  genreIds: number[];
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
  @ApiProperty()
  originCountry: string[];

  constructor(tv: Tv) {
    this.id = tv.id;
    this.name = tv.name;
    this.originalName = tv.original_name;
    this.originalLanguage = tv.original_language;
    this.overview = tv.overview;
    this.firstAirDate = tv.first_air_date;
    this.genreIds = tv.genre_ids;
    this.popularity = tv.popularity;
    this.voteAverage = tv.vote_average;
    this.voteCount = tv.vote_count;
    this.backdropPath = tv.backdrop_path;
    this.posterPath = tv.poster_path;
    this.originCountry = tv.origin_country;
  }
}
