import { Grid } from './components/grid'
import {
  ButtonContainer,
  ButtonStyled,
  DropdownStyled,
  InvalidSudokuMessage,
  MainContainer,
  Title,
  ValidSudokuMessage,
  Wrapper,
} from './HomeScreen.styles'
import { useEffect, useState } from 'react'
import { generateSudoku } from './utils/generateSudoku'
import { Footer } from './components/footer'
import { checkSudokuIsValid } from './utils/resolveSudoku'
import { triggerConfettiAnimation } from './utils/confetti'

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
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])

  const [resolvedSudoku, setResolvedSudoku] = useState<number[][]>([])
  const [difficulty, setDifficulty] = useState<number>(50)
  const [difficultyOptions] = useState([
    { label: 'Easy 😴', value: 30 },
    { label: 'Normal 🎮', value: 50 },
    { label: 'Hard 🥵', value: 70 },
    { label: 'Impossible ☠️', value: 90 },
  ])
  const [isValid, setIsValid] = useState(false)
  const [hasCheckedSudoku, setHasCheckedSudoku] = useState(false)

  useEffect(() => {
    const generateSudokuAsync = async () => {
      const { generatedSudoku, resolvedSudoku } = await generateSudoku(difficulty)
      setSudoku(generatedSudoku)
      setResolvedSudoku(resolvedSudoku)
    }
    generateSudokuAsync()
  }, [])

  const resolveHandleClick = async () => {
    const clonedSudoku = resolvedSudoku.map((row) => [...row])
    setSudoku(clonedSudoku)
  }

  const generateHandleClick = async () => {
    const { generatedSudoku, resolvedSudoku } = await generateSudoku(difficulty)
    setSudoku(generatedSudoku)
    setResolvedSudoku(resolvedSudoku)
    setIsValid(false)
    setHasCheckedSudoku(false)
  }

  const handleCellChange = (row: number, col: number, value: number) => {
    const newGrid = sudoku.map((r, rowIndex) =>
      r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? value : cell)),
    )
    setSudoku(newGrid)
  }

  const handleCheckSudoku = async () => {
    const sudokuToCheck = sudoku.map((row) => [...row])
    setHasCheckedSudoku(true)
    const isValid = await checkSudokuIsValid(sudokuToCheck)
    if (isValid) {
      triggerConfettiAnimation()
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <Wrapper>
      <MainContainer>
        <Title>Sudoku Online</Title>
        <Grid values={sudoku} onChange={handleCellChange} />
        {hasCheckedSudoku && (
          <>
            {!isValid && <InvalidSudokuMessage>Invalid Sudoku...</InvalidSudokuMessage>}
            {isValid && <ValidSudokuMessage>Sudoku is valid! 🎉🎉🎉</ValidSudokuMessage>}
          </>
        )}
        <ButtonContainer>
          <ButtonStyled onClick={generateHandleClick}> Generate </ButtonStyled>
          <DropdownStyled
            appendTo={'self'}
            value={difficulty}
            onChange={(e) => setDifficulty(e.value)}
            options={difficultyOptions}
          />
        </ButtonContainer>
        <ButtonContainer>
          <ButtonStyled onClick={handleCheckSudoku}> Check </ButtonStyled>
          <ButtonStyled onClick={resolveHandleClick}> Solve </ButtonStyled>
        </ButtonContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  )
}
