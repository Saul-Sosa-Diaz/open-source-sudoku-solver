import { styled } from '@stitches/react'

export const StyledGrid = styled('div', {
  display: 'grid',
  gap: '1px',
  backgroundColor: '#000',
  overflow: 'hidden',
  borderRadius: '16px',
  '@media (max-width: 768px)': {
    maxWidth: '90%', 
    '& .sudoku-fixed': {
      fontSize: '1rem',
    },
    '& .sudoku-input': {
      fontSize: '1rem',
    },
  },
})
