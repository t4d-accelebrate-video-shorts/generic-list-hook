import { Color, NewColor } from "./colors";

export type ColorToolStore = {
  colors: Color[];
  appendColor: (color: NewColor) => void;
  removeColor: (colorId: number) => void;
};

export type ColorToolStoreHook = (colors: Color[]) => ColorToolStore;
