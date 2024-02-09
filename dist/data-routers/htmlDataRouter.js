import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const htmlDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { rendered } = block;
    return {
        className: cx("mb-6", classes),
        style: styles,
        content: rendered,
    };
};
