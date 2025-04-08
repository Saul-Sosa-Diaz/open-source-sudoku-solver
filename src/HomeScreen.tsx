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
import { checkSudokuIsValid, checkSudokuSolution, resolveSudoku } from './utils/resolveSudoku'
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
  const [initialSudoku, setInitialSudoku] = useState<number[][]>([])

  const [difficulty, setDifficulty] = useState<number>(50)
  const [difficultyOptions] = useState([
    { label: 'Easy 😴', value: 30 },
    { label: 'Normal 🎮', value: 50 },
    { label: 'Hard 🥵', value: 70 },
    { label: 'Impossible ☠️', value: 90 },
  ])

  const [isValid, setIsValid] = useState(false)
  const [hasCheckedSudoku, setHasCheckedSudoku] = useState(false)
  const [emptySudoku, setEmptySudoku] = useState<boolean>(false)

  useEffect(() => {
    const generateSudokuAsync = async () => {
      if (emptySudoku) {
        const emptySudoku = Array.from({ length: 9 }, () => Array(9).fill(0))
        setSudoku(emptySudoku)
        setInitialSudoku(emptySudoku)
        return
      }
      const { generatedSudoku } = await generateSudoku(difficulty)
      setSudoku(generatedSudoku)
      setInitialSudoku(generatedSudoku)
    }

    generateSudokuAsync()
  }, [])

  useEffect(() => {
    if (emptySudoku) {
      const emptySudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(0))
      setSudoku(emptySudokuGrid)
      setInitialSudoku(emptySudokuGrid)
    }
  }, [emptySudoku])

  const resolveHandleClick = async () => {
    let sudokuToResolve
    if (emptySudoku) {
      sudokuToResolve = sudoku.map((row) => [...row])
      const isValid = await checkSudokuIsValid(sudokuToResolve)
      if(!isValid){
        setIsValid(false)
        setHasCheckedSudoku(true)
        return
      }
    } else {
      sudokuToResolve = initialSudoku.map((row) => [...row])
    }

    const resolvedSudoku = await resolveSudoku(sudokuToResolve)
    if (!resolvedSudoku) {
      setIsValid(false)
      setHasCheckedSudoku(true)
      return
    }

    setSudoku(resolvedSudoku as number[][])
    setIsValid(false)
    setHasCheckedSudoku(false)
  }

  const generateHandleClick = async () => {
    const { generatedSudoku } = await generateSudoku(difficulty)
    setEmptySudoku(false)
    setSudoku(generatedSudoku)
    setInitialSudoku(generatedSudoku)
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
    const isValid = await checkSudokuSolution(sudokuToCheck)
    if (isValid) {
      triggerConfettiAnimation()
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  const handleSetEmptySudoku = async () => {
    const emptySudoku = Array.from({ length: 9 }, () => Array(9).fill(0))
    setSudoku(emptySudoku)
    setInitialSudoku(emptySudoku)
    setIsValid(false)
    setHasCheckedSudoku(false)
    setEmptySudoku(true)
  }

  return (
    <Wrapper>
      <MainContainer>
        <Title>Sudoku Online</Title>
        <Grid values={sudoku} onChange={handleCellChange} initialValues={initialSudoku} />
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
        <ButtonContainer>
          <ButtonStyled onClick={handleSetEmptySudoku}> Empty Sudoku </ButtonStyled>
        </ButtonContainer>
      </MainContainer>
      <Footer />
    </Wrapper>
  )
}
