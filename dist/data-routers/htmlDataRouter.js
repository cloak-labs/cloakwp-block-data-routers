import { wpBlockFunctionalStyles } from "cloakwp/blocks";
export const htmlDataRouter = (block) => {
    const { styles } = wpBlockFunctionalStyles(block);
    const { rendered } = block;
    return {
        className: "cntr-full",
        style: styles,
        children: rendered,
    };
};
