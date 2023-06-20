import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.butTextStyle}>ИГРАТЬ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("Rules")}
      >
        <Text style={styles.butTextStyle}>ПРАВИЛА</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("Developers")}
      >
        <Text style={styles.butTextStyle}>СОЗДАТЕЛИ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    // marginTop: 50,
    // marginBottom: 50,

    flex: 1,
    backgroundColor: "#7c422e",
    alignItems: "center",
    justifyContent: "space-around",
  },
  but: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(199, 193, 22)",
    color: "rgb(74, 9, 5)",

    width: "80%",
    height: 30,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  butTextStyle: {
    // color: "#e3e485",
    color: "rgb(66, 5, 3)",
    fontSize: 20,
    fontWeight:700,
  },
  logo: {
    width: "80%",
    height: "15%",
  },
});
