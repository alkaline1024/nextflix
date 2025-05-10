import { Module } from '@nestjs/common';
import { TmdbMovieService } from './tmdb-movie-services.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { TMDB_CONFIG } from 'configuration';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        baseURL: config.get<string>(TMDB_CONFIG.apiBaseUrl),
        params: { api_key: config.get<string>(TMDB_CONFIG.apiKey) },
      }),
    }),
  ],
  providers: [TmdbMovieService],
  exports: [TmdbMovieService],
})
export class TmdbMovieModule {}
