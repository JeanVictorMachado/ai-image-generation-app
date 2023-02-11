import { Img, chakra, Button, Flex } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    minHeight: '73px',
    padding: 4,
    borderBottom: '1px solid',
    alignItems: ['center'],
    justifyContent: ['space-between'],
  },
})

export const Image = chakra(Img, {
  baseStyle: {
    width: '110px',
  },
})

export const CreateButton = chakra(Button, {
  baseStyle: {
    backgroundColor: 'blue.400',
    color: 'white',

    _hover: {
      backgroundColor: 'blue.500',
    },
  },
})
