"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var not_1 = require("@writetome51/not");
var array_has_1 = require("@writetome51/array-has");
// Returns indexes of every extra instance of each array item.
function getIndexesOfDuplicates(array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    var indexes = [], uniqueItems = [], i = -1;
    while (++i < array.length) {
        if (not_1.not(array_has_1.arrayHas(array[i], uniqueItems)))
            uniqueItems.push(array[i]);
        else
            indexes.push(i);
    }
    return indexes;
}
exports.getIndexesOfDuplicates = getIndexesOfDuplicates;
