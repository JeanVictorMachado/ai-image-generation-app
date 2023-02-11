import { ReactNode } from 'react'

import * as S from './styles'

type PageWrapperProps = {
  children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <S.Container>{children}</S.Container>
}
