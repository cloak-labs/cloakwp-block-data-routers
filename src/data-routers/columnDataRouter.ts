import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import { type GenericParentComponent } from "@cloakui/types";

export const columnDataRouter: WPDataRouter<
  GenericParentComponent & {
    span: number;
  }
> = (
  block,
  blockRenderer
): GenericParentComponent & {
  span: number;
} => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const {
    innerBlocks,
    attrs: { className } = {},
    context: { index, customProps: { colSpans } = {} },
  } = block;

  const children = blockRenderer.render(innerBlocks, {
    parent: block,
  });

  // TODO: default blockGap value that isn't 0?

  return {
    span: colSpans[index],
    className: cx(classes, className),
    style: styles,
    children,
  };
};
