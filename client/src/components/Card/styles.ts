import { Box, Button, chakra, Flex, GridItem, Img, Text } from '@chakra-ui/react'

export const Container = chakra(GridItem, {
  baseStyle: {
    position: 'relative',
  },
})

export const Image = chakra(Img, {
  baseStyle: {
    borderRadius: 8,
  },
})

export const DownloadContainer = chakra(Flex, {
  baseStyle: {
    height: '100%',
    width: 'full',
    padding: 2,
    position: 'absolute',
    bottom: 0,
    alignItems: ['end'],
    opacity: 0,

    _hover: {
      transition: 'all ease 0.3s',
      opacity: 1,
    },
  },
})

export const DownloadBox = chakra(Box, {
  baseStyle: {
    width: 'full',
    padding: 4,
    borderRadius: 8,
    background: 'rgba(0, 0, 0, 0.85)',
  },
})

export const PhotoDescription = chakra(Text, {
  baseStyle: {
    color: 'gray.300',
    marginBottom: 2,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export const DownloadButtonBox = chakra(Flex, {
  baseStyle: {
    justifyContent: ['space-between'],
  },
})

export const NameBox = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
  },
})

export const InitialName = chakra(Flex, {
  baseStyle: {
    height: 25,
    width: 25,
    paddingTop: 0.5,
    fontSize: 14,
    marginRight: 2,
    borderRadius: '50%',
    background: 'blue.500',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Name = chakra(Text, {
  baseStyle: {
    color: 'white',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export const DownloadButton = chakra(Img, {
  baseStyle: {
    width: 25,
    filter: 'invert(95%)',
    cursor: 'pointer',

    _hover: {
      transition: 'all ease 0.3s',
      filter: 'invert(80%)',
    },
  },
})
