import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class Genre {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  overview: string;

  @ApiProperty()
  @IsNumber()
  popularity: number;

  @ApiProperty()
  @IsNumber()
  voteAverage: number;

  @ApiProperty()
  @IsNumber()
  voteCount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  releaseDate: string;

  @ApiProperty({
    type: [Object],
    example: [{ id: 1, name: 'Action' }],
  })

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Genre)
  genres: Genre[];
}
