import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const htmlDataRouter = (block) => {
    const { styles } = wpBlockStyleBuilder(block);
    const { rendered } = block;
    return {
        className: "cntr-full",
        style: styles,
        children: rendered,
    };
};
