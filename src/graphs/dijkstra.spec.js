const dijkstra = require('./dijkstra');

describe("Dijkstra's algorithm", () => {
	const graph = [
		{ 1: 9 },
		{ 2: 7, 3: 10 },
		{ 3: 1, 4: 4 },
		{ 5: 8 },
		{ 3: 3, 5: 6 },
		{},
		{ 1: 10 },
	];

	it('should find the shortest path between 0 and 5', () => {
		expect(dijkstra.shortestPath(graph, 0, 5)).toBe(25);
	});

	it('should find the shortest path between 0 and 4', () => {
		expect(dijkstra.shortestPath(graph, 0, 4)).toBe(20);
	});

	it('should return infinity for not connected nodes', () => {
		expect(dijkstra.shortestPath(graph, 5, 6)).toBe(Infinity);
	});

	it('should return zero for the path to the start', () => {
		expect(dijkstra.shortestPath(graph, 5, 5)).toBe(0);
	});
});