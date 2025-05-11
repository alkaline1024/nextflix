import { Genre } from "@/entities/models/genre";

export function mapGenreIdsToNames(
  genreIds: number[],
  genres: Genre[],
): string[] {
  const genreMap = new Map(genres.map((g) => [g.id, g.name]));
  return genreIds.map((id) => genreMap.get(id) || "Unknown");
}
