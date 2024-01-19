import { WPDataRouter } from "cloakwp";
import type { GenericParentComponent } from "@cloakui/types";
export type ColumnProps = GenericParentComponent & {
    span: number;
};
export declare const columnDataRouter: WPDataRouter<ColumnProps>;
