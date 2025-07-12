import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Prisma, Property } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma.service';
import { PaginationQueryDto } from './dtos/pagination-query.dto';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async createProperty(data: Prisma.PropertyCreateInput): Promise<Property> {
    try {
      return await this.prisma.property.create({ data });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new RpcException({
          message: 'Property with this name already exists',
          status: 409,
        });
      }

      throw new RpcException({
        message: error.message || 'Internal server error',
        status: 500,
      });
    }
  }

  async getProperties({ page = 1, pageSize = 10 }: PaginationQueryDto) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.property.findMany({ skip, take }),
      this.prisma.property.count(),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }
}
