import { createStitches } from '@stitches/react'

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
  },
})

export type ColorTokens = keyof typeof theme.colors
