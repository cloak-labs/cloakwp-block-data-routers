"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const columnDataRouter = (block, blockRenderer) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { innerBlocks, attrs: { className } = {}, context: { index, customProps: { colSpans } = {} }, } = block;
    const children = blockRenderer.render(innerBlocks, { parent: block });
    // TODO: default blockGap value that isn't 0?
    return {
        span: colSpans[index],
        className: (0, styles_1.cx)(classes, className),
        style: styles,
        children,
    };
};
exports.columnDataRouter = columnDataRouter;
