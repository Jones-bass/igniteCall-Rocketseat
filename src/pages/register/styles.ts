import { styled, Box, Heading, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
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
      transform: 'translateX(4px)',
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})
