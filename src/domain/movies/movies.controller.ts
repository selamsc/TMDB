import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponseInterceptor } from '../../common/interceptor';
import { plainToClass } from 'class-transformer';
import { MovieModel } from './entities/movie.entity';

@Controller('movies')
@ApiTags('movies')
@UseInterceptors(ApiResponseInterceptor)
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto ) {
    const movie = plainToClass(MovieModel, createMovieDto);
    return await this.moviesService.create(movie);
  }

  @Get()
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.moviesService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(id);
  }

  @Get('get-movie-details')
  async discoverMovies(): Promise<MovieModel[]> {
    try {
      const movies = await this.moviesService.getAllMovies();
      return movies;
    } catch (error) {
      throw new Error(`Error discovering movies: ${error.message}`);
    }
}
}
