// O(n*log(n))
function quickSort(arr) {
	if (arr.length < 2) return arr;
	if (arr.length === 2) {
		if (arr[0] <= arr[1]) return arr;
		return [arr[1], arr[0]];
	}
	let pivotIndex = getPivotIndex(arr);
	let arr1 = [];
	let arr2 = [];
	for (let i=0; i<arr.length; i++) {
		if (i === pivotIndex) continue;
		if (arr[i] > arr[pivotIndex]) arr2.push(arr[i]);
		else arr1.push(arr[i]);
	}
	return [...quickSort(arr1), arr[pivotIndex], ...quickSort(arr2)];
}

function getPivotIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}
