const apiKey = import.meta.env.VITE_API_KEY
const textureApiUrl = 'https://api.texture.energy'

async function createLinkSession() {
  const response = await fetch(`${textureApiUrl}/v1/connections`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify({
      referenceId: 'connect-sdk-example',
      clientName: 'Connect SDK Example',
    }),
  })
  const responseJSON = await response.json()
  return responseJSON.linkToken
}

export async function setupTexture(element) {
  const linkToken = await createLinkSession()
  const texture = window.Texture.createSession({
    linkToken,
    onSuccess: ({ scopedToken }) => {
      console.log(scopedToken)
    },
    onError({ type, reason }) {
      console.error(type, reason)
    },
  })

  console.log(texture.url)

  element.addEventListener('click', () => texture.open())
}
