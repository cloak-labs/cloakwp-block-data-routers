"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonDataRouter = void 0;
const styles_1 = require("@cloakui/styles");
const utils_1 = require("@cloakui/utils");
const cloakwp_1 = require("cloakwp");
const buttonDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    // remove bg-* and text-* classes from computed classes, because the button `variant` prop will handle applying these classes
    const finalClasses = (0, utils_1.excludeClassNamesStartingWith)(classes, ["bg-", "text-"]);
    const { context: { parent }, } = block;
    let { className, text, url } = block.attrs;
    let variant = "default";
    if (className) {
        if (className.includes("is-style-outline"))
            variant = "outline";
        else if (className.includes("is-style-secondary"))
            variant = "secondary";
    }
    let props = {
        variants: { variant },
        className: (0, styles_1.cx)(!parent && "mb-4", finalClasses),
        style: styles,
        children: text,
    };
    if (url)
        props.href = url;
    return props;
};
exports.buttonDataRouter = buttonDataRouter;
