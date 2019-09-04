/**
 * Quick find algorithm
*/

class QuickFind {
	constructor(n) {
		this.id = Array.from({length: n}, (_, i) => i);
	}

	find(p, q) {
		let united = this.id[p] === this.id[q];
		console.log(`${p} - ${q}`, united);
		return united;
	}

	union(p, q) {
		console.log(`connecting ${p}-${q}`);
		this.id.forEach((component, i) => {
			if (component === this.id[p]) {
				this.id[i] = this.id[q];
			}
		});
	}

	log() {
		console.log(this.id);
	}
}

let qf = new QuickFind(10);
qf.union(0, 5);
qf.union(6, 5);
qf.union(1, 2);
qf.union(2, 7);
qf.union(8, 3);
qf.union(4, 9);
qf.union(8, 9);
qf.log();
qf.find(0, 5);
qf.find(0, 6);
qf.find(0, 7);
qf.find(3, 4);
qf.find(2, 9);