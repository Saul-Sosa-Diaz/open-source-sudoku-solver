import { Grid } from "./components/grid";
import { ButtonContainer, ButtonStyled, DropdownStyled, MainContainer, Title } from "./HomeScreen.styles";
import { Dropdown } from 'primereact/dropdown';
import { resolveSudoku } from "./utils/resolveSudoku";
import { useEffect, useState } from "react";
import { generateSudoku } from "./utils/generateSudoku";


// [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]

// [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 0, 0, 0, 7, 9]
export const HomeScreen = () => {
    const [sudoku, setSudoku] = useState<number[][]>([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    const [difficulty, setDifficulty] = useState<number>(50);
    const [difficultyOptions] = useState([
        { label: 'Easy 😴', value: 30 },
        { label: 'Normal 🎮', value: 50 },
        { label: 'Hard 🥵', value: 70 },
        { label: 'Impossible ☠️', value: 90 },
    ]);
    useEffect(() => {
        const generateSudokuAsync = async () => {
            const generatedSudoku = await generateSudoku(difficulty);
            setSudoku(generatedSudoku);
        }
        generateSudokuAsync();
    }, []);

    const resolveHandleClick = async () => {
        const clonedSudoku = sudoku.map(row => [...row]);
        const resolved = await resolveSudoku(clonedSudoku);
        console.log('resolved', resolved);
        setSudoku(resolved);
    };

    const generateHandleClick = async () => {
        const generatedSudoku = await generateSudoku(difficulty);
        setSudoku(generatedSudoku);
    };

    console.log('sudoku', sudoku);
    return (
        <MainContainer>
            <Title>Sudoku Online</Title>
            <Grid values={sudoku} />
            <ButtonContainer>
                <ButtonStyled onClick={generateHandleClick}> Generate </ButtonStyled>
                <ButtonStyled onClick={resolveHandleClick}> Resolve </ButtonStyled>
            </ButtonContainer>

            <DropdownStyled
                appendTo={"self"}
                value={difficulty}
                onChange={(e) => setDifficulty(e.value)}
                options={difficultyOptions}
            />
        </MainContainer>
    );
}
