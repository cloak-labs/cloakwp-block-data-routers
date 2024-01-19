import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp";
import { cx } from "@cloakui/styles";
import { THtmlProps } from "@cloakui/types";

export const htmlDataRouter: WPDataRouter<THtmlProps> = (block): THtmlProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { rendered } = block;

  return {
    className: cx("mb-6", classes),
    style: styles,
    content: rendered,
  };
};
