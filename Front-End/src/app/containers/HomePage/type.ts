import React from "react";
import { GetCars_cars } from "../../components/services/carService/__generated__/GetCars";


export interface IHomePageState {
  topCars: GetCars_cars[];
}
