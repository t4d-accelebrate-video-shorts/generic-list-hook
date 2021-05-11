import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarForm } from "../components/CarForm";

export const AddCarFormContainer = () => {
  const carToolStore = useCarToolStoreContext();

  if (!carToolStore) {
    return null;
  }

  const props = {
    buttonText: "Add Car",
    onSubmitCar: carToolStore.addCar,
  };

  return <CarForm {...props} />;
};
