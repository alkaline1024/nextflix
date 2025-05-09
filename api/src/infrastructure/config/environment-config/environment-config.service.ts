import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ITMDBConfig } from '@domain/config/tmdb.interface';

@Injectable()
export class EnvironmentConfigService implements ITMDBConfig {
  constructor(private configService: ConfigService) {}

  getEnvConfig(key: string): string {
    const value = this.configService.get<string>(key);
    if (!value) {
      throw new Error(`${key} is not defined in the environment variables`);
    }
    return value;
  }

  getApiBaseUrl(): string {
    return this.getEnvConfig('TMDB_API_BASE_URL');
  }

  getApiKey(): string {
    return this.getEnvConfig('TMDB_API_KEY');
  }

  getApiReadAccessToken(): string {
    return this.getEnvConfig('TMDB_API_READ_ACCESS_TOKEN');
  }
}
