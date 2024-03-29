#!/usr/bin/env node

const textureApiUrl = "https://api.texture.energy";
const apiKey = process.env.TEXTURE_API_KEY || "<your-api-key-goes-here>";

console.log(`Using API key: ${apiKey}`);

// Node v18 has fetch built in
fetch("https://api.texture.energy/v1/connections", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Texture-Api-Key": apiKey,
  },
  body: JSON.stringify({
    referenceId: "9bb290c8-fe97-46ce-92a8-952823164277", // A unique ID in your system for this connection
    redirectUrl: "http://localhost:8910", // The URL to redirect to after the user has connected
    tags: ["banana", "strawberry"], // The tags to group devices by
    clientName: "Energy Demo", // The name of your application
    email: "person@gmail.com", // The email address of the user to connect
  }),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(
      `Failed to make request: ${response.status}, ${response.statusText}`
    );
  })
  .then((responseJSON) => {
    console.log(responseJSON);
  })
  .catch((error) => {
    console.error("Failed to make request", error);
  });
