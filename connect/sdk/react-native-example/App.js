import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';

import { TextureConnect } from '@texturehq/react-native-connect-sdk';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <TextureConnect 
          connectApiKey="<CONNECT_API_KEY>"
          connectOptions={{
            clientName: 'Texture Connect',
            referenceId: '123',
            redirectUrl: 'exp+react-native-example://',
          }}
          onError={(type, reason) => console.log(type, reason)}
          onSuccess={(scopedKey) => console.log("Texture Scoped Key", scopedKey)}
        >
        <Text>Texture Connect</Text>
      </TextureConnect>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
