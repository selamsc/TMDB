import { Expose } from "class-transformer";

export class MovieResponseModel {
  id: string;
  @Expose({ name: 'title' })  
  name: string;
  overview: string;
  popularity: number;
  @Expose({name: 'vote_average'})
  voteAverage: number;
  @Expose({name: 'vote_count'})
  voteCount: number;
  @Expose({name: 'release_date'})
  releaseDate: string;
  genres: { id: number; name: string }[];
}