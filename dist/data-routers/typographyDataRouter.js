import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { cx } from "@cloakui/styles";
export const typographyDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { context: { parent } = {}, attrs: { fontSize } = {} } = block;
    let customClasses = [];
    customClasses.push(block?.attrs?.backgroundColor ? "p-6" : "mb-6");
    if (fontSize) {
        // if user provides a custom font size, we must add breakpoint variations of that font-size to fully override the default sizes:
        customClasses.push(`xs:text-${fontSize}`, `sm:text-${fontSize}`, `md:text-${fontSize}`, `lg:text-${fontSize}`, `xl:text-${fontSize}`, `2xl:text-${fontSize}`);
    }
    if (block.name == "core/paragraph" &&
        parent?.name == "core/quote" &&
        parent?.attrs?.className?.includes("is-large")) {
        customClasses.push("text-xl leading-relaxed font-light");
    }
    return {
        className: cx(classes, customClasses, parent && !styles?.margin && "mb-0 !mt-0"),
        style: styles,
        children: block.attrs.content,
    };
};
