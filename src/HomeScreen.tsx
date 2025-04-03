import { Grid } from "./components/grid";
import { ButtonContainer, ButtonStyled, DropdownStyled, MainContainer, Title, Wrapper } from "./HomeScreen.styles";
import { useEffect, useState } from "react";
import { generateSudoku } from "./utils/generateSudoku";
import { Footer } from "./components/footer";



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
    const [resolvedSudoku, setResolvedSudoku] = useState<number[][]>([]);
    const [difficulty, setDifficulty] = useState<number>(50);
    const [difficultyOptions] = useState([
        { label: 'Easy 😴', value: 30 },
        { label: 'Normal 🎮', value: 50 },
        { label: 'Hard 🥵', value: 70 },
        { label: 'Impossible ☠️', value: 90 },
    ]);
    useEffect(() => {
        const generateSudokuAsync = async () => {
            const { generatedSudoku, resolvedSudoku } = await generateSudoku(difficulty);
            setSudoku(generatedSudoku);
            setResolvedSudoku(resolvedSudoku);
        }
        generateSudokuAsync();
    }, []);

    const resolveHandleClick = async () => {
        const clonedSudoku = resolvedSudoku.map(row => [...row]);
        setSudoku(clonedSudoku);
    };

    const generateHandleClick = async () => {
        const { generatedSudoku, resolvedSudoku } = await generateSudoku(difficulty);
        setSudoku(generatedSudoku);
        setResolvedSudoku(resolvedSudoku);
    };

    console.log('sudoku', sudoku);
    return (
        <Wrapper>
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
            <Footer />
        </Wrapper>
    );
}
