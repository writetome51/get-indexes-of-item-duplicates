"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var index_1 = require("./index");
var arr = [1];
var indexes = index_1.getIndexesOfItemDuplicates(1, arr);
if (arrays_match_1.arraysMatch(indexes, []))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
indexes = index_1.getIndexesOfItemDuplicates(1, arr);
if (arrays_match_1.arraysMatch(indexes, [4, 8]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
arr = ['aaa', 'a', 'aa', 'aa', 'aaaa'];
indexes = index_1.getIndexesOfItemDuplicates('a', arr);
if (Array.isArray(indexes) && arrays_match_1.arraysMatch(indexes, []))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
indexes = index_1.getIndexesOfItemDuplicates('aa', arr);
if (arrays_match_1.arraysMatch(indexes, [3]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
arr = [11, '', false, true, 'aaa', false, true, false, 1, 2];
indexes = index_1.getIndexesOfItemDuplicates('a', arr);
if (Array.isArray(indexes) && arrays_match_1.arraysMatch(indexes, [5, 7]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
arr = [{}, {}];
var errorTriggered = false;
try {
    indexes = index_1.getIndexesOfItemDuplicates({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
