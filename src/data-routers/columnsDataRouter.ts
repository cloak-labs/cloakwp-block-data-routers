import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { getColumnWidths } from "../shared/utils";
import { getGridLayoutFromColumnWidths } from "@cloakui/utils";
import { cx } from "@cloakui/styles";
import { type GenericParentComponent } from "@cloakui/types";

export const columnsDataRouter: WPDataRouter<GenericParentComponent> = (
  block,
  blockRenderer
): GenericParentComponent => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const {
    innerBlocks,
    attrs: {
      className,
      isStackedOnMobile,
      style: { spacing: { margin } = {} } = {},
    } = {},
  } = block;

  const columnWidths = getColumnWidths(innerBlocks); // get all column width percentage values into an array
  const { gridCols, colSpans = null } =
    getGridLayoutFromColumnWidths(columnWidths);

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
    className: cx(
      classes,
      className,
      isStackedOnMobile ? responsiveColClasses : gridColsClass,
      !margin && "my-20"
    ),
    style: styles,
    children,
  };
};
