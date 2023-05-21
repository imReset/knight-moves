function knightMoves(start, end) {
  // Define possible knight moves
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  // Define the chessboard size
  const boardSize = 8;

  // Create a queue for BFS
  const queue = [[start]];

  // Track visited squares
  const visited = new Set();
  visited.add(start.toString());

  // Perform breadth-first search
  while (queue.length > 0) {
    const path = queue.shift();
    const [currentX, currentY] = path[path.length - 1];

    // Check if the current square is the destination
    if (currentX === end[0] && currentY === end[1]) {
      return path;
    }

    // Generate all possible next moves
    for (const [dx, dy] of moves) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;

      // Check if the next move is valid
      if (nextX >= 0 && nextX < boardSize && nextY >= 0 && nextY < boardSize) {
        const nextPos = [nextX, nextY];
        const newPath = [...path, nextPos];

        // Add the new path to the queue and mark the square as visited
        if (!visited.has(nextPos.toString())) {
          queue.push(newPath);
          visited.add(nextPos.toString());
        }
      }
    }
  }

  // No path found
  return null;
}

// Test cases
console.log(knightMoves([0, 0], [1, 2])); 
console.log(knightMoves([0, 2], [3, 3]));
console.log(knightMoves([3, 3], [4, 0])); 
console.log(knightMoves([3, 3], [4, 8])); //should return as null
