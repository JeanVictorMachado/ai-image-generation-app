import { download } from '@assets/index'
import { downloadImage } from '@utils/downloadImage'

import * as S from './styles'

export type PostProps = {
  __v?: number
  _id: string
  name: string
  photo: string
  prompt: string
  position: number
}

export const Card = ({ _id, name, prompt, photo, position }: PostProps) => {
  return (
    <S.Container rowSpan={position === 1 ? 2 : 1} colSpan={position === 1 ? 2 : 1}>
      <S.Image src={photo} alt={prompt} />

      <S.DownloadContainer>
        <S.DownloadBox>
          <S.PhotoDescription>{prompt}</S.PhotoDescription>

          <S.DownloadButtonBox>
            <S.NameBox>
              <S.InitialName>{name[0]}</S.InitialName>
              <S.Name maxWidth={position === 1 ? 200 : 70}>{name}</S.Name>
            </S.NameBox>

            <S.DownloadButton
              src={download}
              alt="download"
              onClick={() => downloadImage(_id, photo)}
            />
          </S.DownloadButtonBox>
        </S.DownloadBox>
      </S.DownloadContainer>
    </S.Container>
  )
}
