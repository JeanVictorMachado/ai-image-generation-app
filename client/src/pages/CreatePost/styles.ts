import { Box, Button, chakra, Flex, Img, Text } from '@chakra-ui/react'
import { HomeTitle as Title, HomeSubtitle as Subtitle } from '@page/Home/styles'

export const HomeTitle = chakra(Title)

export const HomeSubtitle = chakra(Subtitle)

export const ImageBox = chakra(Box, {
  baseStyle: {
    maxWidth: ['full', '50%', '50%'],
    border: '1px solid',
    borderRadius: 6,
    position: 'relative',
    overflow: 'hidden',
  },
})

export const Image = chakra(Img, {
  baseStyle: {},
})

export const LoaderBox = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
})

export const GenerateButton = chakra(Button, {
  baseStyle: {
    maxWidth: ['full', '50%', '50%'],
    marginTop: 8,
    width: 'full',
    backgroundColor: 'green.500',
    color: 'white',

    _hover: {
      backgroundColor: 'green.600',
    },
  },
})

export const SubmitButtonBox = chakra(Flex, {
  baseStyle: {
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '1px solid',
    borderColor: 'gray.200',
    paddingTop: 10,
  },
})

export const SubmitText = chakra(Text, {
  baseStyle: {
    color: 'gray.500',
  },
})

export const SubmitButton = chakra(Button, {
  baseStyle: {
    maxWidth: ['full', 350, 350],
    marginTop: 2,
    width: 'full',
    color: 'blue.500',
  },
})
