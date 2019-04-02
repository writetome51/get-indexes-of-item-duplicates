"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
var indexes = index_1.getIndexesOfAllDuplicates(arr);
if (arrays_match_1.arraysMatch(indexes, [4, 5, 6, 7, 8, 9, 10, 11]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
arr = [[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [1, 4], [3, 4]];
indexes = index_1.getIndexesOfAllDuplicates(arr);
if (arrays_match_1.arraysMatch(indexes, [2, 3, 4, 6]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
arr = [[1, 2, 'r'], [3, 4], [1, 2], [3, 4], [1, 2, 'r'], [1, 4], [3, 4]];
indexes = index_1.getIndexesOfAllDuplicates(arr);
if (arrays_match_1.arraysMatch(indexes, [3, 4, 6]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
arr = [[1, 2, { prop: 1 }], [3, 4], [1, 2], [3, 4], [1, 2, { prop: 1 }], [1, 4], [3, 4]];
indexes = index_1.getIndexesOfAllDuplicates(arr);
if (arrays_match_1.arraysMatch(indexes, [3, 6]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Objects, even if identical, are expected to be considered unique:
arr = [[1, 2, { prop: 1 }], [1, 2, { prop: 1 }]];
indexes = index_1.getIndexesOfAllDuplicates(arr);
if (arrays_match_1.arraysMatch(indexes, []))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
var errorTriggered = false;
arr = [undefined, [3, 4], undefined, false, [1, 2], [1, 4], false];
try {
    indexes = index_1.getIndexesOfAllDuplicates(arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
