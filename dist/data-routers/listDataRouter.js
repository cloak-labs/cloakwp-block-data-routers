import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const listDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
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
        className: [
            classes,
            ordered ? "list-decimal" : "list-disc",
            !parent && "mb-6",
        ],
        style: styles,
        children,
    };
};
