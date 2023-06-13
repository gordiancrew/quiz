import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function Questions(props) {
  const [level, setLevel] = useState(0);
  useEffect(() => {
    getData();
  }, []);

  getData = async () => {
    try {
      val = await AsyncStorage.getItem("level");
      if (val !== null) {
        // We have data!!
        setLevel(+val);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  setData = async (val) => {
    try {
      await AsyncStorage.setItem("level", val.toString());
    } catch (error) {
      // Error saving data
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.butTextStyle}>{level}</Text>

      <TouchableOpacity
        style={styles.but}
        
        onPress={() => {
          
          level!==9?setData(level+1):setData(1);
          props.navigation.navigate("Developers", { name: "uu" });
        }}
      >
        <Text style={styles.butTextStyle}>Next level</Text>
      </TouchableOpacity>
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