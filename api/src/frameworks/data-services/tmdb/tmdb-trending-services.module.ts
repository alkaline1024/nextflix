import { Module } from '@nestjs/common';
import { TmdbTrendingService } from './tmdb-trending-services.service';
import { TmdbHttpModule } from './tmdb-http.module';
import { ExceptionsModule } from 'frameworks/exceptions/exceptions.module';

@Module({
  imports: [TmdbHttpModule, ExceptionsModule],
  providers: [TmdbTrendingService],
  exports: [TmdbTrendingService],
})
export class TmdbTrendingModule {}
