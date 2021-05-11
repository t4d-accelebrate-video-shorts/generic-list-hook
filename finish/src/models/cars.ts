import { Item } from "../models/item";

export type NewCar = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

export type Car = NewCar & Item;
export type CarKeys = keyof Car;
export type NewCarKeys = keyof NewCar;
