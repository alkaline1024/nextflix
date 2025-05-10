import { Module } from '@nestjs/common';
import { TmdbMovieService } from './tmdb-movie-services.service';
import { TmdbHttpModule } from './tmdb-http.module';

@Module({
  imports: [TmdbHttpModule],
  providers: [TmdbMovieService],
  exports: [TmdbMovieService],
})
export class TmdbMovieModule {}
