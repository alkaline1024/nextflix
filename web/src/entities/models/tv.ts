export interface Tv {
  id: number;
  name: string;
  originalName: string;
  originalLanguage: string;
  overview: string;
  firstAirDate: string;
  genreIds: number[];
  popularity: number;
  voteAverage: number;
  voteCount: number;
  backdropPath: string;
  posterPath: string;
  originCountry: string[];
}
