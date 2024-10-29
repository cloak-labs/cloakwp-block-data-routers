// import { excludeClassNamesStartingWith } from "@cloakui/utils";
import { wpBlockStyleBuilder } from "cloakwp/blocks";
export const buttonDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    // remove bg-* and text-* classes from computed classes, because the button `variant` prop will handle applying these classes
    // const finalClasses = excludeClassNamesStartingWith(classes, ["bg-", "text-"]);
    const finalClasses = classes;
    const { context: { parent }, } = block;
    let { className, text, url } = block.attrs;
    let variant = "default";
    if (className) {
        const classList = className.split(" ");
        if (classList.includes("is-style-outline"))
            variant = "outline";
        else if (classList.includes("is-style-secondary"))
            variant = "secondary";
        else if (classList.includes("is-style-ghost"))
            variant = "ghost";
    }
    let props = {
        variants: { variant },
        className: [!parent && "mb-4", finalClasses],
        style: styles,
        children: text,
    };
    if (url)
        props.href = url;
    return props;
};
