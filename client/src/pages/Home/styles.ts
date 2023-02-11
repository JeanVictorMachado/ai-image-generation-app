import { chakra, Text, Grid, Flex } from '@chakra-ui/react'

export const HomeTitle = chakra(Text, {
  baseStyle: {
    fontSize: 28,
    fontWeight: 700,
    color: 'gray.700',
  },
})

export const HomeSubtitle = chakra(Text, {
  baseStyle: {
    fontSize: 14,
    marginTop: 2,
    color: 'gray.500',
    marginBottom: 8,
  },
})

export const SearchText = chakra(Text, {
  baseStyle: {
    color: 'gray.600',
  },
})

export const NotFoundText = chakra(Text, {
  baseStyle: {
    color: 'gray.600',
    fontWeight: 600,
  },
})

export const PostsBox = chakra(Flex, {
  baseStyle: {
    minHeight: 'calc(100vh - 580px)',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Posts = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)'],
    gap: 2,
  },
})
