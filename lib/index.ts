import { arrayHas } from '@writetome51/array-has';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { not } from '@writetome51/not';



// Returns indexes of every duplicate instance of each array item.
// Any item in array that is object will be considered unique.

export function getIndexesOfAllDuplicates(array): number[] {
	errorIfNotPopulatedArray(array);

	for (var indexes = [], uniqueItems = [], i = 0; i < array.length; ++i) {

		if (not(arrayHas(array[i], uniqueItems))) uniqueItems.push(array[i]);
		else indexes.push(i);
	}
	return indexes;
}
