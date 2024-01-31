"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const utils_1 = require("../shared/utils");
const utils_2 = require("@cloakui/utils");
const imageDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { parent } = block.context ?? {};
    let { url, alt, caption, href, width = "800", height = "400", align, aspectRatio, scale, className: wpClassName, } = block?.attrs;
    // TODO: set image 'sizes' based on its context (i.e. is it wrapped by parent block? if not, which `align` width does it have.. set sizes accordingly)
    let widths = {
        full: {
            mobile: "100vw",
            tablet: "100vw",
            desktop: "100vw",
        },
        wide: {
            mobile: "calc(100vw - 24px)",
            tablet: "calc(100vw - 48px)",
            desktop: "calc(1152px - 72px)",
        },
        none: {
            mobile: "calc(100vw - 24px)",
            tablet: "calc(896px - 48px)",
            desktop: "calc(896px - 72px)",
        },
    }[align ?? "none"];
    // 896, 1152
    if (parent?.name == "core/column") {
        const { parent: columnsParent, index: imageColIndex } = parent.context;
        const { innerBlocks: innerColumns } = columnsParent;
        const columnWidths = (0, utils_1.getColumnWidths)(innerColumns); // get all column width percentage values into an array
        const { gridCols, colSpans } = (0, utils_2.getGridLayoutFromColumnWidths)(columnWidths);
        const imageColWidth = colSpans[imageColIndex] / gridCols;
    }
    let sizes = "(max-width: 768px) calc(100vw - 24px), (max-width: 1024px) 800px, 1000px";
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
