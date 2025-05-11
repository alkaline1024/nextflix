import { Module } from '@nestjs/common';
import { GenreUseCases } from './genre-use-case.service';
import { TmdbGenreModule } from 'frameworks/data-services/tmdb/tmdb-genre-services.module';

@Module({
  imports: [TmdbGenreModule],
  providers: [GenreUseCases],
  exports: [GenreUseCases],
})
export class GenreUseCaseModule {}
