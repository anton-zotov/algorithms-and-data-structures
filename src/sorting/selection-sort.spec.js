const selectionSort = require('./selection-sort');

describe('selection sort', () => {
	it('should sort elements in ascending order', () => {
		let arr = [69, 81, 73, 22, 99, 54, 99, 52, 87, 10];
		let sorted = [10, 22, 52, 54, 69, 73, 81, 87, 99, 99];
		expect(selectionSort.asc(arr)).toEqual(sorted);
	});
});