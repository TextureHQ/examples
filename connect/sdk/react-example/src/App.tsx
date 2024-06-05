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
      manufacturerFilters: { manufacturers: ["honeywell", "daikin"] },
      customerInfo: {
        email: "example@example.com",
        phone: "5555555555",
        firstName: "John",
        lastName: "Doe",
      },
    },
    onSuccess: ({ scopedKey }) => {
      console.log(scopedKey);
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
            width: 600,
            height: 800,
          })
        }
      >
        Connect device(s) with Texture
      </button>
    </div>
  );
}

export default App;
