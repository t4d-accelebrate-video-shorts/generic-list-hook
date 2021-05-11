import { createContext, useContext, ReactNode } from "react";

import { ColorToolStore } from "../models/colorStore";

const colorToolStoreContext = createContext<ColorToolStore | null>(null);

export type ColorToolStoreProviderProps = {
  store: ColorToolStore;
  children?: ReactNode;
};

export const ColorToolStoreProvider = (props: ColorToolStoreProviderProps) => {
  return (
    <colorToolStoreContext.Provider value={props.store}>
      {props.children}
    </colorToolStoreContext.Provider>
  );
};

export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};
