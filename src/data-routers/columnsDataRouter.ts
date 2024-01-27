import { wpBlockStyleBuilder, WPDataRouter } from "cloakwp";
import { getGridLayoutFromColumnWidths } from "@cloakui/utils";
import { cx } from "@cloakui/styles";
import { GenericParentComponent } from "@cloakui/types";

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

  // get all column width percentage values into an array:
  const columnWidths: number[] = innerBlocks.map((col) => {
    const widthVal = parseFloat(col.attrs.width);
    return widthVal || 100 / innerBlocks.length; // if no width is specified, we make this safe mathematical assumption
  });

  const { gridCols, colSpans } = getGridLayoutFromColumnWidths(columnWidths);

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
