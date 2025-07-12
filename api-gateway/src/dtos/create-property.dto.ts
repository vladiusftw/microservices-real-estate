import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Type(() => Number)
  numRooms: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Type(() => Number)
  numBathrooms: number;

  @ApiProperty({ example: 50 })
  @IsInt()
  @Type(() => Number)
  size: number;

  @ApiProperty({ example: 42.5 })
  @IsNumber()
  @Type(() => Number)
  latitude: number;

  @ApiProperty({ example: 42.5 })
  @IsNumber()
  @Type(() => Number)
  longitude: number;

  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'string' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isRent: boolean;

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  amenities: number[];
}
