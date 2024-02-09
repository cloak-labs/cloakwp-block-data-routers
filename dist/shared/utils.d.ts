import { type RestApiBlockData } from "cloakwp/blocks";
export declare const getColumnWidths: (innerBlocks: RestApiBlockData[]) => number[];
/**
 * Returns true/false if a given value is serializable to JSON; useful for checking if dataRouter results
 * can be returned as props in Next.js `getStaticProps` or `getServerSideProps`, for example.
 */
