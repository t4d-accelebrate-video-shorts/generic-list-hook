import { Car, NewCar, CarKeys } from "./cars";

export type CarToolStore = {
  cars: Car[];
  editCarId: number;
  addCar: (car: NewCar) => void;
  editCar: (carId: number) => void;
  deleteCar: (carId: number) => void;
  saveCar: (car: Car) => void;
  cancelCar: () => void;
  updateSortField: (sortField: CarKeys) => void;
};

export type CarToolStoreHook = (cars: Car[]) => CarToolStore;
