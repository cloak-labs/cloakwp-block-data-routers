import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type TTypographyListProps } from "@cloakui/types";

export const listDataRouter: WPDataRouter<TTypographyListProps> = (
  block,
  blockRenderer
): TTypographyListProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const {
    attrs: { ordered, values } = {},
    innerBlocks,
    context: { parent },
  } = block;

  let children;
  if (innerBlocks?.length) {
    // using WP v6.1 or later, where the `core/list-item` inner block was introduced rather than baking all the <li>'s into the `block.attrs.values` field
    children = blockRenderer.render(innerBlocks, { parent: block });
  } else {
    children = values;
  }

  return {
    as: ordered ? "ol" : "ul",
    className: [
      // remove cntr-start and cntr-end classes, as they get applied to the wrapping container div and conflict with the list's built-in horizontal padding
      classes
        .split(" ")
        .filter((c) => c !== "cntr-start" && c !== "cntr-end")
        .join(" "),
      ordered ? "list-decimal" : "list-disc",
      !parent && "mb-6",
    ],
    style: styles,
    children,
  };
};
