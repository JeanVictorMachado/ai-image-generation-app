import { Box, Button, chakra, Input, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: 'full',
    marginBottom: 8,
  },
})

export const Label = chakra(Text, {
  baseStyle: {
    width: '100%',
    color: 'gray.700',
  },
})

export const TextInput = chakra(Input, {
  baseStyle: {
    marginTop: 2,
  },
})

export const SurpriseMeButton = chakra(Button, {
  baseStyle: {
    padding: 2,
    fontSize: 12,
    marginLeft: 2,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.4)',
  },
})
