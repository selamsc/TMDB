import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MoviesRepositoryModule } from './repository/movie';


@Module({
  imports: [MoviesRepositoryModule],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
