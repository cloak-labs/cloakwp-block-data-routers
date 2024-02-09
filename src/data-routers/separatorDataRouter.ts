import { wpBlockStyleBuilder, type WPDataRouter } from "cloakwp/blocks";
import { TSeparatorProps } from "@cloakui/types";
import { cx } from "@cloakui/styles";

export const separatorDataRouter: WPDataRouter<TSeparatorProps> = (
  block
): TSeparatorProps => {
  const { classes, styles } = wpBlockStyleBuilder(block);
  const { backgroundColor } = block.attrs;

  return {
    className: cx(classes, backgroundColor),
    style: styles,
  };
};
