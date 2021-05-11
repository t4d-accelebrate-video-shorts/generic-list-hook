import { useState } from "react";

import { useList } from "../hooks/useList";

import { Car, NewCar, CarKeys } from "../models/cars";
import { CarToolStoreHook } from "../models/carStore";

const sortCars = (cars: Car[], sortField: CarKeys) => {
  return [...cars].sort((a, b) => {
    const aValue = String(a[sortField]).toUpperCase();
    const bValue = String(b[sortField]).toUpperCase();

    if (aValue < bValue) return -1;
    else if (aValue > bValue) return 1;
    else return 0;
  });
};

export const useCarToolStore: CarToolStoreHook = (initialCars) => {
  const [cars, appendCar, replaceCar, removeCar] = useList([...initialCars]);

  const [editCarId, setEditCarId] = useState(-1);
  const [sortField, setSortField] = useState<CarKeys>("id");

  const addCar = (car: NewCar) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars: sortCars(cars, sortField),
    editCarId,
    addCar,
    editCar: setEditCarId,
    deleteCar,
    saveCar,
    cancelCar,
    updateSortField: setSortField,
  };
};
