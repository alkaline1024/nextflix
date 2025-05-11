import { Tv } from "@/entities/models/tv";
import { TvRepository } from "@/application/repositories/tv.repository.interface";

export class GetPopularTvUseCase {
  constructor(private tvRepo: TvRepository) {}

  async execute(): Promise<Tv[]> {
    return this.tvRepo.getPopular();
  }
}
