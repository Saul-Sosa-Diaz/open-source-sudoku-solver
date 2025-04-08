type CellPosition = {
    row: number
    column: number
}

const checkIfValid = (sudoku: number[][], row: number, column: number) => {
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[row][i] === sudoku[row][column] && i !== column) {
            return false
        }
    }
    for (let i = 0; i < sudoku.length; i++) {
        if (sudoku[i][column] === sudoku[row][column] && i !== row) {
            return false
        }
    }
    const subGridRowStart = Math.floor(row / 3) * 3
    const subGridColumnStart = Math.floor(column / 3) * 3
    for (let i = subGridRowStart; i < subGridRowStart + 3; i++) {
        for (let j = subGridColumnStart; j < subGridColumnStart + 3; j++) {
            if (sudoku[i][j] === sudoku[row][column] && (i !== row || j !== column)) {
                return false
            }
        }
    }
    return true
}

export const checkSudokuIsValid = async (sudoku: number[][]) => {
    for (let row = 0; row < sudoku.length; row++) {
        for (let column = 0; column < sudoku.length; column++) {
            if (sudoku[row][column] !== 0) {
                const isValid = checkIfValid(sudoku, row, column)
                if (!isValid) {
                    return false
                }
            } else {
              return false 
            }
        }
    }
    return true
}


export const resolveSudoku = async (sudoku: number[][]) => {
  // 1. Encontrar una celda vacia
  // 2. Poner un número en ella
  // 3. Comprobar si es válido
  // 4. Si es válido llamar a resolver sudoku, si no devolver
  const tempSudoku = sudoku
  let emptyCellPosition: CellPosition = { row: -1, column: -1 }
  let foundEmptyCell = false
  for (let row = 0; row < tempSudoku.length && !foundEmptyCell; row++) {
    for (let column = 0; column < tempSudoku.length && !foundEmptyCell; column++) {
      if (tempSudoku[row][column] == 0) {
        emptyCellPosition = { row, column }
        foundEmptyCell = true
      }
    }
  }
  if (emptyCellPosition.row === -1 && emptyCellPosition.column === -1) {
    return tempSudoku // esto está lleno
  }
  const possiblesValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // Comprobar ahora con todos los valores posibles
  while (possiblesValues.length > 0) {
    const randomIndex = Math.floor(Math.random() * possiblesValues.length)
    const possibleValues = possiblesValues.splice(randomIndex, 1)
    tempSudoku[emptyCellPosition.row][emptyCellPosition.column] = possibleValues[0]
    const isValid = checkIfValid(tempSudoku, emptyCellPosition.row, emptyCellPosition.column)

    if (isValid) {
      const result = await resolveSudoku(tempSudoku)
      if (result) {
        return result
      }
    }
    // Si no es válido, volver a poner 0
    tempSudoku[emptyCellPosition.row][emptyCellPosition.column] = 0
  }
}