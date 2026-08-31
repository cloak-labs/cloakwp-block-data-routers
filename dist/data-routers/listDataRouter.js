import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const listDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { attrs: { ordered, values } = {}, context: { parent }, } = block;
    return {
        as: ordered ? "ol" : "ul",
        className: [
            // TODO: These class names are legacy from the legacy container ladder. Test this block with the new approach of "cntr align-start-wide" and adjust below as necessary
            // remove cntr-start and cntr-end classes, as they get applied to the wrapping container div and conflict with the list's built-in horizontal padding
            classes
                .split(" ")
                .filter((c) => c !== "cntr-start" && c !== "cntr-end")
                .join(" "),
            ordered ? "list-decimal" : "list-disc",
            !parent && "mb-6",
        ],
        style: styles,
        // WP < 6.1 baked <li> HTML into attrs.values. innerBlocks (when present)
        // overwrite children via nestedBlocks.
        children: values,
    };
};
