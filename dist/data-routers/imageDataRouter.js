"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const imageDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    let { url, alt, caption, href, width = "800", height = "400", align, aspectRatio, scale, className: wpClassName, } = block?.attrs;
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
        width: parseInt(width) || 800,
        height: parseInt(height) || 400,
        alt,
        caption,
        noShadow: wpClassName?.includes("is-style-no-shadow"),
        className: (0, styles_1.cx)(align == "full" ? "rounded-none" : "rounded-lg", scale == "contain" ? "object-contain" : "object-cover", wpClassName?.includes("is-style-rounded") && "rounded-full", classes),
        cntrClassName: (0, styles_1.cx)(align == "center" ? "mx-auto" : align == "right" ? "ml-auto" : ""),
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
exports.imageDataRouter = imageDataRouter;
