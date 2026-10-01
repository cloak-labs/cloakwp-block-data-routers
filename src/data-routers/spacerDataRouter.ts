import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type ComponentStyleProps } from "@cloakui/types";

export const spacerDataRouter: WPDataRouter<ComponentStyleProps> = (
  block,
): ComponentStyleProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { height, width } = block.attrs ?? {};

  return {
    className: classes,
    style: {
      ...styles,
      ...(height && { height }),
      ...(width && { width }),
    },
  };
};
