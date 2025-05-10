import { Module } from '@nestjs/common';
import { TvUseCases } from './tv-use-case.service';
import { TmdbTvModule } from 'frameworks/data-services/tmdb/tmdb-tv-services.module';

@Module({
  imports: [TmdbTvModule],
  providers: [TvUseCases],
  exports: [TvUseCases],
})
export class TvUseCasesModule {}
