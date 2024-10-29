import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp/blocks";
import { TTypographyBlockquoteProps } from "@cloakui/types";

export const blockquoteDataRouter: WPDataRouter<TTypographyBlockquoteProps> = (
  block,
  blockRenderer
): TTypographyBlockquoteProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { innerBlocks, attrs: { citation, className } = {} } = block;

  const children = blockRenderer.render(innerBlocks, { parent: block });

  return {
    className: ["mb-8", classes],
    citationClassName: className?.includes("is-large") && "text-right",
    style: styles,
    citation,
    children,
  };
};
