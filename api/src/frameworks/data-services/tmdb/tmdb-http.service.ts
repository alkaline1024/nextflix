import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { LoggerService } from 'frameworks/logger/logger.service';
import { ExceptionsService } from 'frameworks/exceptions/exceptions.service';
import { AxiosError } from 'axios';
import { TMDB_CONFIG } from 'configuration';
import { ConfigService } from '@nestjs/config';
import { GetListResponse } from '@core/entities/tmdb.entity';

@Injectable()
export class TmdbHttpService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: LoggerService,
    private readonly config: ConfigService,
    private readonly exceptionService: ExceptionsService,
  ) {}

  async fetch<T = any>(
    endpoint: string,
    params: Record<string, any> = {},
  ): Promise<T> {
    const response = await firstValueFrom(
      this.httpService
        .get(endpoint, {
          baseURL: this.config.get<string>(TMDB_CONFIG.apiBaseUrl),
          params: {
            api_key: this.config.get<string>(TMDB_CONFIG.apiKey),
            ...params,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(`TMDB API Error: ${JSON.stringify(error)}`);
            this.exceptionService.throwBadRequestException({
              message: 'Cannot fetch data from TMDB API',
            });
          }),
        ),
    );
    return response.data as T;
  }

  async fetchListAndMap<T>(endpoint: string): Promise<GetListResponse<T>> {
    const data = await this.fetch<GetListResponse<T>>(endpoint);
    return {
      page: data.page,
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    };
  }
}
