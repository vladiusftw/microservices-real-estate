import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PropertiesController } from './controllers/properties.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PROPERTIES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'properties_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [PropertiesController],
})
export class AppModule {}
