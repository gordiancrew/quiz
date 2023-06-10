import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function Rules({ navigation }) {
  const [value, setValue] = useState(0);
  useEffect(()=>{getData()},[])
  
  seData = async () => {
    try {
      await AsyncStorage.setItem("fir", (value).toString());
    } catch (error) {
      // Error saving data
    }
  };
  getData = async () => {
    try {
      val = await AsyncStorage.getItem("fir");
      if (val !== null) {
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
          setValue(()=>value+1)
          seData()
        }}
      >
        <Text style={styles.butTextStyle}>set</Text>
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
