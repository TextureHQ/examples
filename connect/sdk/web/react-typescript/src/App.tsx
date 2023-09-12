import { useCreateSession } from '@texturehq/connect-sdk'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { open } = useCreateSession({
    linkToken: 'link_84d936e5e1fb9dc7929711749d154be2',
    onSuccess: (session) => {
      console.log(session)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => open()}>
          Open Texture
        </button>
      </div>
    </>
  )
}

export default App
