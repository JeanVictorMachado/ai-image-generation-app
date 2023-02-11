import { InputHTMLAttributes } from 'react'

import * as S from './styles'

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  labelName: string
  isSurpriseMe?: boolean
  onSurpriseMe?: () => void
}

export const FormField = ({ labelName, isSurpriseMe, onSurpriseMe, ...props }: FormFieldProps) => {
  return (
    <S.Container>
      <S.Label>
        {labelName}
        {isSurpriseMe && (
          <S.SurpriseMeButton size="xs" onClick={onSurpriseMe}>
            Surprise me
          </S.SurpriseMeButton>
        )}
      </S.Label>

      <S.TextInput {...props} />
    </S.Container>
  )
}
