# getIndexesOfItemDuplicates(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): number[]

Returns indexes of every duplicate instance of `value` in `array`.  
It errors if `value` is an object, null, undefined, or an array that contains  
an object.

## Examples
```ts
let arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
getIndexesOfItemDuplicates(1, arr);
// --> [4, 8]

arr = ['aaa', 'a', 'aa', 'aa', 'aaaa', 'a', 'aa'];
getIndexesOfItemDuplicates('a', arr);
// --> [5]

arr = [ [1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4] ];
getIndexesOfItemDuplicates( [1, 2], arr);
// --> [2, 4]

arr = [ [1, 2], [1, 2, 'r'], [3, 4], [1, 2, 'r'], [3, 4] ];
getIndexesOfItemDuplicates([1, 2, 'r'], arr);
// --> [3]

// Errors if value is object:
arr = [ {prop: 1}, {prop: 1} ];
getIndexesOfItemDuplicates({prop: 1}, arr);
//  Error: "Input must be either a primitive type or an array"
```

## Installation
`npm install  @writetome51/get-indexes-of-item-duplicates`

## Loading
```
// if using TypeScript:
import { getIndexesOfItemDuplicates } 
    from '@writetome51/get-indexes-of-item-duplicates';
// if using ES5 JavaScript:
var getIndexesOfItemDuplicates = 
    require('@writetome51/get-indexes-of-item-duplicates')
    .getIndexesOfItemDuplicates;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
