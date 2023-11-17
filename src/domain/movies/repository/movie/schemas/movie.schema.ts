import {HydratedDocument} from 'mongoose';
import {Prop, Schema, SchemaFactory, raw} from '@nestjs/mongoose';


export type MovieDocument = HydratedDocument<Movie>
@Schema({collection: 'netflix.movies'})
export class Movie {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    overview: string;
    @Prop()
    popularity: number;
    @Prop()
    voteAverage: number;
    @Prop()
    voteCount: number;
    @Prop()
    releaseDate: String;
    @Prop(raw({
    id: {type: String},
    name: {type: String},
    }))
    genres: Record<string, any>
};

export const MovieSchema = SchemaFactory.createForClass(Movie);