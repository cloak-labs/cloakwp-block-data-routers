import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { type TSeparatorProps } from "@cloakui/types";

export const separatorDataRouter: WPDataRouter<TSeparatorProps> = (
  block
): TSeparatorProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  return {
    className: [classes, block.attrs?.backgroundColor],
    style: styles,
  };
};
