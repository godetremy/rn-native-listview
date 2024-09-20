import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NativeListview } from "rn-native-listview";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 200, backgroundColor: "#F004" }} />
      <NativeListview style={styles.listView} list_style="insetGrouped">
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </NativeListview>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listView: {
    flex: 1,
    height: 100,
    width: "100%",
    backgroundColor: "#F0F4",
  },
});

export default App;
