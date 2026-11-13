import { WPDataRouter, wpBlockFunctionalStyles } from "cloakwp/blocks";
import { type GenericParentComponentWithCx } from "@cloakui/types";

export const buttonsDataRouter: WPDataRouter<GenericParentComponentWithCx> = (
  block,
): Omit<GenericParentComponentWithCx, "children"> => {
  const { classes, styles } = wpBlockFunctionalStyles(block);

  return {
    className: classes,
    style: styles,
  };
};
