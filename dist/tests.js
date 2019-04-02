"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var index_1 = require("./index");
var arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
var indexes = index_1.getIndexesOfItemDuplicates(1, arr);
if (arrays_match_1.arraysMatch(indexes, [4, 8]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
