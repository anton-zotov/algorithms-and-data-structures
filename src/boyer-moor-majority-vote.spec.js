const boyerMoorAlg = require('./boyer-moor-majority-vote');

describe('majority vote', () => {
	it('should find the major element', () => {
		let arrWithMajor = [1, 1, 2, 1, 4, 5, 1, 0, 1];
		expect(boyerMoorAlg.majorityVote(arrWithMajor)).toBe(1);
	});

	it('should return null when there is no major element', () => {
		let arrWithoutMajor = [1, 2, 1, 4, 5, 1, 0, 1];
		expect(boyerMoorAlg.majorityVote(arrWithoutMajor)).toBe(null);
	});
});