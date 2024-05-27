import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import type { ContainerProps } from "@cloakui/types";

export const groupDataRouter: WPDataRouter<ContainerProps> = (
  block,
  blockRenderer
): ContainerProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const { innerBlocks, attrs: { gradient, tagName } = {} } = block;

  const children = blockRenderer.render(innerBlocks, {
    parent: block,
  });

  let customClasses;
  if (gradient) {
    customClasses = {
      "root-to-dim-split-50-b":
        "bg-gradient-to-b from-root from-50% via-root-muted via-50% to-root-dim to-50%",
      "dim-to-root-split-50-b":
        "bg-gradient-to-b from-root-dim from-50% via-root-muted via-50% to-root to-50%",
      "dark-to-root-split-45-r":
        "bg-gradient-to-r from-root-invert from-45% to-root to-45%",
      "darkest-to-root-split-45-r":
        "bg-gradient-to-r from-root-invert-dim from-45% to-root to-45%",
      // legacy gradient names below (kept here to ensure styling on old sites doesn't break):
      "root-to-root-dim":
        "bg-gradient-to-b from-root from-50% via-root-muted via-50% to-root-dim to-50%",
      "root-dim-to-root":
        "bg-gradient-to-b from-root-dim from-50% via-root-muted via-50% to-root to-50%",
    }[gradient];
  }

  return {
    as: tagName,
    className: cx("bg-root", classes, customClasses),
    style: styles,
    children,
  };
};
