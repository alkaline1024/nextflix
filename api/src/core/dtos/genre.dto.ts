import { ApiProperty } from '@nestjs/swagger';
import { Genre } from '../entities/genre.entity';

export class GenrePresenter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  constructor(genre: Genre) {
    this.id = genre.id;
    this.name = genre.name;
  }
}
