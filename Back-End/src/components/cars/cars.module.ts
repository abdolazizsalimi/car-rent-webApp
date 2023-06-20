import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car';

@Module({
  imports : [TypeOrmModule.forFeature([Car])],
  exports:[CarsService],
  providers: [CarsService, CarsResolver]
})
export class CarsModule {}
