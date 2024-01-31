"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnWidths = void 0;
const getColumnWidths = (innerBlocks) => innerBlocks.map((col) => parseFloat(col.attrs.width) || 100 / innerBlocks.length);
exports.getColumnWidths = getColumnWidths;
