"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockquoteDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const styles_1 = require("@cloakui/styles");
const blockquoteDataRouter = (block, blockRenderer) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { innerBlocks, attrs: { citation, className } = {} } = block;
    const children = blockRenderer.render(innerBlocks, { parent: block });
    return {
        className: (0, styles_1.cx)("mb-8", classes),
        citationClassName: className?.includes("is-large") && "text-right",
        style: styles,
        citation,
        children,
    };
};
exports.blockquoteDataRouter = blockquoteDataRouter;
