import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <S.LinksContent>
        <S.LinksBox href="https://github.com/JeanVictorMachado" isExternal>
          <BsGithub size={30} color="lightGray" />
          <S.LinkText>GitHub</S.LinkText>
        </S.LinksBox>

        <S.SeparateLinks />

        <S.LinksBox href="https://www.linkedin.com/in/jean-machado-full-stack" isExternal>
          <AiFillLinkedin size={35} color="lightGray" />
          <S.LinkText>Linkedin</S.LinkText>
        </S.LinksBox>
      </S.LinksContent>

      <S.RegisterName>By Jean Machado © 2023</S.RegisterName>
    </S.Container>
  )
}
