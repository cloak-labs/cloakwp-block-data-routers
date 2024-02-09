import { cx } from "@cloakui/styles";
import { excludeClassNamesStartingWith } from "@cloakui/utils";
import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const buttonDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    // remove bg-* and text-* classes from computed classes, because the button `variant` prop will handle applying these classes
    const finalClasses = excludeClassNamesStartingWith(classes, ["bg-", "text-"]);
    const { context: { parent }, } = block;
    let { className, text, url } = block.attrs;
    let variant = "default";
    if (className) {
        if (className.includes("is-style-outline"))
            variant = "outline";
        else if (className.includes("is-style-secondary"))
            variant = "secondary";
    }
    let props = {
        variants: { variant },
        className: cx(!parent && "mb-4", finalClasses),
        style: styles,
        children: text,
    };
    if (url)
        props.href = url;
    return props;
};
