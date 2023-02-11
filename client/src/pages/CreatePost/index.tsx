import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '@assets/index'
import { getRandomPrompt } from '@utils/getRandomPrompt'

import { FormField } from '@component/FormField'
import { Loader } from '@component/Loader'
import { PageWrapper } from '@component/PageWrapper'

import * as api from '@service/api/dalle'

import * as S from './styles'

export const CreatePost = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [generatingImg, setGeneratingImg] = useState(false)
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const handleGenerateImg = () => {
    if (form.prompt) {
      setGeneratingImg(true)

      api
        .createDalleImage({ prompt: form.prompt })
        .then((data) => {
          setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
        })
        .catch((err) => alert(err))
        .finally(() => setGeneratingImg(false))
    } else {
      alert('Please provide proper prompt')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.prompt && form.photo) {
      setIsLoading(true)

      api
        .shareDalleImage(form)
        .then(() => {
          alert('Success')
          navigate('/')
        })
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false))
    } else {
      alert('Please generate an image with proper details')
    }
  }

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt()

    if (randomPrompt === form.prompt) {
      const randomPrompt = getRandomPrompt()
      setForm({ ...form, prompt: randomPrompt })
      return
    }

    setForm({ ...form, prompt: randomPrompt })
  }

  return (
    <PageWrapper>
      <S.HomeTitle>Create</S.HomeTitle>
      <S.HomeSubtitle>
        Create imaginative and visually stunning images through DALL-E AI and share them with the
        community
      </S.HomeSubtitle>

      <form onSubmit={handleSubmit}>
        <FormField
          labelName="Your name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={({ target }) => handleChange(target)}
          required
        />

        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A plush toy robot sitting against a yellow wall"
          value={form.prompt}
          onChange={({ target }) => handleChange(target)}
          isSurpriseMe
          onSurpriseMe={handleSurpriseMe}
          required
        />

        <S.ImageBox borderColor="gray.200" padding={!form.photo ? 8 : 0}>
          {form.photo ? (
            <S.Image src={form.photo} alt={form.prompt} />
          ) : (
            <S.Image src={preview} alt="preview" opacity={0.5} />
          )}

          {generatingImg && (
            <S.LoaderBox>
              <Loader />
            </S.LoaderBox>
          )}
        </S.ImageBox>

        <S.GenerateButton onClick={handleGenerateImg} isLoading={generatingImg}>
          {generatingImg ? 'Generating...' : 'Generate'}
        </S.GenerateButton>

        <S.SubmitButtonBox>
          <S.SubmitText>
            Once you have created the image you want, you can share it with others in the community
          </S.SubmitText>

          <S.SubmitButton type="submit" isLoading={isLoading} variant="outline" colorScheme="teal">
            {isLoading ? 'Sharing...' : 'Share with the Community'}
          </S.SubmitButton>
        </S.SubmitButtonBox>
      </form>
    </PageWrapper>
  )
}
