import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp";
import { cx } from "@cloakui/styles";
import { TImageProps } from "@cloakui/types";

export const imageDataRouter: WPDataRouter<TImageProps> = (
  block
): TImageProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  let {
    url,
    alt,
    caption,
    href,
    width = "800",
    height = "400",
    align,
    aspectRatio,
    scale,
    className: wpClassName,
  } = block?.attrs;

  const aspect = {
    "1": 1 / 1, // square
    "4/3": 4 / 3, // standard
    "3/4": 3 / 4, // portrait
    "3/2": 3 / 2, // classic
    "2/3": 2 / 3, // classic portrait
    "16/9": 16 / 9, // wide
    "9/16": 9 / 16, // tall
  }[aspectRatio];

  return {
    src: url,
    href,
    width: parseInt(width),
    height: parseInt(height),
    alt,
    caption,
    className: cx(
      align == "full" ? "rounded-none" : "rounded-lg",
      scale == "contain" ? "object-contain" : "object-cover",
      wpClassName?.includes("is-style-rounded") && "rounded-full",
      classes
    ),
    cntrClassName: cx(
      align == "center" ? "mx-auto" : align == "right" ? "ml-auto" : ""
    ),
    cntrStyle: {
      ...styles,
      width: width || "100%",
      maxWidth: "100%",
    },
    style: {
      aspectRatio: aspect ?? "auto",
      height: height ?? "auto",
    },
  };
};
