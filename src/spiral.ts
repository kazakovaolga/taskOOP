export function spiral(matrix: number[][]): any {
  const newMatrix: number[] = [];
  let currentRow: number = matrix.length;
  const row = currentRow;
  let currentColumn: number = matrix[0].length;
  const column: number = currentColumn;

  while (currentRow > row / 2) {
    // traverse row forward
    for (let i = column - currentColumn; i < currentColumn; i++) {
      newMatrix.push(matrix[row - currentRow][i]);
    }

    // traverse column downward
    for (let i = row - currentRow + 1; i < currentRow; i++) {
      newMatrix.push(matrix[i][currentColumn - 1]);
    }

    // traverse row backward
    for (let i = currentColumn - 1; i > column - currentColumn; i--) {
      newMatrix.push(matrix[currentRow - 1][i - 1]);
    }

    // traverse column upward
    for (let i = currentRow - 1; i > row - currentRow + 1; i--) {
      newMatrix.push(matrix[i - 1][column - currentColumn]);
    }

    currentRow--;
    currentColumn--;
  }
  return newMatrix;
}
