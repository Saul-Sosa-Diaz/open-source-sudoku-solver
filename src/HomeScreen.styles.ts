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
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
})

export const DropdownStyled = styled(Dropdown, {
  backgroundColor: COLORS['main-100'],
  color: COLORS['main-300'],
  border: 'none',
  borderRadius: '8px',
  marginTop: '1rem',
  fontWeight: 'bold',
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
})

export const ButtonStyled = styled(Button, {
  backgroundColor: COLORS['main-100'],
  color: COLORS['main-300'],
  border: 'none',
  borderRadius: '8px',
  padding: '1rem 2rem',
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
})
