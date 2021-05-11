import React from "react";

import { Car } from "../models/cars";
import { CarEditRow } from "./CarEditRow";
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onUpdateSortField: (car: keyof Car) => void;
};

export function CarTable(props: CarTableProps) {
  return (
    <table id="car-table">
      <thead>
        <tr>
          <th onClick={() => props.onUpdateSortField("id")}>Id</th>
          <th onClick={() => props.onUpdateSortField("make")}>Make</th>
          <th onClick={() => props.onUpdateSortField("model")}>Model</th>
          <th onClick={() => props.onUpdateSortField("year")}>Year</th>
          <th onClick={() => props.onUpdateSortField("color")}>Car</th>
          <th onClick={() => props.onUpdateSortField("price")}>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) =>
          car.id === props.editCarId ? (
            <CarEditRow
              key={car.id}
              car={car}
              onSaveCar={props.onSaveCar}
              onCancelCar={props.onCancelCar}
            />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={props.onEditCar}
              onDeleteCar={props.onDeleteCar}
            />
          )
        )}
      </tbody>
    </table>
  );
}

CarTable.defaultProps = {
  cars: [],
};
