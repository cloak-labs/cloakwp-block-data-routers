import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp/blocks";
import { TTypographyBlockquoteProps } from "@cloakui/types";

export const blockquoteDataRouter: WPDataRouter<TTypographyBlockquoteProps> = (
  block,
): Omit<TTypographyBlockquoteProps, "children"> => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { attrs: { citation, className } = {} } = block;

  return {
    className: ["mb-8", classes],
    citationClassName: className?.includes("is-large") && "text-right",
    style: styles,
    citation,
  };
};
