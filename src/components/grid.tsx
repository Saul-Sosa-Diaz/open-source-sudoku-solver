import { Cell } from './cell';
import { StyledGrid } from './grid.styles';

type GridProps = {
    values: number[][];
}


export const Grid = ({ values }: GridProps) => {
    const sideSize = values.length;
    const numberRows = sideSize;
    const numberColumns = sideSize;
    const rowDivisions = Math.floor(numberRows / 3);
    const colDivisions = Math.floor(numberColumns / 3);

    return (
        < StyledGrid style={{
            gridTemplateColumns: `repeat(${numberColumns}, 1fr)`,
            gridTemplateRows: `repeat(${numberRows}, 1fr)`,
        }} >
            {values.map((_, row) =>
                values[row].map((_, col) => {
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
                            {values[row][col] !== 0 ? values[row][col] : ""}
                        </Cell>
                    )})
            )}
        </StyledGrid >
    );
}