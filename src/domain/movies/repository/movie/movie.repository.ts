import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { MovieModel } from '../../entities/movie.entity';

@Injectable()
export class MoviesRepository {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  async create(movie: MovieModel): Promise<MovieModel> {
    const createdMovie = new this.movieModel(movie);
    const savedMovie = await createdMovie.save(); 
    return plainToClass(MovieModel, savedMovie.toJSON());
  }
  
  async bulkCreate(movies: MovieModel[]): Promise<MovieModel[]> {
    const createdMovies = await this.movieModel.insertMany(movies);
    return createdMovies.map((movie) => plainToClass(MovieModel, movie.toJSON()));
  }

  async findAll(): Promise<MovieModel[]> {
    const movies = await this.movieModel.find().exec();
    return movies.map((movie) => plainToClass(MovieModel, movie.toJSON()));
  }

  async findOne(id: string): Promise<MovieModel | null> {
    const movie = await this.movieModel.find({
      id
    }).exec();
    return plainToClass(MovieModel, movie[0]?.toJSON());
  }

  async remove(id: string): Promise<MovieModel | null> {
    const movie = await this.movieModel.findOneAndDelete({
      id
    }).exec();
    return plainToClass(MovieModel, movie?.toJSON());
  }
}
