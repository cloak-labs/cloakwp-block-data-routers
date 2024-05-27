import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp/blocks";
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

  const aspectRatioClass = {
    "1": "aspect-square",
    "4/3": "aspect-standard",
    "3/4": "aspect-portrait",
    "3/2": "aspect-classic",
    "2/3": "aspect-classic-portrait",
    "16/9": "aspect-video",
    "9/16": "aspect-tall",
  }[aspectRatio];

  return {
    src: url,
    href,
    width: parseInt(width) || 800,
    height: parseInt(height) || 400,
    alt,
    caption,
    className: cx(
      "aspect-auto",
      align == "full" ? "rounded-none" : "rounded-lg",
      scale == "contain" ? "object-contain" : "object-cover",
      wpClassName?.split(" ").includes("is-style-rounded") && "rounded-full",
      wpClassName?.split(" ").includes("is-style-rounded-none") &&
        "rounded-none",
      aspectRatioClass,
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
      height: height ?? "auto",
    },
  };
};
