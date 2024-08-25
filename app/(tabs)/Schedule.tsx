import { StyleSheet, View, Text } from "react-native";

export default function Schedule() {
  const GlobalStyles = require("../../styles/GlobalStyles");
  return (
    <View style={GlobalStyles.defaultWrapper}>
      <Text style={styles.title}>Schedule</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
