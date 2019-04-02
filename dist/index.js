"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_remove_head_tail_1 = require("@writetome51/array-remove-head-tail");
// Returns indexes of every duplicate instance of `value`.
// If `value` is object or array that contains object, this will always return empty array.
function getIndexesOfItemDuplicates(value, array) {
    var indexes = array_get_indexes_1.getIndexesOf(value, array);
    array_remove_head_tail_1.removeHead(1, indexes); // We want everything after the first item.
    return indexes;
}
exports.getIndexesOfItemDuplicates = getIndexesOfItemDuplicates;
