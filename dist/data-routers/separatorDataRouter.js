import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const separatorDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    return {
        className: [classes, block.attrs?.backgroundColor],
        style: styles,
    };
};
