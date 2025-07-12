import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PrismaService } from 'src/prisma.service';
import { PropertiesController } from './properties.controller';

@Module({
  providers: [PropertiesService, PrismaService],
  controllers: [PropertiesController],
})
export class PropertiesModule {}
