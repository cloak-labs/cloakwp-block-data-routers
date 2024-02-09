// import { type BlockRenderer } from "cloakwp/cms";
export const getColumnWidths = (innerBlocks) => innerBlocks.map((col) => parseFloat(col.attrs.width) || 100 / innerBlocks.length);
/**
 * Returns true/false if a given value is serializable to JSON; useful for checking if dataRouter results
 * can be returned as props in Next.js `getStaticProps` or `getServerSideProps`, for example.
 */
// export function isJsonSerializable(obj: any, visited = new Set()): boolean {
//   // Directly return true for all base JSON serializable types
//   if (obj === null || ["string", "number", "boolean"].includes(typeof obj)) {
//     return true;
//   }
//   // Handle arrays, checking each element for serializability
//   if (Array.isArray(obj)) {
//     return obj.every((item) => isJsonSerializable(item, visited));
//   }
//   // Check for circular references to prevent infinite loops
//   if (visited.has(obj)) {
//     return false;
//   }
//   visited.add(obj);
//   // For objects, check each property value for serializability
//   if (typeof obj === "object") {
//     return Object.values(obj).every((value) =>
//       isJsonSerializable(value, visited)
//     );
//   }
//   // Exclude non-serializable types (function, symbol, etc.)
//   return false;
// }
// export const runDataRoutersOnServer = async (
//   blocksData: RestApiBlockData[],
//   blockRenderer: BlockRenderer
// ) => {
//   let blocksDataWithProps = blockRenderer.transformBlockDataAsync(blocksData);
//   console.log({ blocksDataWithProps });
//   const filtered =
//     blocksDataWithProps?.map((blockData) => {
//       if (isJsonSerializable(blockData.props) === false) {
//         console.log("IS NOT serializable: ", blockData.props);
//         return { block: blockData.block }; // remove `props`, which ensures we'll run this dataRouter on the client instead (since its result can't serialize to JSON, ie. contains functions/components etc.)
//       }
//       console.log("IS serializable: ", blockData.props);
//       return blockData;
//     }) ?? null;
//   console.log({ AFTER_blocksDataWithProps: filtered });
//   return filtered;
// };
// export const runDataRoutersOnClient = async (
//   blocksData: RestApiBlockData[],
//   blockRenderer: BlockRenderer
// ) => {
//   return blockRenderer.transformBlockData(blocksData);
// };
