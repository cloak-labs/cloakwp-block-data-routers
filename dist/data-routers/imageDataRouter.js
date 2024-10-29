import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const imageDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    let { url, alt, caption, href, width, height, align, aspectRatio, scale, className: wpClassName, style = {}, } = block?.attrs;
    const { layout: { flexSize } = {} } = style;
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
        className: cx("aspect-auto", align == "full" ? "rounded-none" : "rounded-lg", scale == "contain" ? "object-contain" : "object-cover", wpClassName?.split(" ").includes("is-style-rounded") && "rounded-full", wpClassName?.split(" ").includes("is-style-rounded-none") &&
            "rounded-none", aspectRatioClass, classes),
        cntrClassName: [
            align == "center" ? "mx-auto" : align == "right" ? "ml-auto" : "",
        ],
        cntrStyle: {
            ...styles,
            width: flexSize || width ? `${width}px` : "100%",
            maxWidth: "100%",
        },
        style: {
            ...(styles?.borderRadius ? { borderRadius: styles?.borderRadius } : {}),
            height: height ?? "auto",
        },
    };
};
