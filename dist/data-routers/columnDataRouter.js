import { wpBlockFunctionalStyles } from "cloakwp/blocks";
export const columnDataRouter = (block) => {
    const { classes, styles } = wpBlockFunctionalStyles(block);
    const { context: { index, fromParent: { colSpans } = {} }, } = block;
    return {
        span: colSpans[index],
        totalSiblings: colSpans.length,
        className: classes,
        style: styles,
    };
};
