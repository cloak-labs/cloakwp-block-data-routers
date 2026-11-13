import { wpBlockFunctionalStyles } from "cloakwp/blocks";
export const buttonsDataRouter = (block) => {
    const { classes, styles } = wpBlockFunctionalStyles(block);
    return {
        className: classes,
        style: styles,
    };
};
