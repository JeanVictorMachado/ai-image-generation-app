import { Box, chakra, Flex, Link, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: 'full',
    height: 200,
    marginTop: 8,
    background: 'gray.800',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const LinksContent = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
  },
})

export const LinksBox = chakra(Link, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const LinkText = chakra(Text, {
  baseStyle: {
    marginLeft: 2,
    color: 'gray.200',
  },
})

export const SeparateLinks = chakra(Box, {
  baseStyle: {
    width: '2px',
    height: '30px',
    marginLeft: 4,
    marginRight: 4,
    background: 'lightGray',
  },
})

export const RegisterName = chakra(Text, {
  baseStyle: {
    marginTop: 8,
    fontSize: 14,
    color: 'gray.500',
  },
})
