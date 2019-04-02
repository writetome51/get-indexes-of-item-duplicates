"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_has_1 = require("@writetome51/array-has");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var not_1 = require("@writetome51/not");
// Returns indexes of every duplicate instance of each array item.
// Any item in array that is object will be considered unique.
function getIndexesOfAllDuplicates(array) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(array);
    for (var indexes = [], uniqueItems = [], i = 0; i < array.length; ++i) {
        if (not_1.not(array_has_1.arrayHas(array[i], uniqueItems)))
            uniqueItems.push(array[i]);
        else
            indexes.push(i);
    }
    return indexes;
}
exports.getIndexesOfAllDuplicates = getIndexesOfAllDuplicates;
