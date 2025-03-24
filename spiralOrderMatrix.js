const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

const spiralMatrix = (matrix) => {
  const result = []
  const m = matrix.length
  if (!m) {
    return result;
  }
  const n = matrix[0].length
  let direction = 0;
  while (true) {
    if (direction == 0) {
      for (let i = 0; i < n; i++) {
        result.push(matrix[0][i])
      }
      direction = 1;
    }
    else if (direction == 1) {
      for (let i = 1; i < m; i++) {
        result.push(matrix[i][n - 1])
      }
      direction = 2;
    }
    else if (direction == 2) {
      for (let i = n - 2; i >= 0; i--) {
        result.push(matrix[m - 1][i])
      }
      direction = 3
    }
    else {
      for (let i = m - 2; i > 0; i--) {
        result.push(matrix[i][0])
      }
      break;
    }

  }

  return result.sort((a, b)=> a - b);
}

console.log(spiralMatrix(mat))
console.log(spiralMatrix([[1, 2, 3], [8, 9, 4], [7, 6, 5]]))