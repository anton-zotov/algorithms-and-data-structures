const ops = {
	'+': [1, (a, b) => a + b],
	'-': [1, (a, b) => a - b],
	'*': [2, (a, b) => a * b],
	'/': [2, (a, b) => a / b],
}

function evaluatePostfixNotation(expression) {
	let operands = [];
	for (let token of expression) {
		if (typeof token === 'number') {
			operands.push(token);
		} else if (ops[token]) {
			let operand2 = operands.pop();
			let operand1 = operands.pop();
			if (operand1 === undefined || operand2 === undefined) {
				throw 'Invalid expression';
			}
			let res = ops[token][1](operand1, operand2);
			operands.push(res);
		}
	}
	return operands[0];
}
exports.evaluatePostfixNotation = evaluatePostfixNotation;

function shuntingYard(tokens) {
	let opStack = [];
	let result = [];
	for (let token of tokens) {
		if (typeof token === 'number') {
			result.push(token);
		} else if (token === '(') {
			opStack.push(token);
		} else if (token === ')') {
			while (opStack.length && opStack[opStack.length - 1] !== '(') {
				result.push(opStack.pop());
			}
			if (!opStack.length) {
				throw 'Invalid expression: extra closing bracket';
			}
			opStack.pop();
		} else {
			const [precedence, op] = ops[token];
			while (opStack.length &&
				ops[opStack[opStack.length - 1]] && // there is an operator on top of opStack
				ops[opStack[opStack.length - 1]][0] >= precedence // and it has greated precedence
			) {
				result.push(opStack.pop());
			}
			opStack.push(token);
		}
	}
	while (opStack.length) {
		result.push(opStack.pop());
	}
	return result;
}
exports.shuntingYard = shuntingYard;

function tokenize(str) {
	const tokens = [];
	let token = '';
	const isDigit = c => c >= '0' && c <= '9';
	for (let c of str) {
		if (isDigit(c)) token += c;
		else {
			if (token) {
				tokens.push(+token);
				token = '';
			}
			tokens.push(c);
		}
	}
	if (token) tokens.push(+token);
	return tokens;
}
exports.tokenize = tokenize;

function evaluateExpression(str) {
	return evaluatePostfixNotation(shuntingYard(tokenize(str)));
}
exports.evaluateExpression = evaluateExpression;