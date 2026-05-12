import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { ContentSourceRegistry } from "cloakwp/cms";
import { cx } from "@cloakui/styles";
import { splitClassNamesStartingWith } from "@cloakui/utils";
export const imageDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { url, alt, caption, href, width, height, align, aspectRatio, scale, className: wpClassName, style = {}, } = block?.attrs ?? {};
    const { layout: { flexSize } = {} } = style;
    const aspectRatioClass = {
        "1": "aspect-square",
        "4/3": "aspect-standard",
        "3/4": "aspect-portrait",
        "3/2": "aspect-classic",
        "2/3": "aspect-classic-portrait",
        "16/9": "aspect-video",
        "9/16": "aspect-tall",
        "8/7": "aspect-wide-square",
        none: "aspect-none",
    }[aspectRatio];
    const maxWidthViaClass = classes.includes("max-w-");
    const fullHeightViaClass = classes.includes("h-full");
    const [marginClasses, remainingClasses] = splitClassNamesStartingWith(classes, ["mb-", "md:mb-", "lg:mb-", "mt-", "md:mt-", "lg:mt-"]);
    return {
        src: url.startsWith("/")
            ? ContentSourceRegistry.get("wp")?.getActiveUrl() + url
            : url,
        href,
        width: parseInt(width) || 800,
        height: parseInt(height) || 400,
        alt,
        caption,
        className: cx("aspect-auto", width && height && "w-auto", align == "full" && !block.context.parent
            ? "rounded-none border-0 shadow-none"
            : "rounded-lg", scale == "contain" ? "object-contain" : "object-cover", wpClassName?.split(" ").includes("is-style-rounded") && "rounded-full", wpClassName?.split(" ").includes("is-style-rounded-none") &&
            "rounded-none", aspectRatioClass, remainingClasses),
        cntrClassName: [
            align == "center" ? "mx-auto" : align == "right" ? "ml-auto" : "",
            marginClasses
        ],
        cntrStyle: {
            ...styles,
            width: flexSize ||
                (width
                    ? typeof width === "string" && width.endsWith("px")
                        ? width
                        : `${width}px`
                    : maxWidthViaClass
                        ? "fit-content"
                        : "100%"),
            height: fullHeightViaClass ? "100%" : "auto",
            maxWidth: !maxWidthViaClass ? "100%" : undefined,
        },
        style: {
            ...(styles?.borderRadius ? { borderRadius: styles?.borderRadius } : {}),
            height: fullHeightViaClass ? "100%" : height ?? "auto", // TODO: test changing "auto" to "fit-content"
        },
    };
};
