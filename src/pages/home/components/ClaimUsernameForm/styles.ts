import { Box, styled, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  span: {
    fontFamily: 'inter',
    display: 'inline-block',
    transition: 'transform 200ms',
  },

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },

  '@media(hover: hover) and (pointer: fine)': {
    ':hover span': {
      transform: 'translateX(2px)',
    },
  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  },
})
