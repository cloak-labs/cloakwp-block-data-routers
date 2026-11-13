import { wpBlockFunctionalStyles } from "cloakwp/blocks";
export const spacerDataRouter = (block) => {
    const { classes, styles } = wpBlockFunctionalStyles(block);
    const { height, width } = block.attrs ?? {};
    return {
        className: classes,
        style: {
            ...styles,
            ...(!block.__cloakBlockStyles && height && { height }),
            ...(!block.__cloakBlockStyles && width && { width }),
        },
    };
};
