import { Tv } from "@/entities/models/tv";
import { TvRepository } from "@/application/repositories/tv.repository.interface";

export class GetPopularTvUseCase {
  constructor(private tvRepo: TvRepository) {}

  async execute(): Promise<Tv[]> {
    return this.tvRepo.getPopular();
  }
}

export class GetAiringTodayTvUseCase {
  constructor(private tvRepo: TvRepository) {}

  async execute(): Promise<Tv[]> {
    return this.tvRepo.getAiringToday();
  }
}

export class GetOnTheAirTvUseCase {
  constructor(private tvRepo: TvRepository) {}

  async execute(): Promise<Tv[]> {
    return this.tvRepo.getOnTheAir();
  }
}

export class GetTopRatedTvUseCase {
  constructor(private tvRepo: TvRepository) {}

  async execute(): Promise<Tv[]> {
    return this.tvRepo.getTopRated();
  }
}
