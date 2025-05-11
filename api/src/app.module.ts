import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController, MovieController, TvController } from './controllers';
import { TmdbMovieModule } from 'frameworks/data-services/tmdb/tmdb-movie-services.module';
import { MovieUseCasesModule } from 'use-cases/movie/movie-use-case.module';
import { TvUseCasesModule } from 'use-cases/tv/tv-use-case.module';
import { LoggerModule } from 'frameworks/logger/logger.module';
import { ExceptionsModule } from 'frameworks/exceptions/exceptions.module';
import { GenreController } from './controllers/genre.controller';
import { GenreUseCaseModule } from './use-cases/genre/genre-use-case.module';
import { TrendingController } from './controllers/trending.controller';
import { TrendingUseCaseModule } from './use-cases/trending/trending-use-case.module';

@Module({
  controllers: [
    AppController,
    MovieController,
    TvController,
    GenreController,
    TrendingController,
  ],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
    ExceptionsModule,
    TmdbMovieModule,
    MovieUseCasesModule,
    TvUseCasesModule,
    TrendingUseCaseModule,
    GenreUseCaseModule,
  ],
  providers: [],
})
export class AppModule {}
