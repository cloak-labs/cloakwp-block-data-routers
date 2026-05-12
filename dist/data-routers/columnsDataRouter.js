import { wpBlockStyleBuilder } from "cloakwp/blocks";
import { getColumnWidths } from "../shared/utils";
import { getGridLayoutFromColumnWidths } from "@cloakui/utils";
export const columnsDataRouter = (block, blockRenderer) => {
    const { classes, styles } = wpBlockStyleBuilder(block);
    const { context: { parent }, innerBlocks, attrs: { isStackedOnMobile, style: { spacing: { margin } = {} } = {} } = {}, } = block;
    const columnWidths = getColumnWidths(innerBlocks); // get all column width percentage values into an array
    const { gridCols, colSpans = null } = getGridLayoutFromColumnWidths(columnWidths);
    const gridColsClass = `grid-cols-${gridCols}`;
    const responsiveColClasses = {
        1: gridColsClass,
        2: `grid-cols-1 md:${gridColsClass}`,
        3: `grid-cols-1 sm:grid-cols-2 xmd:${gridColsClass}`,
        4: `grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 lg:${gridColsClass}`,
    }[Math.min(innerBlocks.length, 4)];
    const children = blockRenderer.render(innerBlocks, {
        parent: block,
        customProps: { colSpans },
    });
    return {
        className: [
            isStackedOnMobile ? responsiveColClasses : gridColsClass,
            !margin && !parent && "my-20",
            classes,
        ],
        style: styles,
        children,
    };
};
