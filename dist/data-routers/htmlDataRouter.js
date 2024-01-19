"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const htmlDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { rendered } = block;
    return {
        className: (0, styles_1.cx)("mb-6", classes),
        style: styles,
        content: rendered,
    };
};
exports.htmlDataRouter = htmlDataRouter;
