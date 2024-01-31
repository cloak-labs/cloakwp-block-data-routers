import { type RestApiBlockData } from "cloakwp";

export const getColumnWidths = (innerBlocks: RestApiBlockData[]): number[] =>
  innerBlocks.map(
    (col) => parseFloat(col.attrs.width) || 100 / innerBlocks.length
  );
