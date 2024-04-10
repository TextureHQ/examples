# Connect SDK React Native Example

This example demonstrates how to use the [React Native Connect SDK](https://www.npmjs.com/package/@texturehq/react-native-connect-sdk) in a sample React Native application.

More information can also be found in our [docs](https://docs.texturehq.com/docs/connections/texture-connect).

## Running the example

The example itself leverages [Expo](https://expo.dev/), however any standard React Native application build is supported. It's worth noting the [Expo Go](https://docs.expo.dev/get-started/expo-go/) development application itself is not supported due to its prebuilt native dependency limitations.

iOS:

```bash
npx expo run:ios
```

Android:

```bash
npx expo run:android
```

## Using your own Connect API Key

To use your own Connect API Key with this example, you can set the `CONNECT_API_KEY` environment variable to your API Key in `App.js`.