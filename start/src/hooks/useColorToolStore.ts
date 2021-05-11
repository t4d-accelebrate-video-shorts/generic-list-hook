import { useState } from "react";

import { NewColor } from "../models/colors";
import { ColorToolStoreHook } from "../models/colorStore";

export const useColorToolStore: ColorToolStoreHook = (initialColors) => {
  const [colors, setColors] = useState([...initialColors]);

  const appendColor = (color: NewColor) => {
    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const removeColor = (colorId: number) => {
    setColors(colors.filter((c) => c.id !== colorId));
  };

  return {
    colors,
    appendColor,
    removeColor,
  };
};
