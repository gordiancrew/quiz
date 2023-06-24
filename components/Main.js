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
    color: "#f4eade",

    width: "80%",
    height: 30,

    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: "white",
  },
  butTextStyle: {
    // color: "#e3e485",
    color: "#f4eade",
    
    fontSize: 20,
    fontWeight:700,
  },
  logo: {
    width: "80%",
    height: "25%",
  },
});
