"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonsDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const buttonsDataRouter = (block, blockRenderer) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { innerBlocks } = block;
    const children = blockRenderer.render(innerBlocks, { parent: block });
    return {
        className: classes,
        style: styles,
        children,
    };
};
exports.buttonsDataRouter = buttonsDataRouter;
