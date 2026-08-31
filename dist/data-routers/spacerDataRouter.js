import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const spacerDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { height, width } = block.attrs ?? {};
    return {
        className: classes,
        style: {
            ...styles,
            ...(height && { height }),
            ...(width && { width }),
        },
    };
};
