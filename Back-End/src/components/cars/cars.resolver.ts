import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { Car } from './entities/car';


@Resolver()
export class CarsResolver {
    constructor(private carService : CarsService){}

    @Query((returns) => [Car])
    public async cars() : Promise<Car[]>{
        return await this.carService.getAllCars().catch((err)=>{
            throw err;
        });
    }


}
