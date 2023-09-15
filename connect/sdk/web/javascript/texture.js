import { createConnectSession } from "@texturehq/connect-sdk";

const apiKey = import.meta.env.VITE_API_KEY;

export async function setupTexture(element) {
  const texture = createConnectSession({
    connectApiKey: apiKey,
    connectOptions: {
      referenceId: "connect-sdk-example",
      clientName: "Connect SDK Example",
      tags: ["connect-sdk-example"],
    },
    onSuccess: ({ scopedKey }) => {
      console.log(scopedKey);
    },
    onError({ type, reason }) {
      console.error(type, reason);
    },
  });

  console.log(texture.url);

  element.addEventListener("click", () => texture.open());
}
