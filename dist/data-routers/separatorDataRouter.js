import { wpBlockFunctionalStyles } from "cloakwp/blocks";
export const separatorDataRouter = (block) => {
    const { classes, styles } = wpBlockFunctionalStyles(block);
    return {
        className: [classes, block.attrs?.backgroundColor],
        style: styles,
    };
};
