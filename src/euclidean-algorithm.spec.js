const ea = require('./euclidean-algorithm');

describe('greatest common divisor', () => {
	it('should find GCD of 5 and 2', () => {
		expect(ea.greatestCommonDivisor(5, 2)).toBe(1);
	});

	it('should find GCD of 2 and 5', () => {
		expect(ea.greatestCommonDivisor(2, 5)).toBe(1);
	});
	
	it('should find GCD of 5 and 0', () => {
		expect(ea.greatestCommonDivisor(5, 0)).toBe(5);
	});

	it('should find GCD of 2549 and 163', () => {
		expect(ea.greatestCommonDivisor(2549, 163)).toBe(1);
	});

	it('should find GCD of 4032 and 136', () => {
		expect(ea.greatestCommonDivisor(4032, 136)).toBe(8);
	});
});