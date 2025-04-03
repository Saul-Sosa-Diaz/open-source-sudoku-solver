// https://www.101computing.net/sudoku-generator-algorithm/

import { resolveSudoku } from './resolveSudoku'

const removeNumbers = (sudoku: number[][], difficulty: number): number[][] => {
  const sudokuCopy = sudoku.map((row) => [...row]) // Create a copy of the sudoku grid
  const totalCells = sudokuCopy.length * sudokuCopy[0].length
  const cellsToRemove = Math.floor(totalCells * (difficulty / 100))
  const cellsRemoved = new Set<number>()

  while (cellsRemoved.size < cellsToRemove) {
    const randomRow = Math.floor(Math.random() * sudokuCopy.length)
    const randomCol = Math.floor(Math.random() * sudokuCopy[0].length)
    const cellIndex = randomRow * sudokuCopy[0].length + randomCol
    if (!cellsRemoved.has(cellIndex)) {
      cellsRemoved.add(cellIndex)
      sudokuCopy[randomRow][randomCol] = 0 // Remove the number
    }
  }
  return sudokuCopy
}

export const generateSudoku = async (
  difficulty: number,
): Promise<{ generatedSudoku: number[][]; resolvedSudoku: number[][] }> => {
  const emptySudoku = Array.from({ length: 9 }, () => Array(9).fill(0))
  const resolvedSudoku = await resolveSudoku(emptySudoku)
  const generatedSudoku = removeNumbers(resolvedSudoku, difficulty)
  return { generatedSudoku, resolvedSudoku }
}
