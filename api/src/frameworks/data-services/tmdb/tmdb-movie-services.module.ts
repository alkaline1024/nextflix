import { Module } from '@nestjs/common';
import { TmdbMovieService } from './tmdb-movie-services.service';
import { ExceptionsModule } from 'frameworks/exceptions/exceptions.module';
import { LoggerModule } from 'frameworks/logger/logger.module';
import { TmdbHttpModule } from './tmdb-http.module';

@Module({
  imports: [LoggerModule, ExceptionsModule, TmdbHttpModule],
  providers: [TmdbMovieService],
  exports: [TmdbMovieService],
})
export class TmdbMovieModule {}
