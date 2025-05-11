import { Module } from '@nestjs/common';
import { TrendingUseCases } from './trending-use-case.service';
import { TmdbTrendingModule } from 'frameworks/data-services/tmdb/tmdb-trending-services.module';

@Module({
  imports: [TmdbTrendingModule],
  providers: [TrendingUseCases],
  exports: [TrendingUseCases],
})
export class TrendingUseCaseModule {}
