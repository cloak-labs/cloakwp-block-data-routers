"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const listDataRouter = (block, blockRenderer) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { attrs: { ordered, values } = {}, innerBlocks, context: { parent }, } = block;
    let children;
    if (innerBlocks?.length) {
        // using WP v6.1 or later, where the `core/list-item` inner block was introduced rather than baking all the <li>'s into the `block.attrs.values` field
        children = blockRenderer.render(innerBlocks, { parent: block });
    }
    else {
        children = values;
    }
    return {
        as: ordered ? "ol" : "ul",
        className: (0, styles_1.cx)(classes, ordered ? "list-decimal" : "list-disc", !parent && "mb-6"),
        style: styles,
        children,
    };
};
exports.listDataRouter = listDataRouter;
