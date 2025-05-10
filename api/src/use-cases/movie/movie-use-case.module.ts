import { Module } from '@nestjs/common';
import { MovieUseCases } from './movie-use-case.service';
import { TmdbMovieModule } from 'frameworks/data-services/tmdb/tmdb-movie-services.module';

@Module({
  imports: [TmdbMovieModule],
  providers: [MovieUseCases],
  exports: [MovieUseCases],
})
export class MovieUseCasesModule {}
