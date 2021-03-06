import { arraysMatch } from '@writetome51/arrays-match';
import { getIndexesOfItemDuplicates } from './index';


let arr: any[] = [1];
let indexes = getIndexesOfItemDuplicates(1, arr);

if (arraysMatch(indexes, [])) console.log('test 1 passed');
else console.log('test 1 FAILED');


arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
indexes = getIndexesOfItemDuplicates(1, arr);
if (arraysMatch(indexes, [4, 8])) console.log('test 2 passed');
else console.log('test 2 FAILED');


arr = ['aaa', 'a', 'aa', 'aa', 'aaaa'];

indexes = getIndexesOfItemDuplicates('a', arr);
if (Array.isArray(indexes) && arraysMatch(indexes, [])) console.log('test 3 passed');
else console.log('test 3 FAILED');


indexes = getIndexesOfItemDuplicates('aa', arr);
if (arraysMatch(indexes, [3])) console.log('test 4 passed');
else console.log('test 4 FAILED');


arr = [11, '', false, true, 'aaa', false, true, false, 1, 2];


indexes = getIndexesOfItemDuplicates('a', arr);
if (arraysMatch(indexes, [])) console.log('test 5 passed');
else console.log('test 5 FAILED');


indexes = getIndexesOfItemDuplicates(false, arr);
if (arraysMatch(indexes, [5, 7])) console.log('test 6 passed');
else console.log('test 6 FAILED');


arr = [11, [1], 1, false, [1], '', [1], 'j'];
indexes = getIndexesOfItemDuplicates([1], arr);
if (arraysMatch(indexes, [4, 6])) console.log('test 6A passed');
else console.log('test 6A FAILED');


arr = [{}, {}];
let errorTriggered = false;
try {
	indexes = getIndexesOfItemDuplicates({}, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


arr = [9, null, 1, null];
indexes = getIndexesOfItemDuplicates(1, arr);
if (arraysMatch(indexes, [])) console.log('test 8 passed');
else console.log('test 8 FAILED');

