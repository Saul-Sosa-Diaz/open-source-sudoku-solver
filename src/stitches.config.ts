import { createStitches } from '@stitches/react'
import { COLORS } from './constants/colors'

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      'main-050': '##5c068c',
    },
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    width: '100%',
    backgroundColor: COLORS['main-300'],
    fontFamily: 'Montserrat, sans-serif',
  },
})

export type ColorTokens = keyof typeof theme.colors
