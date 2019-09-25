// O(n**2)
function getSumOfEverySubarray(arr) {
	// presum
	for (let i = 1; i < arr.length; i++) {
		arr[i] += arr[i - 1];
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			let sum = arr[j] - (i ? arr[i - 1] : 0);
			console.log(`Sum from ${i} to ${j} is ${sum}`);
		}
	}
}

let arr = Array.from({ length: 6 }, (_, i) => i + 1);
console.log(`The array: ${arr}`);
getSumOfEverySubarray(arr);