import { StyleSheet, Text, View } from "react-native";

export default function Game({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.butTextStyle}>This is page games</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: "#7c422e",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#401506",
    color: "white",

    width: "80%",
    height: 30,

    borderRadius: 10,
  },
  butTextStyle: {
    color: "#e3e485",
    fontSize: 20,
  },
  logo: {
    width: "80%",
    height: "15%",
  },
});
