import { useCreateConnectSession } from "@texturehq/react-connect-sdk";
import "./App.css";

const connectApiKey = import.meta.env.VITE_CONNECT_API_KEY;

function App() {
  const { open } = useCreateConnectSession({
    connectApiKey,
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
    <div>
      <button
        onClick={() =>
          open({
            width: 480,
            height: 640,
          })
        }
      >
        Connect device(s) with Texture
      </button>
    </div>
  );
}

export default App;
