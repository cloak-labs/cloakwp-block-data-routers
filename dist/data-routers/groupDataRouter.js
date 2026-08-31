import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const groupDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { attrs: { tagName } = {} } = block;
    return {
        as: tagName,
        className: cx("bg-root", classes),
        style: styles,
    };
};
