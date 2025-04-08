import { styled } from '@stitches/react'
import { COLORS } from './constants/colors'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'

export const Wrapper = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  alignItems: 'center',
})

export const Title = styled('h1', {
  fontSize: '3rem',
  color: COLORS['main-100'],
  margin: '0',
  marginTop: '2rem',
  marginBottom: '2rem',
  padding: '0',

  '@media (max-width: 768px)': {
    fontSize: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
})

const BaseSudokuMessage = styled('h2', {
  fontSize: '2rem',
  margin: '0',
  marginTop: '2rem',
  padding: '0',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
    marginTop: '1rem',
  },
})

export const InvalidSudokuMessage = styled(BaseSudokuMessage, {
  color: COLORS['accent-red'],
})

export const ValidSudokuMessage = styled(BaseSudokuMessage, {
  color: COLORS['accent-green'],
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
  alignContent: 'center',
  justifyContent: 'center',
  width: '22%',
  minWidth: '400px',


  '@media (max-width: 768px)': {
    flexDirection: 'column',
    width: '80%',      
    minWidth: 'auto',  
    gap: '0.5rem',
    marginTop: '1rem',
    padding: '0 2rem',
  },
})

export const DropdownStyled = styled(Dropdown, {
  backgroundColor: COLORS['main-100'],
  color: COLORS['main-300'],
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  alignItems: 'center',
  alignContent: 'center',
  display: 'flex',
  textAlign: 'center',
  flex: 1,
  justifyContent: 'center',
  padding: '1rem',
  fontSize: '1.5rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: COLORS['main-200'],
    color: COLORS['main-100'],
  },
  '&:active': {
    backgroundColor: COLORS['main-300'],
    color: COLORS['main-100'],
  },
  '& .p-dropdown-panel': {
    backgroundColor: COLORS['main-100'],
    color: COLORS['main-300'],
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  '& .p-dropdown-item': {
    backgroundColor: COLORS['main-100'],
    color: COLORS['main-300'],
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: COLORS['main-200'],
      color: COLORS['main-100'],
    },
    '&:active': {
      backgroundColor: COLORS['main-300'],
      color: COLORS['main-100'],
    },
  },

  '@media (max-width: 768px)': {
    fontSize: '1rem',
    padding: '0.75rem',
    '& .p-dropdown-panel': {
      fontSize: '1rem',
      alignContent: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      
    },
    '& .p-dropdown-item': {
      fontSize: '1rem',
    },
    
  },
})

export const ButtonStyled = styled(Button, {
  backgroundColor: COLORS['main-100'],
  color: COLORS['main-300'],
  border: 'none',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '8px',
  padding: '1rem 2rem',
  fontSize: '1.5em',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: COLORS['main-200'],
    color: COLORS['main-100'],
  },
  '&:active': {
    backgroundColor: COLORS['main-300'],
    color: COLORS['main-100'],
  },
  '&:disabled': {
    backgroundColor: COLORS['main-200'],
    color: COLORS['main-100'],
    cursor: 'not-allowed',
  },
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.1rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

  // Ajuste responsivo en móviles
  '@media (max-width: 768px)': {
    fontSize: '1rem',
    
    alignContent: 'center',
    justifyContent: 'center',
  },
})