import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const listItemDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { attrs: { values, content, className } = {} } = block;
    return {
        content,
        className: [classes, className],
        style: styles,
        // Nested lists (and WP < 6.1 attrs.values) — innerBlocks overwrite
        // children via nestedBlocks when present.
        children: values || null,
    };
};
