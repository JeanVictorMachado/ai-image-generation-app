import { Link, useLocation } from 'react-router-dom'

import { logo } from '@assets/index'

import * as S from './styles'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <S.Container borderColor="lightGray.100">
      <Link to="/">
        <S.Image src={logo} alt="OpenAI logo" />
      </Link>

      {pathname !== '/create-post' && (
        <Link to="/create-post">
          <S.CreateButton>Create</S.CreateButton>
        </Link>
      )}
    </S.Container>
  )
}
