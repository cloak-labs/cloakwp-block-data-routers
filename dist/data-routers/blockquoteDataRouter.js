import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const blockquoteDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { innerBlocks, attrs: { citation, className } = {} } = block;
    const children = blockRenderer.render(innerBlocks, { parent: block });
    return {
        className: ["mb-8", classes],
        citationClassName: className?.includes("is-large") && "text-right",
        style: styles,
        citation,
        children,
    };
};
