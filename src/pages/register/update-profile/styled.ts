import { Box, styled, Text } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  span: {
    fontFamily: 'inter',
    display: 'inline-block',
    transition: 'transform 200ms',
  },

  '@media(hover: hover) and (pointer: fine)': {
    ':hover span': {
      transform: 'translateX(2px)',
    },
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
