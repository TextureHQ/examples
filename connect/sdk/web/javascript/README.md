# Connect SDK Javascript Example

This example demonstrates how to use the [Connect Web SDK](https://www.npmjs.com/package/@texturehq/connect-sdk) in a sample web application that is written using Javascript.

More information can also be found in our [docs](https://docs.texture.energy/docs/connections/texture-connect).

## Running the example

The example itself leverages [Vite](https://vitejs.dev/), so much of the information on running the example and Vite itself can be found in their [documentation](https://vitejs.dev/guide/cli.html#command-line-interface).

dev server:

```bash
npm run dev
```

build:

```bash
npm run build
```

preview/serve build:

```bash
npm run preview
```

## Using your own Connect API Key

To use your own Connect API Key with this example, you can set the `VITE_CONNECT_API_KEY` environment variable to your API Key. This can be done by creating a `.env` file in the root of this example and setting the variable there. An example `.env` file is provided in this example as `.env.example`.
