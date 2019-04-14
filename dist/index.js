"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_remove_head_tail_1 = require("@writetome51/array-remove-head-tail");
var is_empty_not_empty_1 = require("@writetome51/is-empty-not-empty");
// Returns indexes of every duplicate instance of `value`.
// It errors if `value` is an object, null, undefined, or an array that contains an object.
function getIndexesOfItemDuplicates(value, array) {
    var indexes = array_get_indexes_1.getIndexesOf(value, array);
    if (is_empty_not_empty_1.notEmpty(indexes))
        array_remove_head_tail_1.removeHead(1, indexes); // We want everything after the first item.
    return indexes;
}
exports.getIndexesOfItemDuplicates = getIndexesOfItemDuplicates;
