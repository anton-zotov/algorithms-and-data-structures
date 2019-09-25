// O(n)
function majorityVote(arr) {
	let major = arr[0];
	let count = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === major) {
			count++;
		} else {
			count--;
		}
		if (count === 0) {
			major = arr[i];
			count = 1;
		}
	}
	return verifyMajor(arr, major) ? major : null;
}
function verifyMajor(arr, major) {
	count = 0;
	for (let n of arr) {
		if (n === major) count++;
		if (count > arr.length / 2) return true;
	}
	return false;
}

const arrWithMajor = [1, 1, 2, 1, 4, 5, 1, 0, 1];
const arrWithoutMajor = [1, 2, 1, 4, 5, 1, 0, 1];
console.log(`the major element in array ${arrWithMajor} is ${majorityVote(arrWithMajor)}`);
console.log(`the major element in array ${arrWithoutMajor} is ${majorityVote(arrWithoutMajor)}`);