import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
import { TTypographyProps } from "@cloakui/types";

export const typographyDataRouter: WPDataRouter<TTypographyProps> = (
  block
): TTypographyProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const {
    context: { parent } = {},
    attrs: { fontSize, style: { spacing } = {}, level } = {},
  } = block;

  let defaultClasses = [];
  defaultClasses.push(block?.attrs?.backgroundColor ? "p-6" : "mb-6");

  if (fontSize) {
    // if user provides a custom font size, we must add breakpoint variations of that font-size to fully override the default sizes:
    defaultClasses.push(
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
    defaultClasses.push("text-xl leading-relaxed font-light");
  }

  if (block.name == "core/paragraph" && !parent) {
    defaultClasses.push("[&:not(:first-child)]:!mt-4");
  }

  const hasNoTopMargin = !spacing?.margin?.top || spacing?.margin?.top == "0";
  const hasNoBottomMargin =
    (!spacing?.margin?.bottom || spacing?.margin?.bottom == "0") &&
    !classes.includes("mb-");

  if (block.name == "core/heading" && level == "2" && hasNoTopMargin) {
    defaultClasses.push("mt-8 first:mt-0");
  }

  return {
    className: cx(
      defaultClasses,
      classes,
      parent && hasNoTopMargin && "mt-0",
      parent && hasNoBottomMargin && "mb-0"
    ),
    style: styles,
    children: block.attrs.content,
  };
};
