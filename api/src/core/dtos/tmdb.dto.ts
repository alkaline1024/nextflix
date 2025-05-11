import { ApiProperty } from '@nestjs/swagger';
import { MoviePresenter } from './movie.dto';
import { TvPresenter } from './tv.dto';

export class GetListResponsePresenter<T> {
  @ApiProperty()
  page: number;
  @ApiProperty()
  results: T[];
  @ApiProperty()
  total_pages: number;
  @ApiProperty()
  total_results: number;
}

export class GetMovieListResponsePresenter {
  @ApiProperty()
  page: number;
  @ApiProperty({ type: MoviePresenter, isArray: true })
  results: MoviePresenter[];
  @ApiProperty()
  total_pages: number;
  @ApiProperty()
  total_results: number;
}

export class GetTvListResponsePresenter {
  @ApiProperty()
  page: number;
  @ApiProperty({ type: TvPresenter, isArray: true })
  results: TvPresenter[];
  @ApiProperty()
  total_pages: number;
  @ApiProperty()
  total_results: number;
}
