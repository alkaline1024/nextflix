import { Injectable } from '@nestjs/common';
import { TmdbTvService } from 'frameworks/data-services/tmdb/tmdb-tv-services.service';

@Injectable()
export class TvUseCases {
  constructor(private readonly tvRepository: TmdbTvService) {}

  async getPopularTvs() {
    return this.tvRepository.getPopular();
  }

  async getAiringTodayTvs() {
    return this.tvRepository.getAiringToday();
  }

  async getOnTheAirTvs() {
    return this.tvRepository.getOnTheAir();
  }

  async getTopRatedTvs() {
    return this.tvRepository.getTopRated();
  }
}
