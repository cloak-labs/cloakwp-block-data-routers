"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typographyDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const typographyDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { context: { parent } = {}, attrs: { fontSize } = {} } = block;
    let customClasses = [];
    customClasses.push(block?.attrs?.backgroundColor ? "p-6" : "mb-6");
    if (fontSize) {
        // if user provides a custom font size, we must add breakpoint variations of that font-size to fully override the default sizes:
        customClasses.push(`xs:text-${fontSize}`, `sm:text-${fontSize}`, `md:text-${fontSize}`, `lg:text-${fontSize}`, `xl:text-${fontSize}`, `2xl:text-${fontSize}`);
    }
    if (block.name == "core/paragraph" &&
        parent?.name == "core/quote" &&
        parent?.attrs?.className?.includes("is-large")) {
        customClasses.push("text-xl leading-relaxed font-light");
    }
    return {
        className: (0, styles_1.cx)(classes, customClasses, parent && !styles?.margin && "mb-0 !mt-0"),
        style: styles,
        children: block.attrs.content,
    };
};
exports.typographyDataRouter = typographyDataRouter;