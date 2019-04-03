import { getIndexesOf } from '@writetome51/array-get-indexes';
import { removeHead } from '@writetome51/array-remove-head-tail';
import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';


// Returns indexes of every duplicate instance of `value`.
// If `value` is object or array that contains object, this will always return empty array.

export function getIndexesOfItemDuplicates(value, array): number[] {
	let indexes = getIndexesOf(value, array);
	if (notEmpty(indexes)) removeHead(1, indexes); // We want everything after the first item.
	return indexes;
}
