import { styled } from "@stitches/react";
import { COLORS } from "../constants/colors";

export const StyledCell = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: COLORS['main-100'],
  width: '3em',
  height: '3em',
  '@media (max-width: 768px)': {
    width: '2em',
    height: '2em',
  },
})