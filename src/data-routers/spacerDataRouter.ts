import { wpBlockFunctionalStyles, type WPDataRouter } from "cloakwp/blocks";
import { type ComponentStyleProps } from "@cloakui/types";

export const spacerDataRouter: WPDataRouter<ComponentStyleProps> = (
  block,
): ComponentStyleProps => {
  const { classes, styles } = wpBlockFunctionalStyles(block);
  const { height, width } = block.attrs ?? {};

  return {
    className: classes,
    style: {
      ...styles,
      ...(!(block as any).__cloakBlockStyles && height && { height }),
      ...(!(block as any).__cloakBlockStyles && width && { width }),
    },
  };
};
