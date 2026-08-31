import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type TTypographyListItemProps } from "@cloakui/types";

export const listItemDataRouter: WPDataRouter<TTypographyListItemProps> = (
  block
): TTypographyListItemProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { attrs: { values, content, className } = {} } = block;

  return {
    content,
    className: [classes, className],
    style: styles,
    // Nested lists (and WP < 6.1 attrs.values) — innerBlocks overwrite
    // children via nestedBlocks when present.
    children: values || null,
  };
};
