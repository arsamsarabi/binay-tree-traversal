// Data
const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// Graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// BFS Breadth First Search
// Mutilple soutes? Shortest route?
// Queue
function bfs(from, to) {
  const visited = new Set();
  const queue = [from];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === to) {
        console.log(`BFS Found ${to}`);
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs("PHX", "LOS");

// DFS Depth First Search
// Does route exist?
// Recursive
function dfs(from, to, visited = new Set()) {
  visited.add(from);

  const destinations = adjacencyList.get(from);

  for (const destination of destinations) {
    if (destination === to) {
      console.log(`DFS found ${to}`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, to, visited);
    }
  }
}

dfs("PHX", "LOS");
