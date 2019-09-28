const radixSort = require('./radix-sort');

let testCases = {
	numbers: {
		original: [68, 49, 78, 91, 51, 64, 13, 61, 19, 12],
		sorted: [12, 13, 19, 49, 51, 61, 64, 68, 78, 91]
	},
	strings: {
		original: ['latr', 'cpak', 'wvl', 'f', 'e', 'lu', 'igdv', 'dgji', 'gjy', 'mlt'],
		sorted: ['e', 'f', 'lu', 'gjy', 'mlt', 'wvl', 'cpak', 'dgji', 'igdv', 'latr']
	},
	arrays: {
		original: [[6, 1, 8], [0], [9, 2], [6], [4, 3], [3, 8, 1], [4]],
		sorted: [[0], [4], [6], [4, 3], [9, 2], [3, 8, 1], [6, 1, 8]]
	},
	objects: {
		original: [{ 0: 's', 1: 't' }, { 0: 'z' }, { 0: 'h' }, { 0: 'r', 1: 'q', 2: 'n' }, { 0: 'e', 1: 'r' }],
		sorted: [{ 0: 'h' }, { 0: 'z' }, { 0: 'e', 1: 'r' }, { 0: 's', 1: 't' }, { 0: 'r', 1: 'q', 2: 'n' }]
	},
	mixed: {
		original: [10, 20, 31, 4, 'a', ['a', 'b', 'q', 'c', 'g'], { 0: 'g', 1: 'a' },
			'qq', 'bb', 'asdc', 'adgdg', ['a', 'q', 'b', 'q', 'e']],
		sorted: [4, 'a', 10, 20, 31, 'bb', { '0': 'g', '1': 'a' }, 'qq', 'asdc',
			['a', 'b', 'q', 'c', 'g'], 'adgdg', ['a', 'q', 'b', 'q', 'e']]
	}
}

describe('least significant element', () => {
	it('should sort numbers', () => {
		expect(radixSort.leastSignificantElement(testCases.numbers.original))
			.toEqual(testCases.numbers.sorted);
	});

	it('should sort strings', () => {
		expect(radixSort.leastSignificantElement(testCases.strings.original))
			.toEqual(testCases.strings.sorted);
	});

	it('should sort arrays', () => {
		expect(radixSort.leastSignificantElement(testCases.arrays.original))
			.toEqual(testCases.arrays.sorted);
	});

	it('should sort objects', () => {
		expect(radixSort.leastSignificantElement(testCases.objects.original))
			.toEqual(testCases.objects.sorted);
	});

	it('should sort mixed data', () => {
		expect(radixSort.leastSignificantElement(testCases.mixed.original))
			.toEqual(testCases.mixed.sorted);
	});
});