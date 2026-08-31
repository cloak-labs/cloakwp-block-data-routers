import { WPDataRouter, wpBlockStyleBuilder } from "cloakwp/blocks";
import { type GenericParentComponentWithCx } from "@cloakui/types";

export const buttonsDataRouter: WPDataRouter<GenericParentComponentWithCx> = (
  block
): Omit<GenericParentComponentWithCx, "children"> => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  return {
    className: classes,
    style: styles,
  };
};
