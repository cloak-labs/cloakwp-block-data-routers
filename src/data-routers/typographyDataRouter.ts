import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import { TTypographyProps } from "@cloakui/types";

export const typographyDataRouter: WPDataRouter<TTypographyProps> = (
  block
): TTypographyProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const {
    context: { parent } = {},
    attrs: { fontSize, style: { spacing } = {} } = {},
  } = block;

  let customClasses = [];
  customClasses.push(block?.attrs?.backgroundColor ? "p-6" : "mb-6");

  if (fontSize) {
    // if user provides a custom font size, we must add breakpoint variations of that font-size to fully override the default sizes:
    customClasses.push(
      `xs:text-${fontSize}`,
      `sm:text-${fontSize}`,
      `md:text-${fontSize}`,
      `lg:text-${fontSize}`,
      `xl:text-${fontSize}`,
      `2xl:text-${fontSize}`
    );
  }

  if (
    block.name == "core/paragraph" &&
    parent?.name == "core/quote" &&
    parent?.attrs?.className?.includes("is-large")
  ) {
    customClasses.push("text-xl leading-relaxed font-light");
  }

  return {
    className: cx(
      classes,
      customClasses,
      parent &&
        (!spacing?.margin?.top || spacing?.margin?.top == "0") &&
        "mt-0",
      parent &&
        (!spacing?.margin?.bottom || spacing?.margin?.bottom == "0") &&
        "mb-0"
    ),
    style: styles,
    children: block.attrs.content,
  };
};
