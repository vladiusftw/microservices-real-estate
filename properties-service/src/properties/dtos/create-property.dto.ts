import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Type(() => Number)
  numRooms: number;

  @IsInt()
  @Type(() => Number)
  numBathrooms: number;

  @IsInt()
  @Type(() => Number)
  size: number;

  @IsDecimal()
  @Type(() => Number)
  latitude: number;

  @IsDecimal()
  @Type(() => Number)
  longitude: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsBoolean()
  isRent: boolean;

  @IsArray()
  @IsInt({ each: true })
  @Type(() => Number)
  amenities: number[];
}
