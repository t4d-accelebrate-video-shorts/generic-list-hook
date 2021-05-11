import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarTable } from "../components/CarTable";

export const CarTableContainer = () => {
  const carToolStore = useCarToolStoreContext();

  if (!carToolStore) {
    return null;
  }

  const props = {
    cars: carToolStore.cars,
    editCarId: carToolStore.editCarId,
    onEditCar: carToolStore.editCar,
    onDeleteCar: carToolStore.deleteCar,
    onSaveCar: carToolStore.saveCar,
    onCancelCar: carToolStore.cancelCar,
    onUpdateSortField: carToolStore.updateSortField,
  };

  return <CarTable {...props} />;
};
