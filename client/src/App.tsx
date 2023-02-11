import { ChakraProvider } from '@chakra-ui/react'

import { customTheme } from './styles/theme'
import { AppRoutes } from './routes/index.routes'

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <AppRoutes />
    </ChakraProvider>
  )
}
