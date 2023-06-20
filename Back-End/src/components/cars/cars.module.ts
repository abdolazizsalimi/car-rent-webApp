import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';

@Module({
  imports : [],
  exports:[CarsService],
  providers: [CarsService, CarsResolver]
})
export class CarsModule {}
