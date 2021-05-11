import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

import { ColorForm } from "../components/ColorForm";

export const AddColorFormContainer = () => {
  const colorToolStore = useColorToolStoreContext();

  if (!colorToolStore) {
    return null;
  }

  const props = {
    buttonText: "Add Color",
    onSubmitColor: colorToolStore.appendColor,
  };

  return <ColorForm {...props} />;
};
