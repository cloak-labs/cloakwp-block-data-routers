import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const groupDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { innerBlocks, attrs: { tagName } = {} } = block;
    const children = blockRenderer.render(innerBlocks, {
        parent: block,
    });
    return {
        as: tagName,
        className: cx("bg-root", classes),
        style: styles,
        children,
    };
};
