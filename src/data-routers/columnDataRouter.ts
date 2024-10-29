import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type GenericParentComponentWithCx } from "@cloakui/types";

export const columnDataRouter: WPDataRouter<
  GenericParentComponentWithCx & {
    span: number;
  }
> = (
  block,
  blockRenderer
): GenericParentComponentWithCx & {
  span: number;
} => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const {
    innerBlocks,
    context: { index, customProps: { colSpans } = {} },
  } = block;

  const children = blockRenderer.render(innerBlocks, {
    parent: block,
  });

  return {
    span: colSpans[index],
    className: classes,
    style: styles,
    children,
  };
};
