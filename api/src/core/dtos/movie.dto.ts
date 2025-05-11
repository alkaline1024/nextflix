import { ApiProperty } from '@nestjs/swagger';

export class MoviePresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  original_title: string;
  @ApiProperty()
  original_language: string;
  @ApiProperty()
  overview: string;
  @ApiProperty()
  release_date: string;
  @ApiProperty()
  genre_ids: number[];
  @ApiProperty()
  adult: boolean;
  @ApiProperty()
  video: boolean;
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
}
