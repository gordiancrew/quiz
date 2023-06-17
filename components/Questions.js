import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { storage } from "./data";
export default function Questions(props) {
  const [level, setLevel] = useState(1);
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
      <Image
        style={styles.imageLocation}
        source={storage.data.quest1.location[level-1].path}
      />

      <TouchableOpacity
        style={styles.but}
        onPress={() => {
          level !== 9 ? setData(level + 1) : setData(1);
          props.navigation.navigate("QuizField", { name: "uu" });
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
  imageLocation: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
