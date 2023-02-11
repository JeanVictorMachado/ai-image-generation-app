type GetDalleImageProps = {
  prompt: string
}

type ShareDalleImageProps = {
  name: string
  prompt: string
  photo: string
}

export const createDalleImage = async ({ prompt }: GetDalleImageProps) => {
  const response = await fetch('http://localhost:8080/api/v1/dalle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  }).then((res) => res.json())

  return response
}

export const shareDalleImage = async ({ ...form }: ShareDalleImageProps) => {
  const response = await fetch('http://localhost:8080/api/v1/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...form }),
  }).then((res) => res.json())

  return response
}

export const getDalleImages = async () => {
  const response = await fetch('http://localhost:8080/api/v1/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())

  return response
}
