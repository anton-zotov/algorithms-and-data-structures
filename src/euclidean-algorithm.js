function greatestCommonDivisor(a, b) {
	if (b > a) [a, b] = [b, a];
	if (a === 0) return b;
	if (b === 0) return a;
	return greatestCommonDivisor(b, a % b);
}
exports.greatestCommonDivisor = greatestCommonDivisor;