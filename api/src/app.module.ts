import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController, MovieController, TvController } from './controllers';
import { TmdbMovieModule } from 'frameworks/data-services/tmdb/tmdb-movie-services.module';
import { MovieUseCasesModule } from 'use-cases/movie/movie-use-case.module';
import { TvUseCasesModule } from 'use-cases/tv/tv-use-case.module';
import { LoggerModule } from 'frameworks/logger/logger.module';
import { ExceptionsModule } from 'frameworks/exceptions/exceptions.module';

@Module({
  controllers: [AppController, MovieController, TvController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TmdbMovieModule,
    MovieUseCasesModule,
    TvUseCasesModule,
    LoggerModule,
    ExceptionsModule,
  ],
  providers: [],
})
export class AppModule {}
