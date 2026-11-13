import { wpBlockFunctionalStyles } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const groupDataRouter = (block) => {
    const { classes, styles } = wpBlockFunctionalStyles(block);
    const { attrs: { tagName } = {} } = block;
    return {
        as: tagName,
        className: cx("bg-root", classes),
        style: styles,
    };
};
