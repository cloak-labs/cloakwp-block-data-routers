import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const columnDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { innerBlocks, attrs: { className } = {}, context: { index, customProps: { colSpans } = {} }, } = block;
    const children = blockRenderer.render(innerBlocks, {
        parent: block,
    });
    // TODO: default blockGap value that isn't 0?
    return {
        span: colSpans[index],
        className: cx(classes, className),
        style: styles,
        children,
    };
};
