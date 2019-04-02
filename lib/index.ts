import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { not } from '@writetome51/not';
import { arrayHas } from '@writetome51/array-has';


// Returns indexes of every extra instance of each array item.

export function getIndexesOfDuplicates(array): number[] {
	errorIfNotPopulatedArray(array);

	let indexes = [], uniqueItems = [], i = -1;
	while (++i < array.length) {

		if (not(arrayHas(array[i], uniqueItems))) uniqueItems.push(array[i]);
		else indexes.push(i);
	}
	return indexes;
}
