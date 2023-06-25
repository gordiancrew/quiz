import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image
} from "react-native";

export default function QuizField({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.butLink}
        onPress={() => Linking.openURL("https://www.instagram.com/firjdev/")}
      >
        <View style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
          <Image
          source={require("../assets/inst.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.butTextStyle}>Наш инстаграмм</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butLink}
        onPress={() => Linking.openURL("https://www.linkedin.com/in/uladzimir-kazantsau")}
      >
        
        <View style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
          <Image
          source={require("../assets/link.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.butTextStyle}>Developer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butLink}
        onPress={() => Linking.openURL("https://www.linkedin.com/in/andrei-paulau-99441a235")}
      >
        <View style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
          <Image
          source={require("../assets/link.png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Text style={styles.butTextStyle}>Project-manager</Text>
        </View>
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
    backgroundColor: "#401506",
    color: "white",

    width: "80%",
    height: 30,

    borderRadius: 10,
  },
  butTextStyle: {
    color: "white",
    fontSize: 20,
  },
  logo: {
    width: "80%",
    height: "15%",
  },
  butLink: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#2f496e",
    color: "white",
    width: "80%",
    height: 30,
    borderRadius: 10,
  },
  image:{
    height:40,
    width:40,
    marginRight:10,
    marginLeft:30
  }
});
