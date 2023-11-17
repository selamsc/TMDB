import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema, Movie } from './schemas/movie.schema';
import { MoviesRepository } from './movie.repository';


@Module({
    imports: [MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}])],
    providers: [MoviesRepository],
    exports: [MoviesRepository]
})
export class MoviesRepositoryModule {}
