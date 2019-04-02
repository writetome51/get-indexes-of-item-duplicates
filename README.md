# getIndexesOfAllDuplicates(array): number[]

Returns indexes of every duplicate instance of each item in `array`.  
Any item in `array` that is object will be considered unique.  
Will not work if array contains null or undefined.

## Examples
```ts
let arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
getIndexesOfAllDuplicates(arr);
// --> [4, 5, 6, 7, 8, 9, 10, 11]

arr = [ [1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4] ];
getIndexesOfAllDuplicates(arr);
// --> [2, 3, 4, 5]

arr = [ [1, 2, 'r'], [3, 4], [1, 2], [3, 4], [1, 2, 'r'], [3, 4] ];
getIndexesOfAllDuplicates(arr);
// --> [3, 4, 5]

// Any objects, even if identical, are considered unique:
arr = [ {prop: 1}, {prop: 1} ];
getIndexesOfAllDuplicates(arr);
// --> []

arr = [ [1, 2, {prop: 1}], [3, 4], [1, 2], [3, 4], [1, 2, {prop: 1}] ];
getIndexesOfAllDuplicates(arr);
// --> [3]

// The function won't work with null or undefined:
arr = [null, [3, 4], null, false, [1, 2], [1, 4], false];
getIndexesOfAllDuplicates(arr);
// Error: "Input must be either a primitive type or an array"
```

## Installation
`npm install  @writetome51/get-indexes-of-all-duplicates`

## Loading
```
// if using TypeScript:
import { getIndexesOfAllDuplicates } from '@writetome51/get-indexes-of-all-duplicates';
// if using ES5 JavaScript:
var getIndexesOfAllDuplicates = 
    require('@writetome51/get-indexes-of-all-duplicates').getIndexesOfAllDuplicates;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
