function shortestPath(graph, start, end) {
	let queue = [...graph.keys()];
	let dist = Array(graph.length).fill(Infinity);
	dist[start] = 0;

	function popMinFromQueue() {
		let minIndex = 0;
		let minDist = dist[queue[minIndex]];
		for (let i = 1; i < queue.length; i++) {
			if (dist[queue[i]] < minDist) {
				minIndex = i;
				minDist = dist[queue[i]];
			}
		}
		let res = queue[minIndex];
		queue = queue.filter((v, i) => i !== minIndex);
		return res;
	}

	while (queue.length) {
		let node = popMinFromQueue();
		for (let [neighbour, distToNeighbour] of Object.entries(graph[node])) {
			let altDist = dist[node] + distToNeighbour;
			if (altDist < dist[neighbour]) {
				dist[neighbour] = altDist;
			}
		}
	}
	return dist[end];
}
exports.shortestPath = shortestPath;