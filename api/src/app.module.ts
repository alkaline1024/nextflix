import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController, MovieController } from './controllers';
import { TmdbMovieModule } from 'frameworks/data-services/tmdb/tmdb-movie-services.module';
import { MovieUseCasesModule } from 'use-cases/movie/movie-use-case.module';

@Module({
  controllers: [AppController, MovieController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TmdbMovieModule,
    MovieUseCasesModule,
  ],
  providers: [],
})
export class AppModule {}
