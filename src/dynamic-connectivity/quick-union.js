/**
 * Quick union algorithm
*/

class QuickUnion {
	constructor(n) {
		this.id = Array.from({length: n}, (_, i) => i);
	}

	getRoot(k) {
		while (k !== this.id[k]) {
			k = this.id[k];
		}
		return k;
	}

	// O(n)
	find(p, q) {
		let connected = this.getRoot(p) === this.getRoot(q);
		console.log(`${p} - ${q}`, connected);		
		return connected;
	}

	// O(n)
	union(p, q) {
		console.log(`connecting ${p}-${q}`);
		this.id[this.getRoot(p)] = this.getRoot(q);
	}

	log() {
		console.log(this.id);
	}
}

let qu = new QuickUnion(10);
qu.union(0, 5);
qu.union(6, 5);
qu.log();
qu.union(1, 2);
qu.union(2, 7);
qu.log();
qu.union(8, 3);
qu.union(4, 9);
qu.log();
qu.union(8, 9);
qu.log();
qu.find(0, 5);
qu.find(0, 6);
qu.find(0, 7);
qu.find(3, 4);
qu.find(2, 9);