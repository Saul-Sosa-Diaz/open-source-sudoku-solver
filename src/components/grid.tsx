import { Cell } from './cell';
import { StyledGrid } from './grid.styles';

type GridProps = {
    values: number[][];
}


export const Grid = ({ values, onChange }: GridProps & { onChange: (row: number, col: number, value: number) => void }) => {
    const sideSize = values.length;
    const numberRows = sideSize;
    const numberColumns = sideSize;
    const rowDivisions = Math.floor(numberRows / 3);
    const colDivisions = Math.floor(numberColumns / 3);

    return (
        <StyledGrid style={{
            gridTemplateColumns: `repeat(${numberColumns}, 1fr)`,
            gridTemplateRows: `repeat(${numberRows}, 1fr)`,
        }}>
            {values.map((_, row) =>
                values[row].map((cellValue, col) => {
                    const isTopBorder = (row % rowDivisions === 0) && row !== 0;
                    const isLeftBorder = col % colDivisions === 0 && col !== 0;

                    return (
                        <Cell
                            key={`${row}-${col}`}
                            style={{
                                boxSizing: 'border-box',
                                borderTop: isTopBorder ? '2px solid black' : '1px solid #ccc',
                                borderLeft: isLeftBorder ? '2px solid black' : '1px solid #ccc',
                            }}
                        >
                            <input
                                type="text"
                                maxLength={1}
                                value={cellValue === 0 ? '' : cellValue}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const number = parseInt(val, 10);
                                    if (!isNaN(number) && number >= 1 && number <= 9) {
                                        onChange(row, col, number);
                                    } else if (val === '') {
                                        onChange(row, col, 0);
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
                        </Cell>
                    );
                })
            )}
        </StyledGrid>
    );
};