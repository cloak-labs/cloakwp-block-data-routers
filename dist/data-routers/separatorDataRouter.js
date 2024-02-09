import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const separatorDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { backgroundColor } = block.attrs;
    return {
        className: cx(classes, backgroundColor),
        style: styles,
    };
};
