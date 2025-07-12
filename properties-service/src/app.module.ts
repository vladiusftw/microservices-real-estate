import { Module } from '@nestjs/common';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [PropertiesModule],
  providers: [],
})
export class AppModule {}
