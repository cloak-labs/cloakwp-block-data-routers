import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const listItemDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { attrs: { values, content, className } = {}, innerBlocks,
    // context: { parent },
     } = block;
    let children;
    if (innerBlocks?.length) {
        // using WP v6.1 or later, where the `core/list-item` inner block was introduced rather than baking all the <li>'s into the `block.attrs.values` field
        children = blockRenderer.render(innerBlocks, { parent: block });
    }
    else {
        children = values || null;
    }
    return {
        content,
        className: cx(classes, className),
        style: styles,
        children,
    };
};
