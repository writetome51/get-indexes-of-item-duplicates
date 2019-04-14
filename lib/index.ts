import { getIndexesOf } from '@writetome51/array-get-indexes';
import { removeHead } from '@writetome51/array-remove-head-tail';
import { notEmpty } from '@writetome51/is-empty-not-empty';


// Returns indexes of every duplicate instance of `value`.
// It errors if `value` is an object, null, undefined, or an array that contains an object.

export function getIndexesOfItemDuplicates(value, array): number[] {
	let indexes = getIndexesOf(value, array);
	if (notEmpty(indexes)) removeHead(1, indexes); // We want everything after the first item.
	return indexes;
}
