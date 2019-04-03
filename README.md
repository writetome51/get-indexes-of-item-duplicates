# getIndexesOfItemDuplicates(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): number[]

Returns indexes of every duplicate instance of `value` in `array`.  
Errors if `value` is object, array that contains object, 
null, or undefined.

## Examples
```ts
let arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
getIndexesOfItemDuplicates(1, arr);
// --> [4, 8]

arr = [ [1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4] ];
getIndexesOfItemDuplicates( [1, 2], arr);
// --> [2, 4]

arr = [ [1, 2, 'r'], [1, 2], [3, 4], [1, 2, 'r'], [3, 4] ];
getIndexesOfItemDuplicates([1, 2, 'r'], arr);
// --> [3]

// Errors if value is object:
arr = [ {prop: 1}, {prop: 1} ];
getIndexesOfItemDuplicates({prop: 1}, arr);
//  Error: "Input must be either a primitive type or an array"

arr = [ [1, 2, {prop: 1}], [3, 4], [1, 2], [3, 4], [1, 2, {prop: 1}] ];
getIndexesOfItemDuplicates(arr);
// --> [3]

// The function won't work with null or undefined:
arr = [null, [3, 4], null, false, [1, 2], [1, 4], false];
getIndexesOfItemDuplicates(arr);
// Error: "Input must be either a primitive type or an array"
```

## Installation
`npm install  @writetome51/get-indexes-of-item-duplicates`

## Loading
```
// if using TypeScript:
import { getIndexesOfItemDuplicates } from '@writetome51/get-indexes-of-item-duplicates';
// if using ES5 JavaScript:
var getIndexesOfItemDuplicates = 
    require('@writetome51/get-indexes-of-item-duplicates').getIndexesOfItemDuplicates;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
