import { arraysMatch } from '@writetome51/arrays-match';
import { getIndexesOfItemDuplicates } from './index';


let arr: any[] = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

let indexes = getIndexesOfItemDuplicates(1 ,arr);
if (arraysMatch(indexes, [4, 8])) console.log('test 1 passed');
else console.log('test 1 FAILED');
