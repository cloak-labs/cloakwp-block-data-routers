import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const blockquoteDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { attrs: { citation, className } = {} } = block;
    return {
        className: ["mb-8", classes],
        citationClassName: className?.includes("is-large") && "text-right",
        style: styles,
        citation,
    };
};
