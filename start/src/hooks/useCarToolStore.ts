import { useState } from "react";

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
  const [cars, setCars] = useState([...initialCars]);

  const [editCarId, setEditCarId] = useState(-1);
  const [sortField, setSortField] = useState<CarKeys>("id");

  const addCar = (car: NewCar) => {
    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ]);

    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    const newCars = [...cars];
    const carIndex = newCars.findIndex((c) => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter((c) => c.id !== carId));
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
