import { Box, chakra } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    minHeight: 'calc(100vh - 305px)',
    maxWidth: '1000px',
    margin: 'auto',
    paddingY: 8,
    paddingX: [4, 4, 0],
  },
})
