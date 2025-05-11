export interface Movie {
  id: number;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  adult: boolean;
  video: boolean;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  backdropPath: string;
  posterPath: string;
}
