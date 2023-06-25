import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Game({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("QuizField")}
      >
        <Text style={styles.butTextStyle}>Квест 1: "От ратуши"</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    flex: 1,
    backgroundColor: "#2988bc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ed8c72",
    color: "rgb(74, 9, 5)",
    width: "80%",
    height: 30,
    borderRadius: 10,
  },
  butTextStyle: {
    color: "#f4eade",
    fontSize: 20,
    fontWeight:700,
  },
});
