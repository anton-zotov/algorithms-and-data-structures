// O(n*n)
function selectionSort(arr) {

	let res = [];
	for (let i = 0; i < arr.length; i++) {
		let minIndex = 0;
		for (let j = 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		res.push(arr[minIndex]);
		arr[minIndex] = Infinity;
	}
	return res;
}

let arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
console.log(`Original array: ${arr}`);
console.log(`Sorted array: ${selectionSort(arr)}`);