import { useCreateSession } from "@texturehq/connect-sdk";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { ICreateSessionResult, IConnectLink, IConnectLinkOptions } from "./schemas";

const apiKey = import.meta.env.VITE_API_KEY;

function useCreateLinkSession(connectApiKey: string): ICreateSessionResult {
  const [link, setLink] = useState<IConnectLink | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const createSession = useCallback(
    async function (options: IConnectLinkOptions): Promise<void> {
      try {
        setLoading(true)
        setLink(null)
        setError(null)

        const response = await fetch(
          `https://api.texture.energy/v1/connections`,
          {
            method: "POST",
            headers: {
              "x-api-key": connectApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(options),
          }
        );

        if (!response.ok) {
          throw new Error(`Create Session Request failed: ${response.status} - ${response.statusText}`)
        }

        const responseJSON: IConnectLink = await response.json()
        
        setLink(responseJSON)
        setLoading(false)
      } catch (err) {
        const error = err as Error
        setError(error)
        setLoading(false)
      }
    },
    [connectApiKey]
  );

  return {
    createSession,
    link,
    loading,
    error,
  }
}

function App() {
  const { createSession, link, loading, error } = useCreateLinkSession(apiKey)
  const { open } = useCreateSession({
    linkToken: link?.linkToken || '',
    onSuccess: (session) => {
      console.log(session);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    createSession({
      referenceId: "connect-sdk-example",
      clientName: "Connect SDK Example",
    })
  }, [])

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
        <button disabled={loading || !!error} onClick={() => open()}>Open Texture</button>
      </div>
    </>
  );
}

export default App;
