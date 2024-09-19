import { StyleSheet, Text, View } from 'react-native';

import * as RNNativeListview from 'rn-native-listview';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RNNativeListview.hello()}</Text>
    </View>
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
