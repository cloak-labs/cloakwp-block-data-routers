import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { getColumnsLayout } from "../shared/utils";
export const columnsDataRouter = (block) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { context: { parent }, innerBlocks, attrs: { isStackedOnMobile, style: { spacing: { margin } = {} } = {} } = {}, } = block;
    const { gridCols } = getColumnsLayout(innerBlocks);
    const gridColsClass = `grid-cols-${gridCols}`;
    const responsiveColClasses = {
        1: gridColsClass,
        2: `grid-cols-1 md:${gridColsClass}`,
        3: `grid-cols-1 sm:grid-cols-2 xmd:${gridColsClass}`,
        4: `grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 lg:${gridColsClass}`,
    }[Math.min(innerBlocks.length, 4)];
    return {
        className: [
            isStackedOnMobile ? responsiveColClasses : gridColsClass,
            !margin && !parent && "my-20",
            classes,
        ],
        style: styles,
    };
};
