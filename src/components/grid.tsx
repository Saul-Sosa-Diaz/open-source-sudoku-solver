import { Cell } from './cell'
import { StyledGrid } from './grid.styles'

type GridProps = {
  values: number[][]
    onChange: (row: number, col: number, value: number) => void
    initialValues?: number[][]
}

export const Grid = ({ values, onChange, initialValues }: GridProps) => {
  const sideSize = values.length
  const rowDivisions = Math.floor(sideSize / 3)
  const colDivisions = Math.floor(sideSize / 3)

  return (
    <StyledGrid
      style={{
        gridTemplateColumns: `repeat(${sideSize}, 1fr)`,
        gridTemplateRows: `repeat(${sideSize}, 1fr)`,
      }}
    >
      {values.map((rowVals, row) =>
        rowVals.map((cellValue, col) => {
          const isFixed = initialValues?.[row]?.[col] !== 0

          const isTopBorder = row % rowDivisions === 0 && row !== 0
          const isLeftBorder = col % colDivisions === 0 && col !== 0

          return (
            <Cell
              key={`${row}-${col}`}
              style={{
                boxSizing: 'border-box',
                borderTop: isTopBorder ? '2px solid black' : '1px solid #ccc',
                borderLeft: isLeftBorder ? '2px solid black' : '1px solid #ccc',
              }}
            >
              {isFixed ? (
                // Celda fija → solo se muestra como texto
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{cellValue}</span>
              ) : (
                <input
                  type="text"
                  maxLength={1}
                  value={cellValue === 0 ? '' : cellValue}
                  onChange={(e) => {
                    const val = e.target.value
                    const number = parseInt(val, 10)
                    if (!isNaN(number) && number >= 1 && number <= 9) {
                      onChange(row, col, number)
                    } else if (val === '') {
                      onChange(row, col, 0)
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    background: 'transparent',
                    outline: 'none',
                  }}
                />
              )}
            </Cell>
          )
        }),
      )}
    </StyledGrid>
  )
}