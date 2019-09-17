/**
 * Weighted quick union algorithm
*/

class WeightedQuickUnion {
	constructor(n) {
		this.id = Array.from({length: n}, (_, i) => i);
		this.weights = Array(n).fill(1);
	}

	getRoot(k) {
		let root = k;
		while (root !== this.id[root]) {
			root = this.id[root];
		}
		while (k !== root) {
			// loop for tree flattening
			let i = this.id[k];
			k = this.id[k];
			this.id[i] = root;
		}
		return root;
	}

	// O(ln(n))
	find(p, q) {
		let connected = this.getRoot(p) === this.getRoot(q);
		console.log(`${p} - ${q}`, connected);		
		return connected;
	}

	// O(ln(n))
	union(p, q) {
		console.log(`connecting ${p}-${q}`);
		const pRoot = this.getRoot(p);
		const qRoot = this.getRoot(q);
		if (pRoot === qRoot) return;
		if (this.weights[pRoot] < this.weights[qRoot]) {
			this.id[pRoot] = qRoot;
			this.weights[qRoot] += this.weights[pRoot];
		} else {
			this.id[qRoot] = pRoot;
			this.weights[pRoot] += this.weights[qRoot];
		}
	}

	log() {
		console.log(this.id, this.weights);
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