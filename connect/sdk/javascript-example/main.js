import "./style.css";
import { createConnectSession } from "@texturehq/connect-sdk";

const connectApiKey = import.meta.env.VITE_CONNECT_API_KEY;

const texture = createConnectSession({
  connectApiKey,
  connectOptions: {
    referenceId: "connect-sdk-example",
    clientName: "Connect SDK Example",
    tags: ["connect-sdk-example"],
    manufacturerFilters: { manufacturers: ['honeywell', 'daikin'] },
  },
  onSuccess: ({ scopedKey }) => {
    console.log(scopedKey);
  },
  onError({ type, reason }) {
    console.error(type, reason);
  },
});

document.querySelector("#app").innerHTML = `
  <div>
      <button id="texture-connect" type="button">Connect device(s) with Texture</button>
  </div>
`;

const textureConnectButton = document.querySelector("#texture-connect");
textureConnectButton.addEventListener("click", () =>
  texture.open({
    width: 480,
    height: 640,
  })
);
