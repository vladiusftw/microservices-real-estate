import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { catchError, throwError } from 'rxjs';
import { CreatePropertyDto } from 'src/dtos/create-property.dto';
import { PaginationQueryDto } from 'src/dtos/pagination-query.dto';

@Controller('properties')
export class PropertiesController {
  constructor(
    @Inject('PROPERTIES_SERVICE') private readonly client: ClientProxy,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'Property created successfully',
    content: {
      'application/json': {
        example: {
          name: 'string',
          description: 'string',
          numRooms: 1,
          numBathrooms: 1,
          size: 50,
          latitude: 42.5,
          longitude: 43.2,
          country: 'string',
          city: 'string',
          location: 'string',
          isRent: true,
          id: 1,
        },
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Property already exists',
    content: {
      'application/jsom': {
        example: {
          message: 'Property with this name already exists',
          status: 409,
        },
      },
    },
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Post()
  createProperty(@Body() body: CreatePropertyDto) {
    return this.client.send('create-property', body).pipe(
      catchError((err: { message: string; status: number }) => {
        const message =
          err?.message ?? 'An error has occured while creating the property';
        const status = err?.status ?? 500;

        return throwError(() => new HttpException(message, status));
      }),
    );
  }

  @ApiResponse({
    status: 200,
    description: 'Properties fetched successfully',
    content: {
      'application/json': {
        example: {
          data: [
            {
              id: 1,
              name: 'test',
              description: 'test',
              numRooms: 2,
              numBathrooms: 2,
              size: 65,
              latitude: '42.34',
              longitude: '43.24',
              country: 'Austria',
              city: 'Vienna',
              location: 'Wagramer Strasse',
              isRent: true,
            },
            {
              id: 2,
              name: 'test2',
              description: 'test',
              numRooms: 2,
              numBathrooms: 2,
              size: 65,
              latitude: '42.34',
              longitude: '43.24',
              country: 'Austria',
              city: 'Vienna',
              location: 'Wagramer Strasse',
              isRent: true,
            },
          ],
          meta: {
            total: 2,
            page: 1,
            pageSize: 10,
            totalPages: 1,
          },
        },
      },
    },
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get()
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'pageSize',
    required: false,
    type: Number,
    description: 'Page size',
  })
  getProperties(@Query() query: PaginationQueryDto) {
    return this.client.send('get-properties', query).pipe(
      catchError(() => {
        const message = 'An error has occured while getting properties';
        return throwError(() => new HttpException(message, 500));
      }),
    );
  }
}
