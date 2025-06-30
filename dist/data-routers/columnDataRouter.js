import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const columnDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { innerBlocks, context: { index, customProps: { colSpans } = {} }, } = block;
    const children = blockRenderer.render(innerBlocks, {
        parent: block,
    });
    return {
        span: colSpans[index],
        totalSiblings: colSpans.length,
        className: classes,
        style: styles,
        children,
    };
};
