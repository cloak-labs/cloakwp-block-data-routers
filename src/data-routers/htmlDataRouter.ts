import { wpBlockFunctionalStyles, type WPDataRouter } from "cloakwp/blocks";
import { type THtmlProps } from "@cloakui/types";

export const htmlDataRouter: WPDataRouter<THtmlProps> = (block): THtmlProps => {
  const { styles } = wpBlockFunctionalStyles(block);
  const { rendered } = block;

  return {
    className: "cntr-full",
    style: styles,
    children: rendered,
  };
};
