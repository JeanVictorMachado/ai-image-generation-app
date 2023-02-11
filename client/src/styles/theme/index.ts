import { extendTheme, theme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  ...theme,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      'html, body': {},
    },
  },
  colors: {
    ...theme.colors,
    lightGray: {
      100: '#EBEBEB',
    },
  },
})
