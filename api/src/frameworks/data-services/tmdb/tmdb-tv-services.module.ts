import { Module } from '@nestjs/common';
import { TmdbHttpModule } from './tmdb-http.module';
import { TmdbTvService } from './tmdb-tv-services.service';

@Module({
  imports: [TmdbHttpModule],
  providers: [TmdbTvService],
  exports: [TmdbTvService],
})
export class TmdbTvModule {}
