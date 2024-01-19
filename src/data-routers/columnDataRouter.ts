import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp";
import { cx } from "@cloakui/styles";
import type { GenericParentComponent } from "@cloakui/types";

export type ColumnProps = GenericParentComponent & {
  span: number;
};

export const columnDataRouter: WPDataRouter<ColumnProps> = (
  block,
  blockRenderer
): ColumnProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const {
    innerBlocks,
    attrs: { className } = {},
    context: { index, customProps: { colSpans } = {} },
  } = block;

  const children = blockRenderer.render(innerBlocks, { parent: block });

  // TODO: default blockGap value that isn't 0?

  return {
    span: colSpans[index],
    className: cx(classes, className),
    style: styles,
    children,
  };
};
