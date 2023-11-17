export class MovieModel {
  id: string; 
  name: string;
  overview: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  genres: { id: number; name: string }[];
}