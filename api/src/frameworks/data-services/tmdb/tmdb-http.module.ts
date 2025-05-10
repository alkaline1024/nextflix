import { Module } from '@nestjs/common';
import { TmdbHttpService } from './tmdb-http.service';
import { HttpModule } from '@nestjs/axios';
import { ExceptionsModule } from 'frameworks/exceptions/exceptions.module';
import { LoggerModule } from 'frameworks/logger/logger.module';

@Module({
  imports: [LoggerModule, ExceptionsModule, TmdbHttpModule, HttpModule],
  providers: [TmdbHttpService],
  exports: [TmdbHttpService],
})
export class TmdbHttpModule {}
