import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type GenericParentComponentWithCx } from "@cloakui/types";

export const columnDataRouter: WPDataRouter<
  GenericParentComponentWithCx & {
    span: number;
    totalSiblings: number;
  }
> = (
  block,
  blockRenderer
): GenericParentComponentWithCx & {
  span: number;
  totalSiblings: number;
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
    totalSiblings: colSpans.length,
    className: classes,
    style: styles,
    children,
  };
};
