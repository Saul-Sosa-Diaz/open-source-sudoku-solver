// https://www.101computing.net/sudoku-generator-algorithm/

import { resolveSudoku } from "./resolveSudoku";

const removeNumbers = (sudoku: number[][], difficulty: number) => {
    const totalCells = sudoku.length * sudoku[0].length;

    const cellsToRemove = Math.floor(totalCells * (difficulty / 100));
    const cellsRemoved = new Set<number>();

    while (cellsRemoved.size < cellsToRemove) {
        const randomRow = Math.floor(Math.random() * sudoku.length);
        const randomCol = Math.floor(Math.random() * sudoku[0].length);
        const cellIndex = randomRow * sudoku[0].length + randomCol;
        if (!cellsRemoved.has(cellIndex)) {
            cellsRemoved.add(cellIndex);
            sudoku[randomRow][randomCol] = 0; // Remove the number
        }
    }
}

export const generateSudoku = async (difficulty: number) => {
    const sudoku = Array.from({ length: 9 }, () => Array(9).fill(0));
    await resolveSudoku(sudoku);
    removeNumbers(sudoku, difficulty);
    return sudoku;
}