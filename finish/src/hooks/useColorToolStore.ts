import { useList } from "../hooks/useList";

import { ColorToolStoreHook } from "../models/colorStore";

export const useColorToolStore: ColorToolStoreHook = (initialColors) => {
  const [colors, appendColor, , removeColor] = useList([...initialColors]);

  return {
    colors,
    appendColor,
    removeColor,
  };
};
