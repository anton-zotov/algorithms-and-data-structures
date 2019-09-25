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
exports.asc = selectionSort;