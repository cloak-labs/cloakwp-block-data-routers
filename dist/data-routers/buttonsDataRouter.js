import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const buttonsDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    return {
        className: classes,
        style: styles,
    };
};
