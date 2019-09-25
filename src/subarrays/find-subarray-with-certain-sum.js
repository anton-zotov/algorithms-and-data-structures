// O(n)
function findSubarrayWithSum(arr, k) {
	let seen = new Map([[0, -1]]);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (seen.has(sum - k)) {
			let start = seen.get(sum - k) + 1;
			console.log(`Subarray with sum ${k} is located in [${start}, ${i}]: ${arr.slice(start, i + 1)}`);
			return true;
		}
		seen.set(sum, i);
	}
	console.log(`No subarray with sum ${k} found`);
	return false;
}

let arr = Array.from({ length: 6 }, (_, i) => i + 1);
console.log(`The array: ${arr}`);
for (let k = 1; k < 25; k++) {
	findSubarrayWithSum(arr, k);
}