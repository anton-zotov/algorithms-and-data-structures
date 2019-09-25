const rpn = require('./reverse-polish-notation');

describe('reverse-polish-notation', () => {
	describe('tokenize', () => {
		it('should tokenize a string', () => {
			let str = '1+2-(3*4)/5';
			let tokens = rpn.tokenize(str);
			expect(tokens).toEqual([1, '+', 2, '-', '(', 3, '*', 4, ')', '/', 5]);
		});
	});

	describe('shunting yard', () => {
		it('should convert a simple expression', () => {
			let exp = '1+2-3';
			let postfixExp = rpn.shuntingYard(rpn.tokenize(exp));
			expect(postfixExp).toEqual([1, 2, '+', 3, '-']);
		});

		it('should convert an expression with different precedence operators', () => {
			let exp = '1+2*3';
			let postfixExp = rpn.shuntingYard(rpn.tokenize(exp));
			expect(postfixExp).toEqual([1, 2, 3, '*', '+']);
		});

		it('should convert an expression with parentheses', () => {
			let exp = '(1+2)*3';
			let postfixExp = rpn.shuntingYard(rpn.tokenize(exp));
			expect(postfixExp).toEqual([1, 2, '+', 3, '*']);
		});

		it('should convert a complex expression', () => {
			let exp = '(1+2)*3+2*(5-6/2*(3-4/2))';
			let postfixExp = rpn.shuntingYard(rpn.tokenize(exp));
			expect(postfixExp).toEqual(
				[1, 2, '+', 3, '*', 2, 5, 6, 2, '/', 3, 4, 2, '/', '-', '*', '-', '*', '+']
			);
		});

		it('should throw exception on an extra closing parenthesis', () => {
			let exp = '1*(2+3))';
			let tokens = rpn.tokenize(exp);
			expect(() => rpn.shuntingYard(tokens)).toThrow();
		});
	});
	describe('evaluate postfix notation', () => {
		it('should calculate an expression', () => {
			let postfixExp = [1, 2, '+', 3, '*', 2, 5, 6, 2, '/', 3, 4, 2, '/', '-', '*', '-', '*', '+'];
			let result = rpn.evaluatePostfixNotation(postfixExp);
			expect(result).toBe(13);
		});
		
		it('should throw exception on invalid expression', () => {
			let invalidExp = [1, '+'];
			expect(() => rpn.evaluatePostfixNotation(invalidExp)).toThrow();
		});
	});

	describe('evaluate expression', () => {
		it('should evaluate an expression from string', () => {
			let exp = '2*(10/(2+3))';
			let result = rpn.evaluateExpression(exp);
			expect(result).toBe(4);
		});
	})
});