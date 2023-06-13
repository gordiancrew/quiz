import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Developers({ navigation }) {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const count = 3;
  const [level, setLevel] = useState(0);
  useEffect(()=>{ getData()} )

  setData = async (val) => {
    try {
      await AsyncStorage.setItem("level", val);
    } catch (error) {
      // Error saving data
    }
  };
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
  return (
    <View style={styles.container}>
      <Text style={styles.butTextStyle}>{level}</Text>
      <FlatList
        style={styles.list}
        numColumns={3}
        // snapToAlignment="sspace-around"
        // style={styles.list}
        contentContainerStyle={{
          backgroundColor: "blue",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={data}
        // keyExtractor={(item, index) => item?.index}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {

              // setLevel(+item);
              setData(item);
              navigation.navigate("Questions");
            }}
            style={[
              styles.point,
              count > index
                ? { backgroundColor: "black" }
                : count === index
                  ? {
                    backgroundColor: "yellow",
                    shadowColor: "#171717",
                  }
                  : {},
            ]}
          >
            <Text style={styles.pointTextStyle}>{item} </Text>
          </TouchableOpacity>
        )}
      />
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
    padding: 20,
    textAlign: "center",
  },
  logo: {
    width: "80%",
    height: "15%",
  },
  point: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: "5%",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "red",

  },
  list: {
    // backgroundColor: "green",
    width: "100%",

  },
  pointTextStyle: {
    color: "white",
  },
});
