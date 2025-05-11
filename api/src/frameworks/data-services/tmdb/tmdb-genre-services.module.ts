import { Module } from '@nestjs/common';
import { TmdbGenreService } from './tmdb-genre-services.service';
import { TmdbHttpModule } from './tmdb-http.module';

@Module({
  imports: [TmdbHttpModule],
  providers: [TmdbGenreService],
  exports: [TmdbGenreService],
})
export class TmdbGenreModule {}
