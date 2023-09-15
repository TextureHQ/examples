import { useCreateConnectSession } from "@texturehq/react-connect-sdk";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const { open } = useCreateConnectSession({
    connectApiKey: apiKey,
    connectOptions: {
      referenceId: "connect-sdk-example",
      clientName: "Connect SDK Example",
      tags: ["connect-sdk-example"],
    },
    onSuccess: (session) => {
      console.log(session);
    },
    onError: ({ type, reason }) => {
      console.error(type, reason);
    },
  });

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
        <button onClick={() => open()}>Open Texture</button>
      </div>
    </>
  );
}

export default App;
