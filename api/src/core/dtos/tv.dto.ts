import { ApiProperty } from '@nestjs/swagger';
import { Tv } from '../entities/tv.entity';

export class TvPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  original_name: string;
  @ApiProperty()
  original_language: string;
  @ApiProperty()
  overview: string;
  @ApiProperty()
  first_air_date: string;
  @ApiProperty()
  genre_ids: number[];
  @ApiProperty()
  popularity: number;
  @ApiProperty()
  vote_average: number;
  @ApiProperty()
  vote_count: number;
  @ApiProperty()
  backdrop_path: string;
  @ApiProperty()
  poster_path: string;
  @ApiProperty()
  origin_country: string[];
}
