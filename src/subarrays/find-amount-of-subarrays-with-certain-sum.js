// O(n)

function findAmountOfSubarrayWithSum(arr, k) {
	let prevSumsAmount = new Map([[0, 1]]);
	let res = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (prevSumsAmount.has(sum - k)) {
			/* The current sum is greater then k by sum - k
			** We have seen sum - k already prevSumsAmount.has(sum - k) times
			** So we can deduct sum - k from sum prevSumsAmount.has(sum - k) times
			** To make a subarray with sum k */
			res += prevSumsAmount.get(sum - k);
		}
		prevSumsAmount.set(sum, (prevSumsAmount.get(sum) || 0) + 1);
	}
	console.log(`The amount of subarrays with sum ${k} is ${res}`);
	return res;
}

let arr = [1, 3, 2, -1, 4, 1, 2];
console.log(`The array: ${arr}`);
for (let k = 0; k < 10; k++) {
	findAmountOfSubarrayWithSum(arr, k);
}