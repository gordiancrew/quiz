import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { disableExpoCliLogging } from "expo/build/logs/Logs";
const image = { url: "../asses/ratusha.jpg" };
const pathLoc1 = "../assets/locations/loc1.png";
let path = "";
import { storage } from "./data";


export default function Developers(props) {
  const count = 3;
  const [level, setLevel] = useState(0);
  useEffect(() => {
    getData();
  });

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
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={storage.data}
        // keyExtractor={(item, index) => item?.index}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            disabled={level === index + 1 ? false : true}
            onPress={() => {
              // setLevel(+item);
              path = `../assets/locations/loc${1}.png`;
              if (level === index + 1) {
                setData(item.level);
                props.navigation.navigate("Questions");
              }
            }}
            style={[
              styles.point,
              level > index + 1
                ? {
                    disabled: "disabled",
                  }
                : level === index + 1
                ? {
                    backgroundColor: "green",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  }
                : { borderWidth: 2, borderColor: "white" },
            ]}
          >
            <ImageBackground
              source={
                index + 1 < level ? item.path : require("../assets/icon.png")
              }
              resizeMode="cover"
              style={styles.image}
            >
              {level < index + 1 ? (
                <Text style={styles.pointTextStyle}> &#x1f512; </Text>
              ) : (
                <Text style={styles.pointTextStyle}>{item.level}</Text>
              )}
            </ImageBackground>
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

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "grey",

   
  },
  list: {
    // backgroundColor: "green",
    width: "100%",
  },
  pointTextStyle: {
    color: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLocation: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});
