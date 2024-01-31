"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnsDataRouter = void 0;
const cloakwp_1 = require("cloakwp");
const utils_1 = require("../shared/utils");
const utils_2 = require("@cloakui/utils");
const styles_1 = require("@cloakui/styles");
const columnsDataRouter = (block, blockRenderer) => {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    const { innerBlocks, attrs: { className, isStackedOnMobile, style: { spacing: { margin } = {} } = {}, } = {}, } = block;
    const columnWidths = (0, utils_1.getColumnWidths)(innerBlocks); // get all column width percentage values into an array
    const { gridCols, colSpans } = (0, utils_2.getGridLayoutFromColumnWidths)(columnWidths);
    const gridColsClass = `grid-cols-${gridCols}`;
    const responsiveColClasses = {
        1: gridColsClass,
        2: `grid-cols-1 sm:${gridColsClass}`,
        3: `grid-cols-1 sm:grid-cols-2 md:${gridColsClass}`,
        4: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:${gridColsClass}`,
    }[Math.min(gridCols, 4)];
    const children = blockRenderer.render(innerBlocks, {
        parent: block,
        customProps: { colSpans },
    });
    return {
        className: (0, styles_1.cx)(classes, className, isStackedOnMobile ? responsiveColClasses : gridColsClass
        // !margin && "my-20"
        ),
        style: styles,
        children,
    };
};
exports.columnsDataRouter = columnsDataRouter;
