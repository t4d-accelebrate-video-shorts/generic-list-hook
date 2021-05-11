import { createContext, useContext, ReactNode } from "react";

import { CarToolStore } from "../models/carStore";

const carToolStoreContext = createContext<CarToolStore | null>(null);

export type CarToolStoreProviderProps = {
  store: CarToolStore;
  children?: ReactNode;
};

export const CarToolStoreProvider = (props: CarToolStoreProviderProps) => {
  return (
    <carToolStoreContext.Provider value={props.store}>
      {props.children}
    </carToolStoreContext.Provider>
  );
};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
