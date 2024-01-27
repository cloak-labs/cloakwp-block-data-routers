"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separatorDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const separatorDataRouter = (block) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { backgroundColor } = block.attrs;
    return {
        className: (0, styles_1.cx)(classes, backgroundColor),
        style: styles,
    };
};
exports.separatorDataRouter = separatorDataRouter;
