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

export default function QuizField(props) {
  const count = 3;
  const [level, setLevel] = useState(1);
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
      <View style={styles.frame}>
        <Text style={styles.butTextStyle}>Квест 1: "От ратуши"</Text>
      </View>
      <FlatList
        style={styles.list}
        numColumns={3}
        // snapToAlignment="sspace-around"
        // style={styles.list}
        contentContainerStyle={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
        data={storage.data.quest1.location}
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
                    backgroundColor: "rgb(199, 193, 22)",
                    shadowColor: "#171717",
                    borderWidth: 2,
                    borderColor: "white",
                    overflow: "hidden",
                  }
                : {},
            ]}
          >
            <ImageBackground
              source={
                index + 1 <= level ? item.path : require("../assets/lock.png")
              }
              resizeMode="cover"
              style={styles.image}
            >
              {/* {level === index + 1 ? (
                // <Text style={styles.pointTextStyle}> &#x1f512; </Text>
                <Text style={styles.pointTextStyle}> ?</Text>
              ) : (
                <Text style={styles.pointTextStyle}></Text>
              )} */}
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
    display: "flex",
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
    color: "white",
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
    borderRadius: 20,
    margin: "5%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    shadowColor: "grey",
  },
  // list: {
  //   backgroundColor: "green",

  // },
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
  frame: {
    width: 300,
    height: 80,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
});
