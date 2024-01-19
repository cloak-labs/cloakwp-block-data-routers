import { WPDataRouter, wpBlockStyleBuilder } from "cloakwp";

export const buttonsDataRouter: WPDataRouter = (block, blockRenderer) => {
  const { classes, styles } = wpBlockStyleBuilder(block);

  const { innerBlocks } = block;
  const children = blockRenderer.render(innerBlocks, { parent: block });

  return {
    className: classes,
    style: styles,
    children,
  };
};
