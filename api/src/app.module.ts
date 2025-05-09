import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { LoggerModule } from './infrastructure/logger/logger.module';

@Module({
  imports: [EnvironmentConfigModule, LoggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
