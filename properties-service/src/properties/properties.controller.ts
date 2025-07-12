import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { PropertiesService } from './properties.service';
import { PaginationQueryDto } from './dtos/pagination-query.dto';

@Controller()
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @MessagePattern('create-property')
  async createProperty(@Payload() dto: CreatePropertyDto) {
    const { amenities, ...rest } = dto;
    const response = await this.propertiesService.createProperty({
      ...rest,
      amenities: {
        connect: amenities.map((id) => ({ id })),
      },
    });
    return response;
  }

  @MessagePattern('get-properties')
  async getProperties(@Payload() query: PaginationQueryDto) {
    return await this.propertiesService.getProperties(query);
  }
}
