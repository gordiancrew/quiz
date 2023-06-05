import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
export default function Rules({ navigation }) {
  const [value, setValue] = useState(
    AsyncStorage.fir ? +AsyncStorage.value : 0
  );
  _storeData = async () => {
    try {
      await AsyncStorage.setItem("fir", (value + 1).toString());
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      val = await AsyncStorage.getItem("fir");
      if (value !== null) {
        // We have data!!
        setValue(+val);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.butTextStyle}>{value}</Text>
      <TouchableOpacity
        style={styles.but}
        onPress={() => {
          _storeData();
          _retrieveData();
        }}
      >
        <Text style={styles.butTextStyle}>set</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.but}
        onPress={() => {
          setValue(0);
        }}
      >
        <Text style={styles.butTextStyle}>reset</Text>
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
