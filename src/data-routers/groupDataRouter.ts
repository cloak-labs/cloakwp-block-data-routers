import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import type { ContainerProps } from "@cloakui/types";

export const groupDataRouter: WPDataRouter<ContainerProps> = (
  block,
  blockRenderer
): ContainerProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const { innerBlocks, attrs: { tagName } = {} } = block;

  const children = blockRenderer.render(innerBlocks, {
    parent: block,
  });

  return {
    as: tagName,
    className: cx("bg-root", classes),
    style: styles,
    children,
  };
};
