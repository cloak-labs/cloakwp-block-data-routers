import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type GenericParentComponentWithCx } from "@cloakui/types";

export const columnDataRouter: WPDataRouter<
  GenericParentComponentWithCx & {
    span: number;
    totalSiblings: number;
  }
> = (
  block,
): Omit<
  GenericParentComponentWithCx & {
    span: number;
    totalSiblings: number;
  },
  "children"
> => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const {
    context: { index, fromParent: { colSpans } = {} },
  } = block;

  return {
    span: colSpans[index],
    totalSiblings: colSpans.length,
    className: classes,
    style: styles,
  };
};
