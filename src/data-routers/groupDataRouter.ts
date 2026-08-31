import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import type { ContainerProps } from "@cloakui/types";

export const groupDataRouter: WPDataRouter<ContainerProps> = (
  block,
): Omit<ContainerProps, "children"> => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { attrs: { tagName } = {} } = block;

  return {
    as: tagName,
    className: cx("bg-root", classes),
    style: styles,
  };
};
