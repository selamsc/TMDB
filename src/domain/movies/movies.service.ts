import { Injectable, NotFoundException } from '@nestjs/common';
import { MovieModel, MovieResponseModel } from './entities';
import { MoviesRepository } from './repository/movie/movie.repository';
import { ConfigService } from '@nestjs/config';
import { plainToClass } from 'class-transformer';

@Injectable()
export class MoviesService {
  constructor(private readonly moviesRepository: MoviesRepository, private readonly configService: ConfigService) {}
  async create(movie: MovieModel): Promise<MovieModel> {
    return await this.moviesRepository.create(movie);
  }

  async findAll(): Promise<MovieModel[]> {
    const movies = await this.moviesRepository.findAll();
    if (!movies.length) {
      throw new NotFoundException(`Movie not found`);
    }

    return movies;
  }

  async findOne(id: string): Promise<MovieModel | null> {
    const movie = await this.moviesRepository.findOne(id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    return movie;
  }

  async remove(id: string): Promise<MovieModel | null> {
   const deletedMovie = await this.moviesRepository.remove(id);

    if (!deletedMovie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
  
    }
    return deletedMovie;
  }

  async getAllMovies(): Promise<MovieModel[]> {  
    const tmdbApiKey = this.configService.get<string>('tmdbApiKey');
    const tmdbBaseUrl = this.configService.get<string>('tmdbBaseUrl');
    //get movies with given parameters 
    const url = new URL(`${tmdbBaseUrl}/discover/movie`);

    url.searchParams.append('sort_by', 'primary_release_date.asc');
    url.searchParams.append('vote_average.gte', '8.4');
    url.searchParams.append('vote_count.gte', '1500');
    url.searchParams.append('watch_region', 'TR');
    url.searchParams.append('with_watch_providers', '8');

    const headers = new Headers({
      'Authorization': `Bearer ${tmdbApiKey}`,
      'accept': 'application/json'
    });
    try {
      const response = await fetch(url, { method: 'GET', headers });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data: any = await response.json();
      const oldMovies = data.results.map((movie) => plainToClass(MovieResponseModel, movie));
      return await this.moviesRepository.bulkCreate(oldMovies);
    } catch (error) {
      throw new Error(`Error fetching movie details: ${error.message}`);
    }
  }
}
