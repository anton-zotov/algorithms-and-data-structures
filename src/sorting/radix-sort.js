const defaultBucketIndex = ' ';
const alphabet = [defaultBucketIndex, ...'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const split = item => typeof item === 'object' ? item : `${item}`;
const getLen = item => item.length === undefined && typeof item === 'object' ? Object.keys(item).length : item.length;
const iterateOverBuckets = (buckets, fn) => alphabet.map(c => buckets[c] && fn(buckets[c]));

function sortIntoBuckets(buckets, index, arr) {
	for (let item of arr) {
		let splitItem = split(item);
		let len = getLen(splitItem);
		let bucketIndex = len > index ? splitItem[len - index - 1] : defaultBucketIndex;
		if (!buckets[bucketIndex]) buckets[bucketIndex] = [];
		buckets[bucketIndex].push(item);
	}
	return buckets;
}

function flattenBuckets(buckets) {
	let result = [];
	iterateOverBuckets(buckets, arr => result.push(...arr));
	return result;
}

function leastSignificantElement(arr) {
	let buckets = { [defaultBucketIndex]: arr };
	let maxLen = arr.reduce((ml, item) => Math.max(ml, getLen(split(item))), 0);
	for (let i = 0; i < maxLen; i++) {
		let currentBuckets = {};
		iterateOverBuckets(buckets, arr => sortIntoBuckets(currentBuckets, i, arr));
		buckets = currentBuckets;
	}
	return flattenBuckets(buckets);
}
exports.leastSignificantElement = leastSignificantElement;

const randomString = n => Array.from({ length: n },
	() => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
let arr = Array.from({ length: 10 },
	() => randomString(Math.floor(Math.random() * 5 + 1))
);
// console.log(arr)
arr = ['a', 'qwec', 'ba', 'abba', 'q', 'cfa', 'cc', 'cq'];
arr = [3, 1, 10, 20, 31, 4, 'a', ['a', 'b', 'q', 'c', 'g'], { 0: 'g', 1: 'a' }, 'qq', 'bb', 'asdc', 'adgdg', ['a', 'q', 'b', 'q', 'e']];